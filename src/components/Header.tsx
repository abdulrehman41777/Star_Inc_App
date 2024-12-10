import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { Colors, fonts, height, width } from '../utils';
import MyStatusBar from './StatusBar';
import Entypo from "react-native-vector-icons/Entypo"
import { useNavigation } from '@react-navigation/native';

type props = {
    title: string
}

const Header:React.FC<props> = ({title}) => {
  const navigation = useNavigation<any>()
  return (
    <View>
    <MyStatusBar />
     <LinearGradient colors={[Colors.blue1, '#1BB2F6']} style={styles.linearGradient}>
        <Pressable onPress={navigation.goBack}>
            <Entypo color={Colors.white} size={30} name="chevron-left" />
        </Pressable>
      <Text style={styles.heading}>{title}</Text>
      </LinearGradient>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    linearGradient: {
        height: height * 0.1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
      },
      heading: {
        fontFamily: fonts.poppinsMedium,
        color: Colors.white,
        width: width * 0.8,
        textAlign: 'center',
        fontSize: 20
      }
})