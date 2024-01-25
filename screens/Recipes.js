import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Image,
  ScrollView,
  Pressable,
  Modal,
  ActivityIndicator,
} from "react-native";
// import { HStack, Spinner } from "native-base";
import { Octicons } from "@expo/vector-icons";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const apiUrl = "https://food-recipes-with-images.p.rapidapi.com/";

const Recipes = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  // useEffect(() => {
  //   const favoriteSearchTerm = "eggs";
  //   setSearchTerm(favoriteSearchTerm);
  // }, []);
  
  // useEffect(() => {
  //   console.log(searchTerm);
  //   handleSearch();
  // }, [searchTerm]);
  
  

  const handleSearch = async () => {
    setSearchTerm("");
    setLoading(true);

    try {
      const response = await axios.get(apiUrl, {
        params: {
          q: searchTerm,
        },
        headers: {
          "X-RapidAPI-Key":
            "36f4ede7fcmshfb417603ad81327p1a4925jsn0ef9ed6e83b2",
          "X-RapidAPI-Host": "food-recipes-with-images.p.rapidapi.com",
        },
      });
      console.log(searchTerm)

      setSearchResults(response.data.d || []);
      setLoading(false);
      console.log("Search completed successfully.");
    } catch (error) {
      console.log(
        "Error occurred when fetching data from open source: " + error
      );
      setLoading(false);
    }
  };
  

  // useEffect(() => {
  //   console.log("Loading status changed:", loading);
  // }, [searchResults]);

  const openModal = async (recipe) => {
    await setSelectedRecipe(recipe);

    setModalVisible(true);
    console.log(recipe);
  };

  const closeModal = () => {
    setSelectedRecipe(null);
    setModalVisible(false);
  };

  const RenderModal = () => {
    if (!selectedRecipe) {
      return null;
    }

    return (
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <ScrollView style={styles.modalContent}>
            <Image
              source={{ uri: `https:${selectedRecipe.Image}` }}
              style={{ width: "100%", height: 200, marginBottom: 10 }}
            />
            <Text
              style={{
                fontSize: 24,
                marginBottom: 20,
                color: "#f0ad30",
                fontWeight: "900",
              }}
            >
              {selectedRecipe.Title}
            </Text>
            <Text
              style={{
                color: "#f0ad30",
                fontSize: 24,
                fontWeight: "900",
                paddingBottom: 10,
              }}
            >
              Ingredients:
            </Text>
            <Text>
              {selectedRecipe.Ingredients &&
                Object.values(selectedRecipe.Ingredients).map(
                  (ingredient, index) => (
                    <Text key={index}>{`\u2022 ${ingredient}\n`}</Text>
                  )
                )}
            </Text>
            <Text
              style={{
                color: "#f0ad30",
                fontSize: 24,
                fontWeight: "900",
                paddingBottom: 10,
              }}
            >
              Instructions:
            </Text>
            <Text style={{ fontSize: 16 }}>{selectedRecipe.Instructions}</Text>

            <Pressable onPress={closeModal} style={styles.closeButton}>
              <Text style={{ color: "white" }}>Close</Text>
            </Pressable>
          </ScrollView>
        </View>
      </Modal>
    );
  };

  return (
    <ScrollView>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          height: 45,
          borderColor: "gray",
          borderWidth: 1,
          marginTop: 10,
          marginBottom: 10,
          paddingLeft: 10,
          paddingRight: 10,
          borderRadius: 10,
          justifyContent: "space-between",
        }}
      >
        <TextInput
          placeholder="Search all recipes"
          placeholderTextColor="gray"
          value={searchTerm}
          onChangeText={(text) => {
            setSearchTerm(text);
          }}
          style={{
            flex: 1,
          }}
        />
        <Octicons
          name="search"
          size={24}
          color="black"
          onPress={handleSearch}
        />
      </View>
      <View
        style={{
          borderBottomColor: "black",
          borderBottomWidth: 1,
          marginVertical: 30,
        }}
      />
      <View>
        {loading ? (
          <View
            style={{
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <ActivityIndicator size="large" color="black" />
            <Text style={{ marginTop: 10 }}>Loading...</Text>
          </View>
        ) : (
          <View style={{}}>
            {searchResults.map((recipe) => (
              <Pressable key={recipe.id} onPress={() => openModal(recipe)}>
                <Image
                  source={{ uri: `https:${recipe.Image}` }}
                  style={{ width: 200, height: 200 }}
                />
                <Text style={{ fontSize: 24 }}>{recipe.Title}</Text>
              </Pressable>
            ))}
          </View>
        )}
      </View>
      <RenderModal />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "90%",
    flexGrow: 1,
    marginBottom: 50,
    marginTop: 40,
  },
  closeButton: {
    backgroundColor: "#f0ad30",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    alignItems: "center",
    marginBottom: 50,
  },
  scrollViewContainer: {
    flexGrow: 1,
  },
});

export default Recipes;
