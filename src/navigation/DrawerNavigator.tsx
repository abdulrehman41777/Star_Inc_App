import React, { useEffect } from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from '../components/CustomDrawer';
import RootStack from './RootStack';

const Drawer = createDrawerNavigator();

const DrawerNavigator:React.FC = () => {
  return (
    <Drawer.Navigator
      initialRouteName='Home'
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{headerShown: false}}>
        <Drawer.Screen name='Home' component={RootStack} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;