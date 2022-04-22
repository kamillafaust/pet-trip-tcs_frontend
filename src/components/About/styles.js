import { Box, styled, Typography } from "@mui/material";

export const AboutDescription = styled(Box)`
  background-color: #f7f5fd;
`;

export const DescriptionItems = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 24px 0px 24px;
  font-family: "Montserrat Alternates", sans-serif;
`;

export const Title = styled(Typography)`
  padding-top: 33px;
  color: #373737;
  margin-bottom: 14px;
  font-size: 20px;
  font-weight: 100;
  text-align: center;
  font-family: "Fredoka One", cursive;
`;

export const TextAbout = styled(Typography)`
  text-align: center;
  color: #373737;
  font-size: 14px;
  padding: 0px 150px;
  font-weight: 600;
  line-height: 28px;

  span {
    color: #f47920;
    font-size: 14px;
    font-weight: bold;
  }

  @media (max-width: 1000px) {
    padding: 0px 20px;
  }
`;
export const BoxQuestion = styled(Box)`
  display: flex;
  align-items: center;

  img {
    width: 28px;
    margin-right: 12px;
  }

  @media (max-width: 400px) {
    flex-direction: column;
  }
`;

export const QuestionAbout = styled(Typography)`
  text-align: center;
  color: #373737;
  font-size: 14px;
  font-weight: 600;
`;

export const ContainerBar = styled(Box)`
  background-color: #fffdfd;
  height: 50px;
  margin: auto;
  margin-top: 10px;
  max-width: 560px;
  border-radius: 10px;
  box-shadow: 0px 0px 4px #00000057;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 450px) {
    flex-direction: column;
    align-items: center;
    height: 90px;
    padding: 15px 0px;
    margin-top: 10px;
  }
`;
