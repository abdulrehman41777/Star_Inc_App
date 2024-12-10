import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Pressable,
  Image,
  FlatList,
  TextInput,
  TouchableOpacity,
  Platform,
  PermissionsAndroid,
  Alert,
  Linking,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {globalStyles} from '../assets/style/globalStyle';
import LinearGradient from 'react-native-linear-gradient';
import {Colors, fonts, height, width} from '../utils';
import MyStatusBar from '../components/StatusBar';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {logo} from '../assets/images';
import ChatItem from '../components/ChatItem';
import {useNavigation} from '@react-navigation/native';
import ChatModal from '../components/ChatModal';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../store';
import {Socket, io} from 'socket.io-client';
import {
  addMessage,
  chatRecieveThunk,
  innerChat,
  removeChat,
} from '../store/slices/chatSlice';
import {
  ImagePickerResponse,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';

const Chat: React.FC = () => {
  const navigation = useNavigation<any>();
  const token = useSelector<RootState, string>(value => value.user.token);
  const chat = useSelector<RootState, innerChat>(value => value.chatRoom.chat);
  const dispatch = useDispatch<AppDispatch>();
  const [display, setDisplay] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const inputRef = useRef<TextInput>(null);
  let socket: any = null;

  // const checkPermission = async () => {
  //   try {
  //     const granted = await PermissionsAndroid.requestMultiple([
  //       PermissionsAndroid.PERMISSIONS.CAMERA,
  //       PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
  //     ]);

  //     const permissions = Object.values(granted);
  //     const allGranted = permissions.every(
  //       permission => permission === PermissionsAndroid.RESULTS.GRANTED,
  //     );

  //     if (!allGranted) {
  //       Alert.alert(
  //         'Permissions Required',
  //         'You need to grant camera and storage permissions to use this feature. Go to settings to enable them.',
  //         [
  //           {text: 'Cancel', style: 'cancel'},
  //           {text: 'Open Settings', onPress: () => Linking.openSettings()},
  //         ],
  //       );
  //       return false;
  //     }
  //     return true;
  //   } catch (error) {
  //     console.error('Permission error:', error);
  //     return false;
  //   }
  // };

  useEffect(() => {
    const subscribe = navigation.addListener('focus', () => {
      console.log('token', token);
      if (token) {
        dispatch(chatRecieveThunk(token));
        socket = io('ws://192.168.0.145:4000', {
          auth: {
            guestid: token,
          },
        });
        socket.on('connect', () => {
          console.log(socket.id);
        });
        socket.on('chatMessage', (message: any) => {
          console.log('message', message);
          dispatch(addMessage(message));
        });
      } else {
        setVisible(true);
      }
    });
    const unsubscribe = navigation.addListener('blur', () => {
      token && socket?.disconnect();
      dispatch(removeChat());
    });
    return () => {
      unsubscribe();
      subscribe();
    };
  }, []);

  const sendMessage = () => {
    socket = io('ws://192.168.0.145:4000', {
      auth: {
        guestid: token,
      },
    });
    if (inputRef.current && message) {
      socket.emit('chatMessage', {content: message, isImage: false});
      setMessage('');
      inputRef.current.clear();
      console.log('hit');
      setTimeout(() => {
        dispatch(chatRecieveThunk(token));
      }, 500);
    }
  };

  // const openCamera = async () => {
  //   socket = io('ws://192.168.0.145:4000', {
  //     auth: {
  //       guestid: token,
  //     },
  //   });
  //   if (await checkPermission()) {
  //     try {
  //       const result = await launchCamera({
  //         mediaType: 'photo',
  //         includeBase64: true,
  //       });
  //       if (result.assets) {
  //         console.log(result.assets[0].base64);
  //           socket.emit('chatMessage', {content: result.assets[0].base64, isImage: true, toGuestId: token});
  //         };
  //       }
  //      catch (error) {
  //       console.log(error);
  //     }
  //   }
  // };

  return (
    <View style={globalStyles.container}>
      <MyStatusBar />
      <SafeAreaView>
        <LinearGradient
          style={styles.header}
          colors={[Colors.blue1, '#1BB2F6']}>
          <Pressable onPress={navigation.goBack}>
            <Entypo name="chevron-left" size={30} color={Colors.white} />
          </Pressable>
          <View style={styles.chatInfo}>
            <View style={styles.logoView}>
              <Image source={logo} style={styles.logo} />
            </View>
            <View>
              <Text style={styles.headerTxt}>John Doe(him)</Text>
              <Text style={styles.subTxt}>Online 26,minutes ago</Text>
            </View>
          </View>
          <Pressable>
            <Entypo name="dots-three-vertical" color={Colors.white} size={25} />
          </Pressable>
        </LinearGradient>
      </SafeAreaView>
      <View>
        <FlatList
          inverted
          showsVerticalScrollIndicator={false}
          style={styles.listView}
          data={chat}
          renderItem={({item}) => (
            <ChatItem guestId={item.user.guestId} content={item.content} />
          )}
          keyExtractor={item => item.id}
        />
      </View>
      <View style={styles.typingView}>
        <View style={[styles.attachment, {display: display ? 'flex' : 'none'}]}>
          <Pressable style={styles.attachmentBtn}>
            <View style={[styles.picView, globalStyles.bgPink]}>
              <Entypo name="images" size={20} color={Colors.white} />
            </View>
            <Text style={[styles.message, {textAlign: 'center'}]}>Gallery</Text>
          </Pressable>
          <Pressable style={styles.attachmentBtn}>
            <View style={[styles.picView, globalStyles.bgDarkGreen]}>
              <Entypo name="location-pin" size={20} color={Colors.white} />
            </View>
            <Text style={[styles.message, {textAlign: 'center'}]}>
              Location
            </Text>
          </Pressable>
          <Pressable style={styles.attachmentBtn}>
            <View style={[styles.picView, globalStyles.bgPurple]}>
              <Ionicons name="document-attach" size={20} color={Colors.white} />
            </View>
            <Text style={[styles.message, {textAlign: 'center'}]}>
              Document
            </Text>
          </Pressable>
        </View>
        <TextInput
          ref={inputRef}
          placeholder="Message"
          placeholderTextColor={Colors.placeholder}
          style={styles.message}
          onChangeText={message => setMessage(message)}
        />
        {/* <TouchableOpacity activeOpacity={0.7}>
          <Entypo name="camera" color={Colors.grey} size={20} />
        </TouchableOpacity> */}
        {/* <TouchableOpacity
          onPress={(): void => setDisplay(!display)}
          activeOpacity={0.7}>
          <Entypo name="attachment" color={Colors.grey} size={20} />
        </TouchableOpacity> */}
        <TouchableOpacity
          onPress={sendMessage}
          style={styles.sendBtn}
          activeOpacity={0.7}>
          <Feather name="send" color={Colors.white} size={20} />
        </TouchableOpacity>
      </View>
      <ChatModal visible={visible} setVisible={setVisible} />
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  header: {
    height: height * 0.13,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  chatInfo: {
    width: width * 0.7,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  logoView: {
    backgroundColor: Colors.white,
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  headerTxt: {
    fontFamily: fonts.poppinsMedium,
    color: Colors.white,
    fontSize: 13,
  },
  subTxt: {
    fontFamily: fonts.poppinsMedium,
    color: Colors.white,
    fontSize: 10,
  },
  listView: {
    backgroundColor: Colors.white,
    top: -15,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    ...Platform.select({
      ios: {
        height: height * 0.7,
      },
      android: {
        height: height * 0.73,
      },
    }),
  },
  typingView: {
    width: width * 0.9,
    height: height * 0.07,
    marginTop: 5,
    alignSelf: 'center',
    backgroundColor: Colors.white,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    ...Platform.select({
      ios: {
        shadowColor: Colors.grey,
        shadowOpacity: 0.7,
        shadowOffset: {width: 10, height: 10, y: -10},
      },
      android: {
        zIndex: 1,
        elevation: 10,
      },
    }),
  },
  message: {
    width: '85%',
    fontFamily: fonts.poppinsRegular,
    fontSize: 12,
    color: Colors.black,
  },
  sendBtn: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.orange,
    borderRadius: 20,
  },
  attachment: {
    position: 'absolute',
    bottom: height * 0.09,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: width * 0.9,
    alignSelf: 'center',
    backgroundColor: Colors.white,
    height: height * 0.1,
  },
  attachmentBtn: {
    width: width * 0.23,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  picView: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
});
