import React from 'react';
import {SafeAreaView} from 'react-native';

import UnAuthNavigation from './UnAuthNavigation';
import AuthTabNavigation from './AuthTabNavigation';

const Router = () => {
  const isAuthenticated = true;
  return (
    <SafeAreaView style={{flex: 1}}>
      {isAuthenticated ? <AuthTabNavigation /> : <UnAuthNavigation />}
    </SafeAreaView>
  );
};

export default Router;
