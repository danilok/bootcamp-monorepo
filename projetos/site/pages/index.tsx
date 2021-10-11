import styled from 'styled-components'
import ButtonComum from '@danilok/modulo-comum/components/Button'
import ButtonUI from '@danilok/ui/src/components/Button'
import UIProvider from '../../ui/src/theme/UIProvider';

const Title = styled.h1`
  color: blue;
  font-size: 50px;
`

export default function Home() {
  return (
    <div>
      <Title>Nosso site que usa a lib de componente local</Title>
      <ButtonComum>
        Adicionando children onde estamos usando o componente do módulo comum
      </ButtonComum>
      <br />
      <UIProvider>
        <ButtonUI>
          Adicionando children onde estamos usando o componente  do módulo UI
        </ButtonUI>
        <br />
        <ButtonUI disabled>
          Desabilitado
        </ButtonUI>
        <br />
        <ButtonUI disabled color="secondary.main">
          Cor secundária
        </ButtonUI>
      </UIProvider>
    </div>
  )
}
