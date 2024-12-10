import {
  View,
  Text,
  FlatList,
  Pressable,
  Linking,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {globalStyles} from '../assets/style/globalStyle';
import Header from '../components/Header';
import {Colors, fonts, height, width} from '../utils';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Locaion: React.FC = () => {
  const data = [
    {
      id: 'alnkja',
      title: 'WIND Drop-in Center',
      info: '815 S St, Sacramento, CA 95811 \nWednesday 11-2pm',
      url: 'https://www.google.com/maps/dir//815+S+St,+Sacramento,+CA+95811,+United+States/@38.5710837,-121.5820519,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x809adcb650c99bdd:0x7092db0971e85a1!2m2!1d-121.4997465!2d38.5711311?entry=ttu',
    },
    {
      id: 'aljsha',
      title: 'Creation District',
      info: '1219 S St, Sacramento, CA 95811 \nThursday 10am-1pm \nFriday 11am-2pm',
      url: 'https://www.google.com/maps/dir/24.9400445,67.0685617/1219+S+St,+Sacramento,+CA+95811,+USA/@2.2769038,66.4703765,3z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x809ad121275136a1:0x2dd5c12c5d492adb!2m2!1d-121.4942185!2d38.5697761?entry=ttu',
    },
    {
      id: 'alasjasa',
      title: 'LGBTQ STEP Shelter',
      info: '2031 P St, Sacramento, CA  95811 \nWednesday 1:30-4:30pm',
      url: 'https://www.google.com/maps/dir/24.9400427,67.0685611/2031+P+St,+Sacramento,+CA+95811,+USA/@2.2769098,66.4767016,3z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x809ad0dd612a4025:0x9c1e562f2d1f6fd2!2m2!1d-121.4815603!2d38.5699663?entry=ttu',
    },
    {
      id: 'aldfsa',
      title: 'S street Hot Spot ',
      info: '401 S St, Sacramento, CA 95811 \nWednesday 1:30-4pm',
      url: 'https://www.google.com/maps/dir//401+S+St,+Sacramento,+CA+95811,+USA/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x809ad1307ae44865:0xe4f067323a9afe35?sa=X&ved=1t:707&ictx=111',
    },
    {
      id: 'sdfkja',
      title: 'Midtown Church',
      info: '2225 19th St, Sacramento, CA 95818 \nMonday 10am – 1pm',
      url: 'https://www.google.com/maps/dir//2225+19th+St,+Sacramento,+CA+95818,+United+States/@38.5629426,-121.5692889,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x40765459cacf5d0d:0x821721797638ea9b!2m2!1d-121.4868311!2d38.5631022?entry=ttu',
    },
    {
      id: 'alsada',
      title: 'Sac State Guardian Scholar Program \n California State University',
      info: 'Sacramento 6000 J Street, Sacramento, CA 95819 \nTuesday 2-5pm',
      url: '+1 916 920 2952',
    },
  ];
  return (
    <View style={globalStyles.container}>
      <Header title="Locations" />
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listView}
        data={data}
        renderItem={({item}) => (
          <Pressable
            onPress={() => Linking.openURL(item.url)}
            style={styles.card}>
            <View>
              <Ionicons name="location" size={25} color={Colors.black} />
            </View>
            <View style={styles.txtView}>
              <Text
                style={[
                  styles.title,
                  {
                    color: Colors.black,
                    textDecorationLine: 'none',
                  },
                ]}>
                {item.title}
              </Text>
              <Text>{item.info}</Text>
            </View>
          </Pressable>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Locaion;

const styles = StyleSheet.create({
  listView: {
    paddingBottom: height * 0.1,
    width: width,
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    marginTop: height * 0.03,
  },
  card: {
    backgroundColor: Colors.white,
    width: width * 0.85,
    height: height * 0.15,
    borderWidth: 1,
    borderColor: Colors.border,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    paddingRight: 10,
    paddingLeft: 20,
    gap: 10,
  },
  txtView: {
    width: width * 0.65,
    height: '100%',
    justifyContent: 'center',
    gap: 5,
  },
  title: {
    fontFamily: fonts.poppinsMedium,
    fontSize: 12,
  },
});
