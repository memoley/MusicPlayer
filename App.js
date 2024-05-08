import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PaperProvider, MD3DarkTheme as DarkTheme } from "react-native-paper";
import MusicPlayer from "./components/MusicPlayer";
import LoginScreen from "./screens/loginScreen";
import SongsScreen from "./screens/songsScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    // <View style={styles.container}>
    //   <StatusBar barStyle="light-content" />
    //   <MusicPlayer/>
    // </View>
    <PaperProvider theme={DarkTheme}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="MusicPlayer" component={MusicPlayer} />
          <Stack.Screen name="SongsScreen" component={SongsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
