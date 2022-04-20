import React from "react";
import { NativeBaseProvider, NativeBaseConfigProvider, Text } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthProvider } from "./contexts/AuthContext";
import { getTheme } from './theme/Theme';
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import Navigator from "./navigation/Navigator";
import useColorScheme from "react-native/Libraries/Utilities/useColorScheme";

export default function App() {
  const isDarkMode = useColorScheme() === 'dark'

  const theme = getTheme(isDarkMode)
  const navigationTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: isDarkMode ? '#0F172A' : '#fff'
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AuthProvider>
        {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} /> */}
        <NativeBaseProvider
          theme={theme}
        >
          <NavigationContainer
            theme={navigationTheme}
          // onReady={() => RNBootSplash.hide({ fade: true })}
          >


            <Navigator />

          </NavigationContainer>
        </NativeBaseProvider>

      </AuthProvider>
    </SafeAreaView>
  );
}