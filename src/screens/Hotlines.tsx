import {View, Text, StyleSheet, FlatList, Platform, Pressable, Linking} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import {globalStyles} from '../assets/style/globalStyle';
import Feather from 'react-native-vector-icons/Feather';
import {Colors, fonts, height, width} from '../utils';

const Hotlines: React.FC = () => {
  const data = [
    {
      id: 'alnkja',
      title: 'Suicide Prevention Crisis Line (Local)',
      phone: '(916) 368-3111',
      focus: true,
      call: '+1 916 368 3111',
    },
    {
      id: 'aljsha',
      title: 'National Eating Disorders Association',
      phone: '(800) 931-2237',
      focus: false,
      call: '+1 800 931 2237',
    },
    {
      id: 'alasjasa',
      title: 'National Eating Disorders Association',
      phone: '988',
      focus: false,
      call: '988',
    },
    {
      id: 'aldfsa',
      title: 'Child Protective Services',
      phone: '(800) 339-7177',
      focus: false,
      call: '+1 800 339 7177',
    },
    {
      id: 'sdfkja',
      title: 'The Trevor Project Crisis Line for LGBTQ Youth',
      phone: '(866) 488-7386',
      focus: false,
      call: '+1 866 488 7386',
    },
    {
      id: 'alsada',
      title: 'Women Escaping a Violent Environment (WEAVE) 24 hr Crisis Line',
      phone: '(916) 920-2952',
      focus: false,
      call: '+1 916 920 2952',
    },
    {
      id: 'zxdsa',
      title:
        '211 Sacramento \n Referrals to more than 2,400 Sacramento area services',
      phone: '2-1-1 | (800) 500-4931',
      focus: false,
      call: '+1 800 500 4931',
    },
    {
      id: 'adsfdsa',
      title: 'Call Voices Programs and Services \n Consumer Operated Warmline',
      phone: '2-1-1 | (800) 500-4931',
      focus: false,
      call: '+1 800 500 4931',
    },
  ];
  return (
    <View style={globalStyles.container}>
      <Header title="Hotlines" />
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listView}
        data={data}
        renderItem={({item}) => (
          <Pressable onPress={()=>Linking.openURL(`tel:${item.call}`)} style={styles.card}>
            <View>
              <Feather
                name="phone"
                size={25}
                color={item.focus ? Colors.red : Colors.black}
              />
            </View>
            <View style={styles.txtView}>
              <Text
                style={[
                  styles.title,
                  {
                    color: item.focus ? Colors.red : Colors.black,
                    textDecorationLine: item.focus ? 'underline' : 'none',
                  },
                ]}>
                {item.title}
              </Text>
              <Text>{item.phone}</Text>
            </View>
          </Pressable>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Hotlines;

const styles = StyleSheet.create({
  listView: {
    paddingBottom: height * 0.2,
    width: width,
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    marginTop: height * 0.03,
  },
  card: {
    backgroundColor: Colors.white,
    width: width * 0.85,
    height: height * 0.11,
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
