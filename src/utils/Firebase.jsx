import { AppRegistry, StyleSheet, Text, View } from "react-native";
import { initializeApp } from "firebase/app";
import React, { useEffect, useState } from "react";
const config = {
  apiKey: "AIzaSyDzmso9Xo-AeMGKBvuyowlTiO676j3R87s",
  authDomain: "test--map-62e0d.firebaseapp.com",
  projectId: "test--map-62e0d",
  storageBucket: "test--map-62e0d.appspot.com",
  messagingSenderId: "833142357658",
  appId: "1:833142357658:web:586114b7b8302b7dbc2923",
  measurementId: "G-G1S61XY4VT",
};

const FirebaseApp = () => {
  const [app, setApp] = useState();

  useEffect(() => {
    const app = initializeApp(config);
    setApp(app);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Firebase is initialized!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FirebaseApp;
