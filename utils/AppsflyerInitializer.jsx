import { useEffect } from "react";
import Appsflyer from "appsflyer";

const AppsflyerInitializer = ({ children }) => {
  useEffect(() => {
    // Инициализация Appsflyer с вашими настройками
    Appsflyer.initSdk({ devKey: "your-dev-key", appId: "your-app-id" });
  }, []);

  return children;
};

export default AppsflyerInitializer;
