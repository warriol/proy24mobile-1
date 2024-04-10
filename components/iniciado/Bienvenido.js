import React from "react";
import { View, Text, TextInput, Button, Image } from "react-native";
import { globalStyles } from "../../styles/globalStyles";

const Bienvenido = ({ usuario, respuesta }) => {
  return (
    <>
      <Text style={globalStyles.title}>Bienvenido {usuario}</Text>
      <Text style={globalStyles.successText}>{respuesta.message}</Text>
      <Image
        style={globalStyles.imagen200}
        source={{ uri: "https://picsum.photos/200/200" }}
      />
    </>
  );
};

export default Bienvenido;
