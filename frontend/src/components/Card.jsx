import React from "react";
import BootstrapCard from "react-bootstrap/Card";
import styled from "styled-components";

const Card = ({ text, palindrome }) => {
  return (
    <Container>
      <BootstrapCard>
        <BootstrapCard.Body>
          Text: {text} Palindrome: {palindrome.toString()}
        </BootstrapCard.Body>
      </BootstrapCard>
    </Container>
  );
};
const Container = styled.div`
  width: 600px;
  margin: 20px;
`;
export default Card;
