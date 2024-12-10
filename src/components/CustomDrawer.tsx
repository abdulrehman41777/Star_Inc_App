import {View, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {useNavigation} from '@react-navigation/native';
import { globalStyles } from '../assets/style/globalStyle';
import { height, width } from '../utils';

const CustomDrawer:React.FC<any> = props => {
  const navigation = useNavigation<any>();
  return (
    <SafeAreaView style={globalStyles.container}>
      <View style={styles.closeBtn}>
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.closeBtn}
          onPress={() => navigation.goBack()}>
          <Entypo name="cross" size={25} color="black" />
        </TouchableOpacity>
      </View>
      <DrawerContentScrollView {...props}>
        <View style={styles.wrapper}>
          <DrawerItem
            onPress={() => navigation.navigate('HOme')}
            icon={() => <AntDesign color="black" name="home" size={30} />}
            label={'Home'}
          />
          <DrawerItem
            onPress={() => navigation.navigate('resource')}
            icon={() => <AntDesign color="black" name="hearto" size={30} />}
            label={'Helpful Resources'}
          />
          <DrawerItem
            onPress={() => navigation.navigate('hotline')}
            icon={() => <Ionicons color="black" name="headset-outline" size={30} />}
            label={'Hotlines'}
          />
          <DrawerItem
            onPress={() => navigation.navigate('chat')}
            icon={() => <Fontisto color="black" name="hipchat" size={30} />}
            label={'Chat'}
          />
          <DrawerItem
            onPress={() => navigation.navigate('refferal')}
            icon={() => <AntDesign color="black" name="sharealt" size={30} />}
            label={'Self Refferal'}
          />
        </View>
      </DrawerContentScrollView>
    </SafeAreaView>
  );
};

export default CustomDrawer;
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
  },
  closeBtn: {
    alignSelf: 'flex-end',
    width: width * 0.8,
    height: height * 0.05,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginHorizontal: 10,
    marginTop: 20,
  },
});