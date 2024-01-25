import React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import Navbar from "../Components/Navbar";
import Recipes from "./Recipes";
import SecondScreen from "./SecondScreen";

const HomeScreen = () => {
  return (
    <View>
      <Navbar />
      {/* <SecondScreen/> */}
      <Recipes />
    </View>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
