import React, { useState } from "react";
import { StyleSheet, ScrollView, View, StatusBar } from "react-native";
import useFecthJobs from "./src/useFetchJobs";
import Job from "./src/Job";
import { Text } from "react-native-elements";
import JobsPagination from "./src/JobsPagination";
import SearchForm from "./src/SearchForm";

export default function App() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { jobs, loading, error, hasNextPage } = useFecthJobs(params, page);

  function handleParamChange(param, e) {
    // const param = e.target.name;
    const value = e.target.value;
    setPage(1);
    setParams((prevParams) => {
      return { ...prevParams, [param]: value };
    });
  }

  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.txt}>
        <Text style={{ textAlign: "center", color: "rgba(0, 0, 0, 0.4)" }} h3>
          Github Jobs
        </Text>
      </View>
      <SearchForm params={params} onParamChange={handleParamChange} />
      <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
      {loading && <Text h3>Loading...</Text>}
      {error && <Text h3>Error. Try Refreshing</Text>}
      {jobs.map((job) => {
        return <Job key={job.id} job={job} />;
      })}
      <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DCDCDC",
  },
  txt: {
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
    width: 380,
    height: 60,
    paddingLeft: 10,
    fontSize: 13,
    marginTop: 10,
    marginLeft: 15,
  },
});
