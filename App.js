//import liraries
import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import FlashMessage from 'react-native-flash-message';
import {Provider} from 'react-redux';
import store from './src/redux/store';

import {saveUserData} from './src/redux/actions/auth';
import Routes from './src/navigations/routes';
import { getUserData } from './src/utils/utlits';

const App = () => {
  useEffect(() => {
    (async () => {
      const userData = await getUserData();
      console.log('user data App.js', userData);
      if (userData) {
        saveUserData(userData);
      }
    })();
  }, []);

  return (
    <Provider store={store}>
      <Routes />
      <FlashMessage position="top" />
    </Provider>
  );
};

export default App;
