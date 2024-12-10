import {
  View,
  Text,
  Modal,
  Alert,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {Dispatch, memo, useEffect} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import {Colors, fonts, height, width} from '../utils';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../store';
import {registerGuestUser} from '../store/slices/userSlice';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';

type modalProps = {
  visible: boolean;
  setVisible: (value: boolean) => void;
};

const ChatModal: React.FC<modalProps> = ({visible, setVisible}) => {
  const dispatch = useDispatch<AppDispatch>();
  const loading = useSelector<RootState>(value => value.user.loading);
  const registerd = useSelector<RootState>(value => value.user.token);
  const navigation = useNavigation<NavigationProp<ParamListBase>>()
  useEffect(()=>{
    if (registerd) {
      setVisible(false)
    }
  },[registerd])
  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <View style={modalStyle.overlay}>
        <View style={modalStyle.body}>
          <TouchableOpacity
            onPress={():void => {
              setVisible(false)
              navigation.navigate('home')
            }}
            style={modalStyle.closeBtn}>
            <Entypo name="cross" size={30} color="#000" />
          </TouchableOpacity>
          <Feather name="info" color="#000" size={100} />
          <Text style={modalStyle.text1}>With any online service, there is some level of risk when communicating over the internet. By using this chat, you give permission to Capital Star to provide you with some assistance today. Capital Star cannot and does not guarantee the privacy of your data and communication while using this service.</Text>
          <Pressable
            onPress={() => dispatch(registerGuestUser())}
            style={modalStyle.btn}>
            {loading ? (
              <ActivityIndicator color={Colors.white} size="small" />
            ) : (
              <Text style={modalStyle.text}>Continue</Text>
            )}
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default memo(ChatModal);

const modalStyle = StyleSheet.create({
  overlay: {
    backgroundColor: 'rgba(60, 60, 60, 0.2)',
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    backgroundColor: Colors.white,
    width: width * 0.8,
    height: height * 0.47,
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 20,
    position: 'relative',
  },
  btn: {
    width: width * 0.4,
    height: height * 0.06,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.blue1,
    borderRadius: 10,
  },
  text: {
    fontFamily: fonts.poppinsMedium,
    color: Colors.white,
  },
  text1: {
    fontFamily: fonts.poppinsMedium,
    color: Colors.black,
    width: '90%',
    textAlign: 'justify',
    fontSize: 14
  },
  closeBtn: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
});
