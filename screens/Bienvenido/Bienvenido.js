import React from "react";
import { View, Text, TextInput, Button, Image } from "react-native";
import { SafeAreaView } from "react-native";
import { globalStyles } from "../../styles/globalStyles";

const Bienvenido = ({
  handlerSalir,
  mensaje
}) => {
  return (
    <SafeAreaView style={globalStyles.containerTop}>
      <View style={globalStyles.containerRow}>
        <Text style={globalStyles.successText}>{mensaje.message}</Text>
        <Button title="Salir" onPress={handlerSalir} />
      </View>
    </SafeAreaView>
  );
};

export default Bienvenido;
