import {useColorScheme} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import ForYouTab from './AuthTabs/ForYou';
import ExploreTab from './AuthTabs/Explore';
import AccountsTab from './AuthTabs/AccountsTab';

const AuthTabs = createBottomTabNavigator();

const AuthTabNavigation = () => {
  const theme = useColorScheme();

  return (
    <AuthTabs.Navigator
      screenOptions={{
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
      }}>
      <AuthTabs.Screen
        name="For You"
        component={ForYouTab}
        options={{
          tabBarIcon: ({focused}) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              size={24}
              color={theme === 'light' ? '#222831' : '#EEEEEE'}
            />
          ),
        }}
      />
      <AuthTabs.Screen
        name="Explore"
        component={ExploreTab}
        options={{
          tabBarIcon: ({focused}) => (
            <Ionicons
              name={focused ? 'layers' : 'layers-outline'}
              size={24}
              color={theme === 'light' ? '#222831' : '#EEEEEE'}
            />
          ),
        }}
      />
      <AuthTabs.Screen
        name="Account"
        component={AccountsTab}
        options={{
          tabBarIcon: ({focused}) => (
            <MaterialCommunityIcons
              name={focused ? 'account-circle' : 'account-circle-outline'}
              size={24}
              color={theme === 'light' ? '#222831' : '#EEEEEE'}
            />
          ),
        }}
      />
    </AuthTabs.Navigator>
  );
};

export default AuthTabNavigation;
