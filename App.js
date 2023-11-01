// App.js
import React, { useEffect } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
;
import Quiz from "./components/Quiz";
import SiteAvailabilityChecker from "./components/SiteAvailabilityChecker";

import FirebaseInitializer from "./utils/FirebaseInitializer";
import AppsflyerInitializer from "./utils/AppsflyerInitializer";
import OneSignalInitializer from "./utils/OneSignalInitializer";


const App = () => {

  return (
    <SafeAreaView style={styles.container}>
      <SiteAvailabilityChecker>
        {isSiteAvailable => (
          isSiteAvailable ? (
            <View>
              <AppsflyerInitializer />
              <FirebaseInitializer />
              <OneSignalInitializer />

            </View>
          ) : <Quiz />
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
