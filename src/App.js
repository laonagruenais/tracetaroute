import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { NativeBaseProvider } from 'native-base'
import React, { useEffect } from 'react'
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native'

import { AuthProvider } from './contexts/AuthContext'
import Navigator from './navigation/Navigator'
import { getTheme } from './theme/Theme'
import { ProgressStepProvider } from './contexts/ProgressStepContext'

const WithContext = () => {
  return (
    <ProgressStepProvider>
      <App />
    </ProgressStepProvider>
  )
}

const App = () => {
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

export default WithContext