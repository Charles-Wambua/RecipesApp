import React from 'react';
import { View, StyleSheet, Text, TextInput } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";


const Navbar = () => {
    return (
        <View>
          <View style={{ backgroundColor: "#f0ad30", paddingTop: 55 }}></View>
          <View
            style={{
              justifyContent: "space-around",
              flexDirection: "row",
              paddingTop: 20,
            }}
          >
            <EvilIcons name="calendar" size={34} color="black" />
            <Text style={{ fontSize: 24, fontWeight: "bold" }}>Recipes</Text>
            <Ionicons name="person-circle-outline" size={34} color="black" />
          </View>
        
        </View>
      );
}

const styles = StyleSheet.create({})

export default Navbar;
