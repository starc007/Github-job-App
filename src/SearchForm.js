//import liraries
import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const SearchForm = ({ params, onParamChange }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text>Description</Text>
        <TextInput
          onChange={(e) => onParamChange("description", e)}
          value={params.description}
          style={styles.input}
        />
      </View>
      <View>
        <Text>Location</Text>
        <TextInput
          onChange={(e) => onParamChange("location", e)}
          value={params.location}
          style={styles.input}
        />
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 20,
    flexDirection: "row",
  },
  input: {
    borderRadius: 2,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 20,
    shadowOffset: { width: 1, height: 13 },
    marginHorizontal: 2,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.1)",
    width: 180,
    height: 30,
    paddingLeft: 10,
    fontSize: 13,
  },
});

//make this component available to the app
export default SearchForm;
