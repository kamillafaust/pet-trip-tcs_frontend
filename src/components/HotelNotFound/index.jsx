import React from "react";
import { Container } from "@mui/material";
import { SectionContainer, BoxText, Text, TextDescription } from "./styles";

const HotelNotFound = () => {
  return (
    <SectionContainer>
      <Container maxWidth="lg">
        <BoxText>
          <Text>
            <span>Oops!</span>
          </Text>
          <Text>Sinto muito.</Text>
          <TextDescription>
            Não foi possível encontrar hotéis com as buscas que você deseja,
            tente novamente.
          </TextDescription>
        </BoxText>
      </Container>
    </SectionContainer>
  );
};

export default HotelNotFound;
