import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: flex-start;
`
export const Label = styled.Text`
  font-family: ${({theme}) => theme.FONTS.TEXT};
  font-size: 14px;
  margin-bottom: 16px;
  color: ${({theme}) => theme.COLORS.SECONDARY_900};
`
export const Input = styled.TextInput`
  height: 56px;
  width: 155px;
  padding: 20px 0;
  font-size: 16px;
  text-align: center;
  color: ${({theme}) => theme.COLORS.SECONDARY_900};
  background-color: ${({theme}) => theme.COLORS.TITLE};
  border-radius: 8px;
  border: 1px solid ${({theme}) => theme.COLORS.SHAPE}
`