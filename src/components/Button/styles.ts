import { RFValue } from 'react-native-responsive-fontsize'
import {TouchableOpacity} from 'react-native'
import styled from 'styled-components/native'

export type ButtonTypeStyleProps = 'RED' | 'GREEN';

type Props ={
  type: ButtonTypeStyleProps;
}

export const Container = styled(TouchableOpacity)<Props>`
  width: 100%;
  padding: 16px;
  height: ${RFValue(56)}px;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, type }) => type === 'RED' ? theme.COLORS.PRIMARY_800 : theme.COLORS.SUCCESS_900 }
`

export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({theme}) => theme.COLORS.TITLE};
  font-family: ${({theme}) => theme.FONTS.INTER};
`