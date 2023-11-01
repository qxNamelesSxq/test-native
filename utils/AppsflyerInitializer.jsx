import { useEffect } from "react";
import appsflyer from "react-native-appsflyer";

const AppsflyerInitializer = ({ children }) => {
  useEffect(() => {
    // Инициализация Appsflyer с вашими настройками
    appsflyer.initSdk({ devKey: "qwe1231231234", appId: "4512351233" });
  }, []);

  return (
    <View>
      <Text>{children}</Text>
    </View>
  );
};

export default AppsflyerInitializer;
