import {View, Text, FlatList, Image, StyleSheet, Pressable, Linking} from 'react-native';
import React from 'react';
import { globalStyles } from '../assets/style/globalStyle';
import Header from '../components/Header';
import { abuse, assault, clinic, exploitation, lgbtq, local, mental, needs, sleep } from '../assets/images';
import { Colors, fonts, width } from '../utils';
import { useNavigation } from '@react-navigation/native';

const Healthful: React.FC = () => {
    const navigation = useNavigation<any>();
    const data = [
        {
            image: mental,
            content: 'Substance Abuse Help'
        },
        {
            image: mental,
            content: 'Mental Health'
        },
        {
            image: sleep,
            content: 'Eating Disorders'
        },
        {
            image: clinic,
            content: 'Healthcare Clinics'
        },
        {
            image: assault,
            content: 'Sexual Assault Help'
        },
        {
            image: exploitation,
            content: 'Sexual Exploitation Support'
        },
        {
            image: abuse,
            content: 'Domestic Abuse Domestic Violence Survivors'
        },
        {
            image: lgbtq,
            content: 'LGBTQ Resources'
        },
        {
            image: local,
            content: 'Local Resource Directories'
        },
        {
            image: needs,
            content: 'Get Your Needs Met'
        },
    ]
  return (
    <View style={globalStyles.container}>
        <Header title='Helpful Resources' />
        <FlatList contentContainerStyle={styles.listContainer} numColumns={2} data={data} renderItem={({item})=>(
            <Pressable onPress={()=>Linking.openURL('https://starsyouth.net/resources/')} style={styles.card}>
                <Image source={item.image} />
                <Text style={styles.cardTxt}>{item.content}</Text>
            </Pressable>
        )} />
    </View>
  );
};

export default Healthful;


const styles = StyleSheet.create({
    listContainer: {
        marginTop: 20,
        alignSelf: 'center',
        paddingBottom: width * 0.3
    },
    card: {
        width: width * 0.4,
        marginHorizontal: 8,
        marginVertical: 10
    },
    cardTxt:{
        fontFamily: fonts.poppinsMedium,
        color: Colors.black
    }
})
