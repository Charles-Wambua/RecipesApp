import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, StyleSheet } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import Recipes from "./screens/Recipes";
import SecondScreen from "./screens/SecondScreen";

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
        name="SEcondscreen"
        component={SecondScreen}
        options={{headerShown:false}}
      />
        <Stack.Screen
          name="recipesScreen"
          component={Recipes}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
      

   
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default StackNavigator;
