import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {
  Animated,
  Dimensions,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import Suggested from './ForYou/Suggested';
import Liked from './ForYou/Liked';
import Library from './ForYou/Library';

import profileImage from '../../assets/profile.jpg';

const Tab = createMaterialTopTabNavigator();

const CustomTopTabBar = ({state, descriptors, navigation, position}) => {
  const theme = useColorScheme();

  const focusedColor = theme === 'dark' ? '#EEEEEE' : '#222831';
  const unfocusedColor = '#697565';

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.profileContainer,
          {backgroundColor: theme === 'dark' ? '#0B192C' : 'white'},
        ]}>
        <View style={styles.profile}>
          <ImageBackground
            source={profileImage}
            width={120}
            height={120}
            style={{
              flex: 1,
            }}
            resizeMode="cover"
          />
        </View>
      </View>
      <View style={{flexDirection: 'row'}}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];

          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          const inputRange = state.routes.map((_, i) => i);
          const opacity = position.interpolate({
            inputRange,
            outputRange: inputRange.map(i => (i === index ? 1 : 0.8)),
          });

          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{
                flex: 1,
                height: 60,
                paddingHorizontal: 4,
              }}
              key={index}>
              <Animated.View style={{opacity, flex: 1}}>
                <Animated.View
                  style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Animated.Text
                    style={[
                      styles.tabText,
                      {
                        color: isFocused ? focusedColor : unfocusedColor,
                      },
                    ]}>
                    {label}
                  </Animated.Text>
                </Animated.View>

                <Animated.View style={isFocused && styles.borderBottom} />
              </Animated.View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const ForYouTopTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="suggested"
      backBehavior="history"
      initialLayout={{
        width: Dimensions.get('window').width,
      }}
      screenOptions={{
        lazy: true,
      }}
      tabBar={props => <CustomTopTabBar {...props} />}>
      <Tab.Screen name="Suggested" component={Suggested} />
      <Tab.Screen name="Liked" component={Liked} />
      <Tab.Screen name="Library" component={Library} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {},
  profileContainer: {
    height: 140,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomRightRadius: 14,
    borderBottomLeftRadius: 14,
  },
  profile: {
    borderColor: 'white',
    borderWidth: 1,
    height: 120,
    width: 120,
    borderRadius: 60,
    overflow: 'hidden',
  },
  borderBottom: {
    height: 6,
    backgroundColor: '#FF6500',
    marginTop: 'auto',
    borderRadius: 8,
    marginBottom: 2,
  },
  tabText: {
    fontSize: 16,
    fontWeight: '600',
  },
});
export default ForYouTopTabs;
