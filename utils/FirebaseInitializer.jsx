import { useEffect } from "react";
import firebase from "firebase/app";

const FirebaseInitializer = ({ children }) => {
  useEffect(() => {
    // Инициализация Firebase с вашими настройками
    const config = {
      apiKey: "your-api-key",
      authDomain: "your-auth-domain",
      projectId: "your-project-id",
      storageBucket: "your-storage-bucket",
      messagingSenderId: "your-messaging-sender-id",
      appId: "your-app-id",
    };
    firebase.initializeApp(config);
  }, []);

  return children;
};

export default FirebaseInitializer;
