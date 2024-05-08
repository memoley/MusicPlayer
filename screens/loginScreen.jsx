import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { useTheme } from 'react-native-paper';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const theme = useTheme();

  const handleLogin = () => {
    // Aquí puedes implementar la lógica para autenticar al usuario
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text style={styles.Text} variant="displaySmall">SoundWave</Text>
      <TextInput
        label="Usuario"
        value={username}
        onChangeText={setUsername}
        mode='outlined'
        style={styles.input}
      />
      <TextInput
        label="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        mode='outlined'
        style={styles.input}
      />
      <Button
        mode="contained"
        onPress={() => navigation.navigate("SongsScreen")}
      >
        Iniciar sesión
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    marginBottom: 20,
  },
  Text: {
    marginBottom: 20,
  }
});

export default LoginScreen;
