import React from 'react'
import BootstrapCard from 'react-bootstrap/Card'
import styled from 'styled-components'
import { gray2 } from '../globalStyles'

const Card = ({ text, palindrome }) => {
  return (
    <Container>
      <StyledCard>
        <ContainerBody>
          <StyledCard.Body>
            <Label>Text: {text}</Label>
          </StyledCard.Body>
          <StyledCard.Body>
            <Label>Palindrome: {palindrome.toString()}</Label>
          </StyledCard.Body>
        </ContainerBody>
      </StyledCard>
    </Container>
  )
}
const Container = styled.div`
  margin: 20px;
`
const ContainerBody = styled.div`
  display: flex;
  justify-content: space-around;
`

const Label = styled.div`
  width: 250px;
  @media (max-width: 900px) {
    width: 120px;
  }
  @media (max-width: 600px) {
    width: 100px;
  }
`

const StyledCard = styled(BootstrapCard)`
  width: 600px;
  border: 3px solid ${gray2};
  border-radius: 8px;
  @media (max-width: 900px) {
    width: 400px;
  }
  @media (max-width: 600px) {
    width: 300px;
  }
`
export default Card
