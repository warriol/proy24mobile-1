import React, { useState } from "react";
import { View } from "react-native";
import LoginForm from "../components/LoginForm";
import { login } from "../services/api";
import { globalStyles } from "../styles/globalStyles";

const LoginScreen = () => {
  const [error, setError] = useState("");
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [respuesta, setRespuesta] = useState({
    message: "",
    token: "",
  });

  const handleLogin = async () => {
    try {
      const response = await login(credentials);
      console.log(response);
      setRespuesta(response);
    } catch (error) {
      setError("Error en la conexión: " + error);
    }
  };

  return (
    <View style={globalStyles.container}>
      <LoginForm
        credentials={credentials}
        setCredentials={setCredentials}
        login={handleLogin}
        error={error}
        respuesta={respuesta}
      />
    </View>
  );
};

export default LoginScreen;
