import {
  ImageStyle,
  Platform,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from 'react-native';
import {Colors, fonts, height, width} from '../../utils';

type homeStyleProps = {
  searchView: ViewStyle;
  inputView: ViewStyle;
  input: TextStyle;
  searchBtn: ViewStyle;
  banner: ViewStyle;
  bannerImg: ImageStyle;
  bannerTxt: TextStyle;
  bannerBtn: ViewStyle;
  btnText: TextStyle;
  videoView: ViewStyle;
  afterView: ViewStyle;
  heading: TextStyle;
  subHeading: TextStyle;
  cardView: ViewStyle;
  card: ViewStyle;
  cardImageWrapper: ViewStyle;
  cardImage: ImageStyle;
  content: TextStyle;
  text: TextStyle;
  view: ViewStyle;
  featureView: ViewStyle;
  featureImageView: ViewStyle;
  featureImage: ImageStyle;
  featureText: TextStyle;
  featureCard:ViewStyle;
};

export const homeStyle = StyleSheet.create<homeStyleProps>({
  searchView: {
    width: width * 0.9,
    alignSelf: 'center',
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 1,
  },
  inputView: {
    backgroundColor: Colors.translucent,
    width: width * 0.7,
    height: height * 0.06,
    borderRadius: 20,
    position: 'relative',
  },
  input: {
    fontFamily: fonts.poppinsRegular,
    color: Colors.black,
    paddingHorizontal: 15,
    textAlignVertical: 'center',
    height: '100%',
  },
  searchBtn: {
    position: 'absolute',
    right: 10,
    top: 12,
  },
  banner: {
    width: width * 0.9,
    height: height * 0.2,
    alignSelf: 'center',
    display: 'flex',
    justifyContent: 'center',
    paddingHorizontal: 20,
    gap: 10,
  },
  bannerImg: {
    // objectFit: 'contain',
    resizeMode: 'contain',
    zIndex: 1,
  },
  bannerTxt: {
    color: Colors.white,
    fontFamily: fonts.poppinsItalic,
    fontSize: 14,
    zIndex:1
  },
  bannerBtn: {
    backgroundColor: Colors.white,
    height: height * 0.03,
    width: width * 0.2,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1
  },
  btnText: {
    color: Colors.orange,
    fontFamily: fonts.poppinsRegular,
    fontSize: 10,
  },
  videoView: {
    position: 'relative',
    flex: 1,
    backgroundColor: 'black',
  },
  afterView: {
    marginTop: Platform.OS === 'android' ? height * 0.25 : 10,
    width: width * 0.9,
    alignSelf: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  view: {
    marginTop: 10,
    width: width * 0.9,
    alignSelf: 'center',
  },
  heading: {
    fontFamily: fonts.poppinsBold,
    color: Colors.black,
    fontSize: 16,
  },
  subHeading: {
    fontFamily: fonts.poppinsMedium,
    color: Colors.black,
    fontSize: 16,
  },
  cardView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    gap: 10,
    alignSelf: 'center',
    width: width * 0.9
  },
  card: {
    height: height * 0.2,
    width: width * 0.43,
    backgroundColor: Colors.white,
    zIndex: 1,
    elevation: 10,
    borderRadius: 20,
    shadowColor: Colors.placeholder,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1,

  },
  cardImageWrapper: {
    backgroundColor: '#F2F2F2',
    width: 60,
    height: 60,
    borderRadius: 70/2,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10
  },
  cardImage: {
    width: 50,
    height: 50,
  },
  content: {
    fontFamily: fonts.poppinsBold,
    color: Colors.black,
    fontSize: 13,
    marginLeft: 5,
  },
  text: {
    fontFamily: fonts.poppinsRegular,
    color: Colors.grey,
    fontSize: 10,
    marginLeft: 10,
  },
  featureView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width * 0.9,
    alignSelf: 'center',
    marginBottom: height * 0.3,
    marginTop: 20,
  },
  featureImageView: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  },
  featureImage: {
    width: 40,
    height: 40,
    resizeMode: 'contain'
  },
  featureText: {
    fontSize: 12,
    textAlign: 'center',
    fontFamily: fonts.poppinsMedium,
    color: Colors.black
  },
  featureCard: {
    width: width * 0.2,
    gap: 10,
    alignItems: 'center'
  }
});
