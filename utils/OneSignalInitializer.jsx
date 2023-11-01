import { useEffect } from "react";
import OneSignal from "react-native-onesignal";

const OneSignalInitializer = ({ children }) => {
  useEffect(() => {
    // Инициализация OneSignal с вашими настройками
    OneSignal.init("your-app-id", { kOSSettingsKeyAutoPrompt: true });
  }, []);

  return children;
};

export default OneSignalInitializer;
