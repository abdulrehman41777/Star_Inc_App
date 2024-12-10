import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import RootStack from './src/navigation/RootStack';
import {StatusBar} from 'react-native';
import DrawerNavigator from './src/navigation/DrawerNavigator';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';
import {persistor, store} from './src/store';
import {PersistGate} from 'redux-persist/integration/react';

const App: React.FC = () => {
  useEffect(() => {
    SplashScreen.hide();
    StatusBar.setBarStyle('light-content', true);
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <DrawerNavigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
