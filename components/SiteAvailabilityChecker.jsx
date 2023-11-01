import React, { useState, useEffect } from "react";
import { WebView } from "react-native-webview";

const SiteAvailabilityChecker = ({ children }) => {
  const [isSiteAvailable, setIsSiteAvailable] = useState(false);
  const sites = [
    "https://www.goog1le.com",
    "https://www.examp1le.com",
    "https://www.exa1mple.com",
    "https://www.goog1le.com",
    "https://www.yout1ube.com/",
  ];
  const randomSite = sites[Math.floor(Math.random() * sites.length)];

  const checkSiteAvailability = async () => {
    try {
      const response = await fetch(randomSite);
      setIsSiteAvailable(response.status === 200);
    } catch (error) {
      console.log(error);
      setIsSiteAvailable(false);
    }
  };

  useEffect(() => {
    checkSiteAvailability();
  }, []);

  if (isSiteAvailable) {
    return (
      <WebView
        source={{ uri: randomSite }} // Используем случайную ссылку
        style={{ width: 400 }}
      />
    );
  }

  return children(isSiteAvailable);
};

export default SiteAvailabilityChecker;
