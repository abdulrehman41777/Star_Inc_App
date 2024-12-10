import { StyleSheet, ViewStyle } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

interface GlobalStyle {
  container: ViewStyle;   
  bgRed: ViewStyle;
  bgYellow: ViewStyle;
  bgGreen: ViewStyle;
  bgBlue: ViewStyle;
  bgPink: ViewStyle;
  bgPurple: ViewStyle;
  bgDarkGreen: ViewStyle;
}

export const globalStyles = StyleSheet.create<GlobalStyle>({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        position: 'relative'
      },
      bgRed: {
        backgroundColor: '#FFEBE9'
      },
      bgYellow: {
        backgroundColor: '#FFEDDE'
      },
      bgGreen: {
        backgroundColor: '#E5FCF6'
      },
      bgBlue: {
        backgroundColor: '#CCE5FF'
      },
      bgPink: {
        backgroundColor: '#BF59CF'
      },
      bgPurple: {
        backgroundColor: '#BF59CF'
      },
      bgDarkGreen: {
        backgroundColor: '#006F51'
      },
})