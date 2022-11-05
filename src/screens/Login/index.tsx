import { Container, ForgotPassword, Form, Imagem, Label } from './styles'
import logoImg from '@assets/brand.png'
import { InputLogin } from '@components/InputLogin'
import { Button } from '@components/Button'

export function Login() {
  return (
    <Container>
      <Imagem source={logoImg} />
      <Form>
        <Label>Login</Label>
        <InputLogin placeholder="Email" />
        <InputLogin placeholder="Senha" secureTextEntry />
        <ForgotPassword>Esqueci minha senha</ForgotPassword>
        <Button title="Entrar" />
      </Form>
    </Container>
  )
}
