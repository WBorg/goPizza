import { LinearGradient } from 'expo-linear-gradient'
import styled from 'styled-components/native'


export const Container = styled(LinearGradient).attrs(({theme})=>({
  colors: theme.COLORS.GRADIENT,
  start:{x:0,y:0},
  end:{x:1,y:1},
}))`
  flex: 1;
  justify-content: center;
  align-items: center;
  
`;

export const Text = styled.Text`
  font-size: 48px ;
  font-family: ${({theme}) => theme.FONTS.TITLE};
    color: ${({theme}) => theme.COLORS.TITLE};
`