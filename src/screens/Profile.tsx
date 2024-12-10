import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  TextInput,
  ScrollView,
  Platform,
} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import {dp} from '../assets/images';
import {Colors, fonts, height, width} from '../utils';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {globalStyles} from '../assets/style/globalStyle';

const Profile: React.FC = () => {
  return (
    <ScrollView
      style={globalStyles.container}
      automaticallyAdjustKeyboardInsets={true}
      keyboardShouldPersistTaps="handled">
      <Header title="Profile" />
      <View style={styles.dpView}>
        <Image source={dp} style={styles.dp} />
        <TouchableOpacity activeOpacity={0.7} style={styles.btn}>
          <AntDesign name="camera" size={25} color={Colors.white} />
        </TouchableOpacity>
      </View>
      <View style={styles.formView}>
        <View style={styles.inputView}>
          <Text style={styles.label}>Name*</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Name*"
            placeholderTextColor={Colors.placeholder}
          />
        </View>
        <View style={styles.inputView}>
          <Text style={styles.label}>Email*</Text>
          <TextInput
            keyboardType="email-address"
            style={styles.input}
            placeholder="Enter Email*"
            placeholderTextColor={Colors.placeholder}
          />
        </View>
        <View style={styles.inputView}>
          <Text style={styles.label}>Phone*</Text>
          <TextInput
            keyboardType="phone-pad"
            style={styles.input}
            placeholder="Enter Phome*"
            placeholderTextColor={Colors.placeholder}
          />
        </View>
        <TouchableOpacity style={styles.saveBtn} activeOpacity={0.3}>
          <Text style={styles.saveTxt}>Save</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  dpView: {
    width: width * 0.4,
    height: height * 0.18,
    marginTop: width * 0.04,
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: (width * 0.4) / 2,
    borderColor: Colors.orange,
  },
  dp: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  btn: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: Colors.orange,
    width: width * 0.1,
    height: width * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: (width * 0.1) / 2,
  },
  formView: {
    width: width,
    alignItems: 'center',
    marginTop: width * 0.15,
    paddingBottom: 30,
    backgroundColor: Colors.white
  },
  label: {
    fontFamily: fonts.poppinsMedium,
    color: Colors.black,
  },
  inputView: {
    gap: 5,
    marginTop: width * 0.05,
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.border,
    width: width * 0.9,
    borderRadius: 30,
    height: height * 0.05,
    paddingHorizontal: 20,
    fontFamily: fonts.poppinsRegular,
    color: Colors.black,
  },
  saveBtn: {
    backgroundColor: Colors.orange,
    width: width * 0.9,
    height: height * 0.05,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: width * 0.1,
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
  saveTxt: {
    fontFamily: fonts.poppinsMedium,
    color: Colors.white,
    fontSize: 17,
  },
});
