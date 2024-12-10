import {View, Text} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Colors, fonts, width} from '../utils';
import Home from '../screens/Home';
import Chat from '../screens/Chat';
import Profile from '../screens/Profile';
import React from 'react';
import SelfRefferal from '../screens/SelfRefferal';

const Tab = createBottomTabNavigator();

const TabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName="HOme"
      backBehavior="initialRoute"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: width * 0.2,
          width: width,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: Colors.white,
          position: 'absolute',
          bottom: 0,
        },
        tabBarLabelStyle: {
          display: 'none',
        },
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                backgroundColor: focused ? Colors.orange : 'white',
                width: width * 0.3,
                height: 50,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: focused ? 30 : 0,
                zIndex: 1,
                gap: 10,
                elevation: focused ? 15 : 0,
                marginTop: 10,
              }}>
              <AntDesign
                color={focused ? 'white' : '#000'}
                name="home"
                size={20}
              />
              <Text
                style={{
                  fontFamily: fonts.poppinsMedium,
                  color: Colors.white,
                  display: focused ? 'flex' : 'none',
                }}>
                Home
              </Text>
            </View>
          ),
        }}
        name="HOme"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarStyle: {
            display: 'none',
          },
          tabBarIcon: ({focused}) => (
            <View
              style={{
                backgroundColor: focused ? Colors.orange : 'white',
                width: width * 0.3,
                height: 60,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: focused ? 30 : 0,
                borderWidth: focused ? 5 : 0,
                borderColor: '#fff',
                zIndex: 1,
                gap: 10,
                elevation: focused ? 15 : 0,
                marginTop: 10,
              }}>
              <Ionicons
                color={focused ? 'white' : '#000'}
                name="chatbubbles-outline"
                size={25}
              />
              <Text
                style={{
                  fontFamily: fonts.poppinsMedium,
                  color: Colors.white,
                  display: focused ? 'flex' : 'none',
                }}>
                Chat
              </Text>
            </View>
          ),
        }}
        name="CHat"
        component={Chat}
      />
      <Tab.Screen
        options={{
          tabBarStyle: {
            display: 'none',
          },
          tabBarIcon: ({focused}) => (
            <View
              style={{
                backgroundColor: focused ? Colors.orange : 'white',
                width: width * 0.3,
                height: 60,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: focused ? 30 : 0,
                borderWidth: focused ? 5 : 0,
                borderColor: '#fff',
                zIndex: 1,
                gap: 10,
                elevation: focused ? 15 : 0,
                marginTop: 10,
              }}>
              <AntDesign
                color={focused ? 'white' : '#000'}
                name="user"
                size={25}
              />
              <Text
                style={{
                  fontFamily: fonts.poppinsMedium,
                  color: Colors.white,
                  display: focused ? 'flex' : 'none',
                }}>
                Referral
              </Text>
            </View>
          ),
        }}
        name="PRofile"
        component={SelfRefferal}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
