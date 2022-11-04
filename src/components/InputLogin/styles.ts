import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import {  TextInput } from 'react-native'




export const Container = styled(TextInput).attrs(({theme}) => ({
  placeholderTextColor: theme.COLORS.TITLE
}))`

  width: 100%; 
  height: ${RFValue(56)}px;
  border-radius: 12px;
  font-family: ${({theme}) => theme.FONTS.TEXT};
  font-size: ${RFValue(14)}px;
  border: 1px solid ${({theme}) => theme.COLORS.PRIMARY_100};
  padding: 21px 20px;
  margin-bottom: 16px;


`;