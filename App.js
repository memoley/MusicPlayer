import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import MusicPlayer from './components/MusicPlayer';


const App=()=> {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <MusicPlayer/>
    </View>
  );
};

export default  App;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
