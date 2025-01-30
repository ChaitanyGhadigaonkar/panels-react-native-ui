import {useNavigation} from '@react-navigation/native';
import React, {Children, cloneElement, useEffect, useRef} from 'react';
import {
  StyleSheet,
  Animated,
  useColorScheme,
  Pressable,
  Dimensions,
  Modal,
} from 'react-native';

const {height: screenHeight} = Dimensions.get('window');

const BottomSheet = ({children, isOpen, setIsOpen, height = '60%'}) => {
  const slide = useRef(new Animated.Value(600)).current;
  const theme = useColorScheme();

  const navigation = useNavigation();

  const slideUp = () => {
    Animated.timing(slide, {
      toValue: 0,
      duration: 400,
      useNativeDriver: true,
    }).start();
  };

  const slideDown = () => {
    Animated.timing(slide, {
      toValue: 600,
      duration: 400,
      useNativeDriver: true,
    }).start();
  };

  const renderChildren = () =>
    Children.map(children, child =>
      cloneElement(child, {
        closeBottomSheet: () => {
          slideDown();
          setTimeout(() => setIsOpen(false), 400);
        },
      }),
    );

  useEffect(() => {
    // https://stackoverflow.com/questions/56745881/how-to-hide-bottom-navigation-bar-on-a-specific-screen-in-react-native
    navigation.setOptions({
      tabBarStyle: {
        display: 'none',
      },
    });

    return () => {
      navigation.setOptions({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme === 'dark' ? '#222831' : '#EEEEEE',
          height: 80,
        },
        tabBarLabelStyle: {
          color: theme === 'light' ? '#222831' : '#EEEEEE',
          fontSize: 14,
          marginBottom: 14,
        },
        tabBarIconStyle: {
          marginTop: 10,
          color: theme !== 'light' ? '#222831' : '#EEEEEE',
        },
      });
    };
  }, [navigation, isOpen]);

  useEffect(() => {
    slideUp();
  }, []);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isOpen}
      onRequestClose={() => {
        setIsOpen(false);
      }}>
      <Pressable
        style={styles.backdrop}
        onPress={() => {
          // slideDown();
          // setTimeout(() => setIsOpen(false), 400);
        }}>
        <Animated.View
          style={[
            styles.bottomSheet,
            {transform: [{translateY: slide}]},
            {backgroundColor: theme === 'dark' ? '#222831' : '#EEEEEE'},
            {height: height},
          ]}>
          {renderChildren()}
        </Animated.View>
      </Pressable>
    </Modal>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: screenHeight,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
    zIndex: 999,
    margin: 0,
    elevation: 5,
  },
  bottomSheet: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
});
export default BottomSheet;
