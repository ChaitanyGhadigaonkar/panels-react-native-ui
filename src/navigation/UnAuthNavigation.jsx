import {createStackNavigator} from '@react-navigation/stack';

import Login from '../screens/Login';

const Stack = createStackNavigator();

const UnAuthNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="login">
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default UnAuthNavigation;