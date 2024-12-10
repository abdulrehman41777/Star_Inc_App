import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Home from '../screens/Home';
import Healthful from '../screens/Healthful';
import Hotlines from '../screens/Hotlines';
import Chat from '../screens/Chat';
import TabNavigator from './TabNavigator';
import Notification from '../screens/Notification';
import SelfRefferal from '../screens/SelfRefferal';
import Locaion from '../screens/Locaion';

const Stack = createNativeStackNavigator();
const RootStack:React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="tabs"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="resource" component={Healthful} />
      <Stack.Screen name="hotline" component={Hotlines} />
      <Stack.Screen name="chat" component={Chat} />
      <Stack.Screen name="tabs" component={TabNavigator} />
      <Stack.Screen name="notification" component={Notification} />
      <Stack.Screen name="refferal" component={SelfRefferal} />
      <Stack.Screen name="location" component={Locaion} />
    </Stack.Navigator>
  );
};

export default RootStack;
