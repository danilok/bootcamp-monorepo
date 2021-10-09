import styled from 'styled-components'
import ButtonComum from '@danilok/modulo-comum/components/Button'
import ButtonUI from '@danilok/ui/src/components/Button'

const Title = styled.h1`
  color: blue;
  font-size: 50px;
`

export default function Home() {
  return (
    <div>
      <ButtonComum>
        Adicionando children onde estamos usando o componente do módulo comum
      </ButtonComum>
      <ButtonUI>
        Adicionando children onde estamos usando o componente  do módulo UI
      </ButtonUI>
      <Title>Nosso site que usa a lib de componente local</Title>
    </div>
  )
}
