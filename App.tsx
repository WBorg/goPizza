import { StatusBar } from 'expo-status-bar'
import { ThemeProvider } from 'styled-components'
import { Text, View } from 'react-native'
import { useFonts, DMSans_400Regular } from '@expo-google-fonts/dm-sans'
import { DMSerifDisplay_400Regular } from '@expo-google-fonts/dm-serif-display'
import { Inter_400Regular } from '@expo-google-fonts/inter'

import theme from './src/theme'
import { Loading } from '@components/Loading'
import { PizzaSize } from '@screens/PizzaSize'

export default function App() {
  const [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSerifDisplay_400Regular,
    Inter_400Regular
  })

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="light" backgroundColor="transparent" translucent />

      {fontsLoaded ? <PizzaSize /> : <Loading />}
    </ThemeProvider>
  )
}
