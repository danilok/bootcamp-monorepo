import styled from 'styled-components'
import Button from '@danilok/modulo-comum/components/Button'

const Title = styled.h1`
  color: blue;
  font-size: 50px;
`

export default function Home() {
  return (
    <div>
      <Button>
        Adicionando children onde estamos usando o componente
      </Button>
      <Title>Nosso site que usa a lib de componente local</Title>
    </div>
  )
}
