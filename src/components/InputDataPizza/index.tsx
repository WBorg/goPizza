import React from 'react'
import { TextInputProps } from 'react-native'
import { Container, Input, Label } from './styles'

type Props = TextInputProps & {
  title: string
}

export function InputDataPizza({ title, ...rest }: Props) {
  return (
    <Container>
      <Label>{title}</Label>
      <Input keyboardType="numeric" {...rest} />
    </Container>
  )
}
