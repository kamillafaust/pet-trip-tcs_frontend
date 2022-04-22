import React from "react";
import { Container } from "@mui/material";
import { SectionMain, BoxMain } from "./styles";
import SideBar from "../SideBar";
import SideBarMobile from "../SideBarMobile";
import CardHotel from "../CardHotel";

const Main = () => {
  return (
    <SectionMain>
      <Container maxWidth="lg">
        <SideBarMobile />
        <BoxMain>
          <SideBar />
          <CardHotel />
        </BoxMain>
      </Container>
    </SectionMain>
  );
};

export default Main;

//npx json-server --watch db.json --port 5000
