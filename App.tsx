import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components'
import {  Text, View,  } from 'react-native';
import { useFonts, DMSans_400Regular } from '@expo-google-fonts/dm-sans';
import { DMSerifDisplay_400Regular } from '@expo-google-fonts/dm-serif-display';

import theme from './src/theme'
import { Loading } from '@components/Loading';
import { Home } from '@screens/Home';


export default function App() {
  
  
  
  
  const [fontsLoaded] = useFonts({DMSans_400Regular,DMSerifDisplay_400Regular})


  return (
    <ThemeProvider theme={theme}>

      <StatusBar
        style="light"
        backgroundColor="transparent"
        translucent
      
      />

      { fontsLoaded ? <Home /> : <Loading/> }

    </ThemeProvider>
  );
}

        
