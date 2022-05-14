import { View, Text, TouchableOpacity, AppState } from "react-native";
import React, { useEffect, useState, useRef } from "react";
import AppNavigator from "./app/navigation/AppNavigator";
import { NavigationContainer } from "@react-navigation/native";
import AccordionView from "./app/components/AppAccordion";
import Header from "./app/components/Header";
export default function App() {
  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);

  useEffect(() => {
    const subscription = AppState.addEventListener("change", (nextAppState) => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === "active"
      ) {
        console.log("App has come to the foreground!");
      } else if (
        appState.current.match(/active/) &&
        nextAppState === "background"
      ) {
        console.log("App has come to the background!");
      }

      appState.current = nextAppState;
      setAppStateVisible(appState.current);
      console.log("AppState", appState.current);
    });
    return () => {
      subscription.remove();
      if (appState.current == "active") {
        console.log("App is Active!");
      } else if (appState.current == "background") {
        console.log("App is in Background!");
      }
    };
  }, []);

  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
