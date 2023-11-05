// import React, { useState } from "react";
// import { AppRegistry, StyleSheet, Text, View } from "react-native";
// import appsFlyer from "react-native-appsflyer";

// const config = {
//   devKey: "K28367512978199",
//   isDebug: true,
//   appId: "41425244",
//   onInstallConversionDataListener: true,
//   onDeepLinkListener: true,
//   timeToWaitForATTUserAuthorization: 10,
// };

// const AppsflyerTest = () => {
//   const [result, setResult] = useState();

//   useEffect(() => {
//     appsFlyer.initSdk(
//       config,
//       (result) => {
//         setResult(result);
//       },
//       (error) => {
//         console.error(error);
//       }
//     );
//   }, []);

//   return (
//     <View style={styles.container}>
//       {result && (
//         <Text>
//           SDK AppsFlyer:
//           {JSON.stringify(result, null, 2)}
//         </Text>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });

// export default AppsflyerTest;
