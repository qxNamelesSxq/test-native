// App.js
import React, { useEffect } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
;
import Quiz from "./components/Quiz";
import SiteAvailabilityChecker from "./components/SiteAvailabilityChecker";


const App = () => {

  return (
    <SafeAreaView style={styles.container}>
      <SiteAvailabilityChecker>
        {isSiteAvailable => (
          isSiteAvailable ? (
            <View>
              <Text>Сайт доступен</Text>

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
