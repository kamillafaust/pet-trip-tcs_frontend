import React from "react";
import { Container, Box } from "@mui/material";
import { SectionFooter, TextSenac, BoxText, TextStudents } from "./styles";

const Footer = () => {
  return (
    <SectionFooter>
      <Container maxWidth="lg">
        <BoxText>
          <TextSenac>Projeto TCS Senac Santa Catarina - Palhoça</TextSenac>
          <TextStudents>Desenvolvido por Jhony e Kamilla</TextStudents>
        </BoxText>
      </Container>
    </SectionFooter>
  );
};

export default Footer;
