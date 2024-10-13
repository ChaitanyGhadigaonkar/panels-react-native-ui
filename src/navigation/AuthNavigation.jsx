import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/Auth/Home';

const AuthStack = createStackNavigator();
const AuthNavigation = () => {
  return (
    <AuthStack.Navigator initialRouteName="Home">
      <AuthStack.Screen name="Home" component={Home} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigation;
