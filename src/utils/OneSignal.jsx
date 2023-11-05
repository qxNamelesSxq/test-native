import { useEffect } from "react";
import OneSignal from "react-native-onesignal";

const appID = "112312314124qweq";
const appSecret = "secret12351233";
const oneSignalInitOptions = {
  appID,
  appSecret,
  autoRegister: true,
  promptForPushNotifications: true,
};

export default {
  initialize() {
    OneSignal.init(oneSignalInitOptions);
  },
};
