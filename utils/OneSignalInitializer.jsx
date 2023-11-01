import { useEffect } from "react";
import OneSignal from "react-native-onesignal";

const OneSignalInitializer = ({ children }) => {
  useEffect(() => {
    // Инициализация OneSignal с вашими настройками
    OneSignal.init("1213312qwe566", { kOSSettingsKeyAutoPrompt: true });
  }, []);

  return (
    <View>
      <Text>{children}</Text>
    </View>
  );
};

export default OneSignalInitializer;
