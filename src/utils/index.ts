import { Dimensions } from "react-native";

export const {width,height} = Dimensions.get('window');
export const Colors = {
    orange: '#F16668',
    white: '#fff',
    black: '#000000',
    grey: '#666666',
    blue1: '#566BB6',
    translucent: '#E9E9E963',
    placeholder: '#959595',
    border: '#E9E9E9',
    red: '#F16668',
    
};

export const fonts = {
    poppinsBold: 'Poppins-Bold',
    poppinsExtraBold: 'Poppins-ExtraBold',
    poppinsBlack: 'Poppins-Black',
    poppinsBlackItalic: 'Poppins-BlackItalic',
    poppinsItalic: 'Poppins-Italic',
    poppinsMedium: 'Poppins-Medium',
    poppinsRegular: 'Poppins-Regular',
    poppinsSemiBold: 'Poppins-SemiBold'
}

export const HTTPVERBS = {
    post: 'POST',
    get: 'GET',
    patch: 'PATCH',
    put: 'PUT',
    delete: 'DELETE'
}