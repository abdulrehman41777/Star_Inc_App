import {
  View,
  Text,
  ImageBackground,
  Image,
  StyleSheet,
  SafeAreaView,
  Platform,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import {logo, selfBg} from '../assets/images';
import {globalStyles} from '../assets/style/globalStyle';
import {Colors, fonts, height, HTTPVERBS, width} from '../utils';
import RNPickerSelect from 'react-native-picker-select';
import {useForm, Controller} from 'react-hook-form';
import {service} from '../utils/service';

type data = {
  name: string;
  phone: string | number;
  address: string;
  email: string;
  reasonForReferral: string;
  preferredContactMethod: string;
};

const SelfRefferal: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      name: '',
      phone: '',
      address: '',
      email: '',
      reasonForReferral: '',
      preferredContactMethod: '',
    },
  });
  const onSubmit = async (data: data) => {
    setLoading(true);
    try {
      const response = await service(
        HTTPVERBS.post,
        null,
        data,
        '/referral/create',
      );
      console.log(response.data);
      Alert.alert('Success', 'Referral Send Successfully', [
        {
          text: 'Ok',
          onPress: () => console.log('ok'),
        },
      ]);
      setLoading(false);
    } catch (error: any) {
      console.log(error.response);
      Alert.alert('Error', 'Error Sending Referral, Try Again.', [
        {
          text: 'Ok',
          onPress: () => console.log('ok'),
        },
      ]);
      setLoading(false);
    }
  };

  return (
    <ImageBackground source={selfBg} style={styles.imageBg}>
      <ScrollView
        bounces={false}
        keyboardShouldPersistTaps="never"
        automaticallyAdjustKeyboardInsets>
        <SafeAreaView style={styles.firstSection}>
          <Text style={styles.heading}>Self Referral Form</Text>
          <Text style={styles.guide}>
            Please fill out the form below to refer {'\n'} yourself to our
            services
          </Text>
          <View style={styles.logoView}>
            <Image source={logo} style={styles.logo} />
          </View>
        </SafeAreaView>
        <View style={styles.formView}>
          <View style={styles.inputView}>
            <Text style={styles.label}>Name*</Text>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  style={styles.input}
                  placeholder="Enter Name*"
                  placeholderTextColor={Colors.placeholder}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="name"
            />
            {errors.name && <Text style={styles.error}>Name is required.</Text>}
          </View>
          <View style={styles.inputView}>
            <Text style={styles.label}>Phone*</Text>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  style={styles.input}
                  placeholder="Enter Phone*"
                  placeholderTextColor={Colors.placeholder}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  keyboardType="phone-pad"
                />
              )}
              name="phone"
            />
            {errors.phone && (
              <Text style={styles.error}>Phone is required.</Text>
            )}
          </View>
          <View style={styles.inputView}>
            <Text style={styles.label}>Address*</Text>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  style={styles.input}
                  placeholder="Enter Address*"
                  placeholderTextColor={Colors.placeholder}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="address"
            />
            {errors.address && (
              <Text style={styles.error}>Address is required.</Text>
            )}
          </View>
          <View style={styles.inputView}>
            <Text style={styles.label}>Email*</Text>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  style={styles.input}
                  placeholder="Enter Email*"
                  placeholderTextColor={Colors.placeholder}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  keyboardType="email-address"
                />
              )}
              name="email"
            />
            {errors.email && (
              <Text style={styles.error}>Email is required.</Text>
            )}
          </View>
          <View style={styles.inputView}>
            <Text style={styles.label}>Reason For Refferal*</Text>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  multiline={true}
                  style={styles.textArea}
                  numberOfLines={3}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="reasonForReferral"
            />
            {errors.reasonForReferral && (
              <Text style={styles.error}>Email is required.</Text>
            )}
          </View>
          <View style={styles.inputView}>
            <Text style={styles.label}>Preferred Contact Method*</Text>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <RNPickerSelect
                  onValueChange={onChange}
                  items={[
                    {label: 'Email', value: 'Email'},
                    {label: 'Phone', value: 'Phone'},
                  ]}
                />
              )}
              name="preferredContactMethod"
            />
            {errors.preferredContactMethod && (
              <Text style={styles.error}>Reason is required.</Text>
            )}
            <TouchableOpacity
              onPress={handleSubmit(onSubmit)}
              style={styles.btn}>
              {loading ? (
                <ActivityIndicator size="small" color="#fff" />
              ) : (
                <Text style={styles.btnTxt}>Submit</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default SelfRefferal;

const styles = StyleSheet.create({
  firstSection: {
    position: 'relative',
    width: width * 0.8,
    height: Platform.OS === 'ios' ? height * 0.3 : height * 0.25,
    marginTop: 30,
    marginLeft: 20,
  },
  imageBg: {
    height: height,
    paddingBottom: 40,
  },
  heading: {
    fontFamily: fonts.poppinsMedium,
    color: Colors.white,
    fontSize: 22,
  },
  guide: {
    color: Colors.white,
    fontFamily: fonts.poppinsRegular,
    fontSize: 14,
  },
  error: {
    color: Colors.red,
    fontFamily: fonts.poppinsRegular,
    fontSize: 10,
  },
  logoView: {
    position: 'absolute',
    bottom: 0,
    right: Platform.OS === 'ios' ? width * 0.3 : width * 0.2,
    width: width * 0.32,
    height: height * 0.15,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.border,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
  },
  logo: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  formView: {
    width: width * 0.6,
    alignSelf: 'flex-end',
    marginTop: width * 0.02,
  },
  label: {
    fontFamily: fonts.poppinsMedium,
    color: Colors.black,
  },
  inputView: {
    gap: 5,
    marginTop: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.border,
    width: width * 0.55,
    borderRadius: 30,
    height: height * 0.05,
    paddingHorizontal: 20,
    fontFamily: fonts.poppinsRegular,
    color: Colors.black,
  },
  textArea: {
    borderWidth: 1,
    borderColor: Colors.border,
    width: width * 0.55,
    borderRadius: 10,
    textAlignVertical: 'top',
    paddingHorizontal: 20,
    alignSelf: 'flex-start',
    height: height * 0.1,
    fontFamily: fonts.poppinsRegular,
    color: Colors.black,
  },
  picker: {
    borderWidth: 1,
    borderColor: Colors.border,
  },
  btn: {
    backgroundColor: Colors.orange,
    width: width * 0.25,
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginRight: 20,
    marginTop: 10,
    height: 30,
    justifyContent: 'center',
    borderRadius: 30,
  },
  btnTxt: {
    fontFamily: fonts.poppinsMedium,
    fontSize: 12,
    color: Colors.white,
  },
});
