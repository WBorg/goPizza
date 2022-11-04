import { TextInputProps } from 'react-native'
import { Container } from './styles'

type Props = TextInputProps

export function InputLogin({...rest}: Props){

  return(
    <Container {...rest} />
  )
}