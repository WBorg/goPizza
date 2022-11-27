import { Header } from '@components/Header'
import React, { useState } from 'react'
import {
  Label,
  Main,
  Sizes,
  Title,
  Container,
  PicturePizza,
  InfoBox,
  Total
} from './styles'

import { PIZZA_TYPES } from '@utils/pizzaTypes'
import { RadioButton } from '@components/RadioButton'
import pizza from '@assets/pizza_margherita.png'
import { InputDataPizza } from '@components/InputDataPizza'
import { Button } from '@components/Button'

export function PizzaSize() {
  const [size, setSize] = useState('')

  return (
    <Container>
      <Header />

      <Main>
        <PicturePizza source={pizza} />
        <Title>Margherita</Title>
        <Label>Selecione um tamanho</Label>

        <Sizes>
          {PIZZA_TYPES.map(item => (
            <RadioButton
              key={item.id}
              title={item.name}
              onPress={() => setSize(item.id)}
              selected={size === item.id}
            />
          ))}
        </Sizes>
        <InfoBox>
          <InputDataPizza title="Número da mesa" />
          <InputDataPizza title="Quantidade" />
        </InfoBox>
        <Total>Total: R$10,00</Total>
        <Button title="Confirmar pedido" type="GREEN" />
      </Main>
    </Container>
  )
}
