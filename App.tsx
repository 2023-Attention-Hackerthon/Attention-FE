import React from "react";
import "react-native-gesture-handler";

import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useLoadedAssets } from "./hooks/useLoadedAssets";
import Navigation from "./navigation";
import AppRegister from "./AppRegister";

export default function App() {
  const isLoadingComplete = useLoadedAssets();

  if (!isLoadingComplete) {
    return null;
  }
  return (
    <AppRegister>
      <SafeAreaProvider>
        <Navigation />
        <StatusBar />
      </SafeAreaProvider>
    </AppRegister>
  );
}
