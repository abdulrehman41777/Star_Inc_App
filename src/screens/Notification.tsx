import {View, Text, FlatList, StyleSheet} from 'react-native';
import React from 'react';
import {globalStyles} from '../assets/style/globalStyle';
import Header from '../components/Header';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Colors, fonts, height, width} from '../utils';

const Notification: React.FC = () => {
  const Data = [
    {
      notification: 'If you need help check out are helpful resources',
      ago: '12 minutes',
    },
    {
      notification: 'In emergency situation checkout are hotlines',
      ago: '1 day',
    },
    {
      notification: 'How are you feeling today',
      ago: '2 days',
    },
  ];
  return (
    <View style={globalStyles.container}>
      <Header title="Notification" />
      <FlatList
        contentContainerStyle={styles.list}
        data={Data}
        renderItem={({item}) => (
          <View style={styles.notiView}>
            <View>
              <FontAwesome name="bell" size={22} color={Colors.black} />
            </View>
            <View style={styles.textView}>
              <Text style={styles.noti}>{item.notification}</Text>
              <Text style={styles.ago}>{item.ago}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  list: {},
  notiView: {
    width: width * 0.9,
    alignSelf: 'center',
    height: height * 0.1,
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: Colors.placeholder
  },
  textView: {
    width: width * 0.7
  },
  noti:{
    fontFamily: fonts.poppinsMedium,
    color: Colors.black
  },
  ago: {
    textAlign: 'right',
    fontFamily: fonts.poppinsRegular,
    color: Colors.placeholder
  },
});
