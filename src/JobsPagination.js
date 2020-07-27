//import liraries
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
// create a component
const JobsPagination = ({ page, setPage, hasNextPage }) => {
  function adjustPage(amount) {
    setPage((prevPage) => prevPage + amount);
  }
  //   const [active, setActive] = useState(fa);
  return (
    <View style={styles.container}>
      <View style={styles.pagination}>
        {page !== 1 && (
          <TouchableOpacity style={[styles.btn]} onPress={() => adjustPage(-1)}>
            <Ionicons
              name="ios-arrow-back"
              size={24}
              color="black"
              style={{ padding: 6, paddingLeft: 13 }}
            />
          </TouchableOpacity>
        )}
        {page !== 1 && (
          <TouchableOpacity style={styles.btn} onPress={() => setPage(1)}>
            <Text style={{ padding: 6, paddingLeft: 13 }}>1</Text>
          </TouchableOpacity>
        )}

        {page > 2 && (
          <TouchableOpacity style={styles.btn}>
            <MaterialCommunityIcons
              name="dots-horizontal"
              size={20}
              color="black"
              style={{ padding: 8, paddingLeft: 8 }}
            />
          </TouchableOpacity>
        )}
        {page > 2 && (
          <TouchableOpacity style={styles.btn} onPress={() => adjustPage(-1)}>
            <Text style={{ padding: 6, paddingLeft: 13 }}>{page - 1}</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity style={styles.btn}>
          <Text style={{ padding: 6, paddingLeft: 13 }}>{page}</Text>
        </TouchableOpacity>
        {hasNextPage && (
          <TouchableOpacity style={styles.btn} onPress={() => adjustPage(1)}>
            <Text style={{ padding: 6, paddingLeft: 13 }}>{page + 1}</Text>
          </TouchableOpacity>
        )}
        {hasNextPage && (
          <TouchableOpacity style={styles.btn} onPress={() => adjustPage(1)}>
            <Ionicons
              name="ios-arrow-forward"
              size={20}
              color="black"
              style={{ padding: 6, paddingLeft: 13 }}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pagination: {
    height: 40,
    flexDirection: "row",
    paddingLeft: 20,
  },
  btn: {
    height: 35,
    width: 35,

    borderRadius: 2,
    marginTop: 2,

    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 20,
    shadowOffset: { width: 1, height: 13 },
    marginHorizontal: 2,
  },
});

export default JobsPagination;
