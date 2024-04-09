import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

export default function App() {

  const [error, setError] = useState('');

  const [credentials, setCredentials] = useState({
    username: "willy",
    password: "1234",
    google: ""
  });

  async function login() {

    fetch('http://192.168.4.178:8080/login', {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json'
      },
      mode: 'cors',
      body: JSON.stringify(credentials)
    })
    .then(res => {
      if (res.status !== 200) {
        if (res.status === 401) 
          setError('Credenciales incorrectas.');
        else
          setError('Error en la conexión.');
      }
      return res.json();
    })
    .then(data => {
      setError(data.token);
      setCredentials({ ...credentials, google: data.message });
      //setCredentials({ google: data });
      return data;
    })
    .catch(error => {
      setError('Error en la conexión: ' + error);
    });

  };

  return (
    <View style={styles.container}>
      <Text>Hola willy!</Text>
      <Text onPress={login}>Login</Text>
      <Text>{error}</Text>
      <Text>{credentials.google}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
