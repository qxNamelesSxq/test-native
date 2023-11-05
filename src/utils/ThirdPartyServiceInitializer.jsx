// utils/ThirdPartyServiceInitializer.js
import React, { useEffect } from "react";

import { Firebase } from "./Firebase";
import { OneSignal } from "./OneSignal";
import { Appsflyer } from "./Appsflyer";

const initializeThirdPartyServices = async () => {
  // Инициализация Appsflyer
  await Appsflyer.initialize();

  // Инициализация Firebase
  await Firebase.initialize();

  // Инициализация OneSignal
  await OneSignal.initialize();

  // Установка фейковых данных
  // await Appsflyer.setAppUserId("1234567890");
  await Firebase.setUserProperty("uid", "1234567890");
  await OneSignal.setUserId("1234567890");
};

export default initializeThirdPartyServices;
