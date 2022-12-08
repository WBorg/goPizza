import React from 'react'
import { Container, BackIcon, BackButton } from './styles'
import { useNavigation } from '@react-navigation/native'

export function Header() {
  const navigation = useNavigation()

  function handleGoBackLogin() {
    navigation.navigate('login')
  }

  return (
    <Container>
      <BackButton onPress={handleGoBackLogin}>
        <BackIcon />
      </BackButton>
    </Container>
  )
}
