import {
  View,
  Text,
  Pressable,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  Platform,
  Image,
  FlatList,
  Linking,
  Alert,
} from 'react-native';
import React, {useRef} from 'react';
import {homeStyle} from '../assets/style/homeStyle';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {Colors, height} from '../utils';
import {
  drugs,
  headset,
  healthCare,
  heart,
  homeBanner,
  location,
  mentalHealth,
  phone,
  pills,
  video,
} from '../assets/images';
import Video, {VideoRef} from 'react-native-video';
import {globalStyles} from '../assets/style/globalStyle';
import MyStatusBar from '../components/StatusBar';
import {useNavigation} from '@react-navigation/native';

const Home: React.FC = () => {
  const videoRef = useRef<VideoRef>(null);
  const navigation = useNavigation<any>();
  const data = [
    {
      image: pills,
      content: 'Substance Abuse Help',               
      text: 'Alcohol and drug system \n/ alcoholics anonymous',
    },
    {
      image: mentalHealth,
      content: 'Mental Health',
      text: 'Our emotional, psychological,\n and social well-being',
    },
    {
      image: drugs,
      content: 'Eating Disorders',
      text: 'Help Lines / Local Support\n Groups',
    },
    {
      image: healthCare,
      content: 'Healthcare Clinics',
      text: 'Clinics accepting Medical and\n uninsured / Women’s Clinics',
    },
  ];
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{backgroundColor: Colors.white}}
      data={['']}
      renderItem={() => (
        <View style={globalStyles.container}>
          <MyStatusBar />
          <View style={homeStyle.searchView}>
            <Pressable onPress={() => navigation.openDrawer()}>
              <FontAwesome6
                name="bars-staggered"
                color={Colors.black}
                size={20}
              />
            </Pressable>
            <View style={homeStyle.inputView}>
              <TextInput
                style={homeStyle.input}
                placeholder="Search"
                placeholderTextColor={Colors.placeholder}
              />
              <TouchableOpacity style={homeStyle.searchBtn}>
                <Feather name="search" color={Colors.placeholder} size={20} />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('notification')}
              activeOpacity={0.7}>
              <Fontisto name="bell" color={Colors.black} size={20} />
            </TouchableOpacity>
          </View>
          <ImageBackground
            style={homeStyle.banner}
            imageStyle={homeStyle.bannerImg}
            source={homeBanner}>
            <Text style={homeStyle.bannerTxt}>
              "I need help{'\n'}Chat anonymously"
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('chat')}
              style={homeStyle.bannerBtn}>
              <Text style={homeStyle.btnText}>Chat Now</Text>
            </TouchableOpacity>
          </ImageBackground>
          {Platform.OS === 'android' ? (
            <Video
              // Can be a URL or a local file.
              source={video}
              // Store reference
              ref={videoRef}
              // Callback when remote video is buffering
              onBuffer={() => console.log('buffer')}
              // Callback when video cannot be loaded
              onError={() => console.log('video Error')}
              style={{
                position: 'absolute',
                width: '90%',
                top: height * -0.62,
                bottom: 0,
                left: 20,
                right: 0,
              }}
            />
          ) : (
            <View
              style={{
                height: 200,
              }}>
              <Video
                // Can be a URL or a local file.
                source={video}
                // Store reference
                ref={videoRef}
                // Callback when remote video is buffering
                onBuffer={() => console.log('buffer')}
                // Callback when video cannot be loaded
                onError={() => console.log('video Error')}
                style={{
                  position: 'absolute',
                  width: '90%',
                  top: 0,
                  bottom: 0,
                  left: 20,
                  right: 0,
                }}
              />
            </View>
          )}

          <View style={homeStyle.afterView}>
            <Text style={homeStyle.heading}>Helpful Resources</Text>
            <Pressable onPress={() => navigation.navigate('resource')}>
              <Text style={homeStyle.subHeading}>View All</Text>
            </Pressable>
          </View>
          <View style={homeStyle.cardView}>
            {data.map((item, index) => (
              <Pressable onPress={()=>Linking.openURL('https://starsyouth.net/resources/')} key={index} style={homeStyle.card}>
                <View style={homeStyle.cardImageWrapper}>
                  <Image style={homeStyle.cardImage} source={item.image} />
                </View>
                <Text style={homeStyle.content}>{item.content}</Text>
                <Text style={homeStyle.text}>{item.text}</Text>
              </Pressable>
            ))}
          </View>
          <View style={homeStyle.view}>
            <Text style={homeStyle.heading}>Features</Text>
          </View>
          <View style={homeStyle.featureView}>
            <TouchableOpacity
              onPress={() => navigation.navigate('resource')}
              style={homeStyle.featureCard}>
              <View style={[homeStyle.featureImageView, globalStyles.bgRed]}>
                <Image source={heart} style={homeStyle.featureImage} />
              </View>
              <Text style={homeStyle.featureText}>Helpful Resources</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('hotline')}
              style={homeStyle.featureCard}>
              <View style={[homeStyle.featureImageView, globalStyles.bgGreen]}>
                <Image source={headset} style={homeStyle.featureImage} />
              </View>
              <Text style={homeStyle.featureText}>Hotlines</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => Linking.openURL('tel:119')}
              style={homeStyle.featureCard}>
              <View style={[homeStyle.featureImageView, globalStyles.bgYellow]}>
                <Image source={phone} style={homeStyle.featureImage} />
              </View>
              <Text style={homeStyle.featureText}>Call Now</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('location')}
              style={homeStyle.featureCard}>
              <View style={[homeStyle.featureImageView, globalStyles.bgBlue]}>
                <Image source={location} style={homeStyle.featureImage} />
              </View>
              <Text style={homeStyle.featureText}>Location</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    />
  );
};

export default Home;
