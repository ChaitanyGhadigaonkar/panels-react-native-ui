import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import UnAuthNavigation from './navigation/UnAuthNavigation';
import Router from './navigation/router';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';

function App() {
  const currentTHeme = useColorScheme();
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#00ADB5',
      background: currentTHeme === 'dark' ? '#222831' : '#EEEEEE',
      text: currentTHeme !== 'dark' ? 'black' : 'white',
    },
  };
  const isAuthenticated = false;
  return (
    <NavigationContainer theme={theme}>
      <Router />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
