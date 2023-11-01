import { useEffect } from "react";
import { initializeApp } from "firebase/app";

const FirebaseInitializer = ({ children }) => {
  useEffect(() => {
    // Инициализация Firebase с вашими настройками
    const config = {
      apiKey: "AIzaSyDzmso9Xo-AeMGKBvuyowlTiO676j3R87s",
      authDomain: "test--map-62e0d.firebaseapp.com",
      projectId: "test--map-62e0d",
      storageBucket: "test--map-62e0d.appspot.com",
      messagingSenderId: "833142357658",
      appId: "1:833142357658:web:586114b7b8302b7dbc2923",
      measurementId: "G-G1S61XY4VT",
    };
    initializeApp(config);
  }, []);

  return (
    <View>
      <Text>{children}</Text>
    </View>
  );
};

export default FirebaseInitializer;
