import React, {Children, cloneElement, useEffect, useRef} from 'react';
import {
  StyleSheet,
  Animated,
  useColorScheme,
  Pressable,
  PanResponder,
} from 'react-native';

const BottomSheet = ({children, navigation, isOpen, setIsOpen}) => {
  const slide = useRef(new Animated.Value(600)).current;
  const theme = useColorScheme();

  const slideUp = () => {
    Animated.timing(slide, {
      toValue: 0,
      duration: 800,
      useNativeDriver: true,
    }).start();
  };

  const slideDown = () => {
    Animated.timing(slide, {
      toValue: 600,
      duration: 800,
      useNativeDriver: true,
    }).start();
  };

  const renderChildren = () =>
    Children.map(children, child =>
      cloneElement(child, {
        closeBottomSheet: () => {
          slideDown();
          setTimeout(() => setIsOpen(false), 800);
        },
      }),
    );

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (evt, gestureState) => {
        return Math.abs(gestureState.dy) > 5;
      },
      onPanResponderMove: (evt, gestureState) => {
        if (gestureState.dy > 0) {
          slide.setValue(gestureState.dy);
        }
      },
      onPanResponderRelease: (evt, gestureState) => {
        if (gestureState.dy > 150) {
          slideDown();
        } else {
          slideUp();
        }
      },
    }),
  ).current;

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
    <Pressable
      style={styles.backdrop}
      onPress={() => {
        slideDown();
        setTimeout(() => setIsOpen(false), 800);
      }}>
      <Animated.View
        {...panResponder.panHandlers}
        style={[
          styles.bottomSheet,
          {transform: [{translateY: slide}]},
          {backgroundColor: theme === 'dark' ? '#222831' : '#EEEEEE'},
        ]}>
        {renderChildren()}
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
    zIndex: 999,
  },
  bottomSheet: {
    height: '80%',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
export default BottomSheet;
