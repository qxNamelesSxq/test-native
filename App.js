// App.js
import React, { useEffect } from "react";
import { SafeAreaView, StyleSheet, Text, View, ActivityIndicator } from "react-native";

import Quiz from "./components/Quiz";
import SiteAvailabilityChecker from "./components/SiteAvailabilityChecker";

import FirebaseApp from "./src/utils/Firebase";
import AppsflyerTest from "./src/utils/Appsflyer";


const App = () => {


  return (
    <SafeAreaView style={styles.container}>
      <SiteAvailabilityChecker>
        {isSiteAvailable => (
          isSiteAvailable ? (
            <View>
              <Quiz />
            </View>
          ) : (
            <Text style={{ textAlign: "center" }}>
              Сайт недоступен.
            </Text>
          )
        )}
      </SiteAvailabilityChecker>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
