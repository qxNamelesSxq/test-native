import { LogLevel, OneSignal } from "react-native-onesignal";

OneSignal.Debug.setLogLevel(LogLevel.Verbose);

OneSignal.initialize("Q13245789001723");

OneSignal.Notifications.requestPermission(true);

OneSignal.Notifications.addEventListener("click", (event) => {
  console.log("OneSignal: notification clicked:", event);
});
