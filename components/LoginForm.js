import React from "react";
import { View, Text, TextInput, Button, Image } from "react-native";
import { globalStyles } from "../styles/globalStyles";
import Bienvenido from "../screens/Bienvenido/Bienvenido";
import ScrollInfinito from "../screens/publico/ScrollInfinito";

const LoginForm = ({
  credentials,
  setCredentials,
  login,
  error,
  respuesta,
  setRespuesta
}) => {

  function handlerSalir() {
    setCredentials ({ username: "", password: "" });
    setRespuesta ({ message: "", token: "" });
  }

  return (
    <>
    {respuesta.token ? (
      <>
        <Bienvenido 
          handlerSalir={handlerSalir}
          mensaje={respuesta}
        />
        <ScrollInfinito />
      </>
    ) : (
      <View style={globalStyles.container}>
        <View style={globalStyles.containerCentrado}>
          <Image style={globalStyles.imagen200} source={require('../assets/logo.png')} />
          <Text style={globalStyles.title}>Inicio de sesión</Text>
          <Text style={globalStyles.label}>Username:</Text>
        </View>
        <TextInput
          style={globalStyles.input}
          value={credentials.username}
          onChangeText={(text) =>
            setCredentials({ ...credentials, username: text })
          }
        />
        <View style={globalStyles.containerCentrado}>
          <Text style={globalStyles.label}>Password:</Text>
        </View>
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
      </View>
    )}
    </>
  );
};

export default LoginForm;
