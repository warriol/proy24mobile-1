import React from "react";
import { SafeAreaView } from "react-native";
import LoginScreen from "./screens/Login/LoginScreen";
import { globalStyles } from "./styles/globalStyles";
import { StatusBar } from "expo-status-bar";

export default function App() {

  return (
    <SafeAreaView style={globalStyles.container} >
      <LoginScreen />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
