import {View, ScrollView, StatusBar, SafeAreaView, StyleSheet, Platform} from 'react-native';
import React from 'react';
import { Colors } from '../utils';


const MyStatusBar: React.FC= () => {
  return (
      <View style={[styles.statusBar, {backgroundColor: Colors.blue1}]}>
        <SafeAreaView>
          <StatusBar translucent backgroundColor={Colors.blue1} />
        </SafeAreaView>
      </View>
  );
};

export default MyStatusBar;

const STATUSBAR_HEIGHT = StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

const styles = StyleSheet.create({
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
});