//import liraries
import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Linking,
  Image,
} from "react-native";
import { Badge, Button } from "react-native-elements";
import { Card } from "react-native-paper";
import Markdown from "react-native-markdown-renderer";

// create a component
const Job = ({ job }) => {
  const [detail, setDetail] = useState(false);
  const viewDetails = () => {
    setDetail(!detail);
  };
  return (
    <View style={styles.container}>
      <Card>
        <ScrollView style={styles.card}>
          <View>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.title}>{job.title}</Text>
              {/* <Image
                source={job.company_logo}
                style={{ height: 50, width: 50 }}
              /> */}
            </View>
            <View style={{ flexDirection: "row", marginBottom: 4 }}>
              <Text style={styles.subtitle}>{job.company}</Text>
              <Text style={styles.subtitle}>
                ({new Date(job.created_at).toLocaleDateString()})
              </Text>
            </View>
            <View style={{ flexDirection: "row", marginLeft: 5 }}>
              <Badge
                value={job.type}
                status="warning"
                containerStyle={{ marginRight: 5 }}
                badgeStyle={{
                  backgroundColor: "gray",
                  height: 20,
                  width: 80,
                  borderRadius: 4,
                }}
              />
              <Badge
                value={job.location}
                status="warning"
                badgeStyle={{
                  backgroundColor: "gray",
                  height: 20,
                  borderRadius: 4,
                }}
              />
            </View>
            <View
              style={{
                flexWrap: "wrap",
                alignItems: "flex-start",
                marginLeft: 5,
              }}
            >
              <Markdown>{job.how_to_apply}</Markdown>
            </View>
          </View>
          <Card.Content>
            <Button
              title={detail ? "Hide Details" : "View Details"}
              buttonStyle={{ width: 100, marginBottom: 8 }}
              containerStyle={{ marginLeft: -10 }}
              onPress={viewDetails}
              titleStyle={{ fontSize: 12 }}
            />
          </Card.Content>
          {detail ? (
            <View>
              <Markdown>{job.description}</Markdown>
            </View>
          ) : null}
        </ScrollView>
      </Card>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    // justifyContent: "space-between",
    borderWidth: 1,

    marginVertical: 10,

    paddingLeft: 10,

    borderRadius: 3,
    backgroundColor: "#DCDCDC",
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 20,
    shadowOffset: { width: 1, height: 13 },
    marginHorizontal: 2,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.1)",
    width: 390,
    paddingLeft: 10,
    fontSize: 13,
    marginLeft: 10,
  },
  title: {
    fontWeight: "bold",
  },
  subtitle: {
    color: "gray",
    fontSize: 10,
    paddingTop: 4,
    marginHorizontal: 5,
  },
});

export default Job;
