import { Box, Typography, styled, Button } from "@mui/material";

export const ContainerSideBar = styled(Box)`
  max-width: 220px;
  height: 560px;
  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 0 0 0.4em #6464645e;
  font-family: "Montserrat Alternates", sans-serif;
  padding: 25px;

  @media (max-width: 690px) {
    display: none;
  }
`;

export const TextFilter = styled(Typography)`
  font-size: 13px;
  color: #373737;
  margin-bottom: 12px;
  margin-top: 3px;

  @media (max-width: 450px) {
    font-size: 10px;
    margin: 5px;
  }
`;

export const AnimalType = styled(Box)`
  display: flex;
  justify-content: space-around;
  align-items: center;

  input[type="radio"] {
    display: none;
  }

  @media (max-width: 380px) {
    flex-wrap: wrap;
  }
`;

export const TextSize = styled(Typography)`
  font-size: 13px;
  color: #373737;
  margin-bottom: 5px;
  margin-top: 10px;
  margin-bottom: 12px;

  @media (max-width: 450px) {
    font-size: 10px;
    margin: 5px;
  }
`;

export const BoxLine = styled(Box)`
  background-color: #c2c2c2;
  width: 100%;
  height: 1px;
  margin: 18px 0px 12px 0px;
`;

export const BoxButton = styled(Box)`
  width: 64px;
  height: 26px;
  background-color: ${({ checked }) => (checked ? "#f47920" : "#fff")};
  color: ${({ checked }) => (checked ? "white" : "#$000")};
  border: 0.1px solid #ebbd8a6b;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TextButton = styled(Typography)`
  font-size: 10px;
`;

export const AnimalSize = styled(Box)`
  display: flex;
  align-items: center;
  flex-flow: row wrap;
  width: auto;
  justify-content: space-around;
  height: 100px;

  input[type="radio"] {
    display: none;
  }
`;

export const ButtonSearch = styled(Button)`
  background-color: #f47920;
  color: #ffffff;
  font-size: 9px;
  margin-left: 52px;
  margin-top: 19px;

  @media (max-width: 840px) {
    margin-left: 53px;
    margin-top: 19px;
  }
`;
