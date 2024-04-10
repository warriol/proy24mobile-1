import React from "react";
import { View, Text, TextInput, Button, Image } from "react-native";
import { globalStyles } from "../styles/globalStyles";

const LoginForm = ({
  credentials,
  setCredentials,
  login,
  error,
  respuesta,
}) => {
  return (
    <View style={globalStyles.container}>
      <Image style={globalStyles.imagen200} source={require('../assets/logo.png')} />
      <Text style={globalStyles.title}>Inicio de sesión</Text>
      <Text style={globalStyles.label}>Username:</Text>
      <TextInput
        style={globalStyles.input}
        value={credentials.username}
        onChangeText={(text) =>
          setCredentials({ ...credentials, username: text })
        }
      />
      <Text style={globalStyles.label}>Password:</Text>
      <TextInput
        style={globalStyles.input}
        value={credentials.password}
        onChangeText={(text) =>
          setCredentials({ ...credentials, password: text })
        }
        secureTextEntry
      />
      <Button title="Entrar" onPress={login} />
      <Text style={globalStyles.errorText}>{error}</Text>
      {respuesta.message == null ? (
        <>
          <Text style={globalStyles.successText}>res: {JSON.stringify(respuesta)}</Text>
          <Image style={globalStyles.imagen200} source={{ uri: 'https://picsum.photos/200/200' }} />
        </>
      ) : null}
    </View>
  );
};

export default LoginForm;
