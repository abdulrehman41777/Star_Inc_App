import {View, Text, Image, StyleSheet, Platform} from 'react-native';
import React from 'react';
import {logo} from '../assets/images';
import {Colors, fonts, height, width} from '../utils';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

type props = {
  content: string;
  guestId: string;
};

const ChatItem: React.FC<props> = ({ content, guestId}) => {
  const token = useSelector<RootState,string>(value=>value.user.token)
  if (guestId !== token) {
    return (
      <View style={styles.chat}>
        <View style={styles.logoView}>
          <Image source={logo} style={styles.logo} />
        </View>
        <View style={styles.msgView}>
          <Text style={styles.user}>Star Behavioral Health Group</Text>
          <Text style={styles.user}>{content}</Text>
        </View>
      </View>
    );
  } else {
    return (
      <View style={styles.chatSend}>
        <View style={styles.msgView}>
          <Text style={styles.user}>Me</Text>
          <Text style={styles.user}>{content}</Text>
        </View>
      </View>
    );
  }
};

export default ChatItem;

const styles = StyleSheet.create({
  chat: {
    marginTop: width * 0.03,
    width: width * 0.6,
    marginHorizontal: 10,
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },
  chatSend: {
    justifyContent: 'flex-end',
    marginTop: width * 0.03,
    width: width * 0.9,
    marginHorizontal: 10,
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },
  logoView: {
    backgroundColor: Colors.white,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    ...Platform.select({
      ios: {
        shadowColor: '#F4F5FA',
        shadowOpacity: 0.7,
        shadowOffset: {width: 10, height: 4},
      },
      android: {
        zIndex: 1,
        elevation: 20,
      },
    }),
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginHorizontal: 20,
  },
  msgView: {
    backgroundColor: '#F4F5FA',
    padding: 20,
    borderRadius: 20,
    gap: 5,
    minWidth: width * 0.4,
  },
  user: {
    color: Colors.grey,
    fontFamily: fonts.poppinsMedium,
    fontSize: 12,
  },
});
