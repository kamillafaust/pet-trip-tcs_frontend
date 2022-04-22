import { Box, styled, Typography } from "@mui/material";

export const CardContainer = styled(Box)`
  background-color: #ffffff;
  width: 100%;
  margin-left: 2px;

  ul {
    list-style: none;
  }
`;

export const TextCity = styled(Typography)`
  font-family: "Montserrat Alternates", sans-serif;
  font-size: 16px;
  color: #000
  font-weight: 600;
  padding: 8px 0px;

  span {
    color: #28a0a7;
    font-size: 18px;
  }

  @media (max-width: 850px) {
    font-size: 12px;

    span {
      font-size: 14px;
    }
  }

  @media (max-width: 600px) {
    font-size: 12px;

    span {
      font-size: 13px;
    }
  }
`;

export const CardBox = styled(Box)`
  display: flex;
  align-items: center;
  background-color: #ffffff;
  border-top: 1px solid #e5e7eb;
  margin: 10px auto;
  height: 170px;
  font-family: "Montserrat Alternates", sans-serif;

  @media (max-width: 280px) {
    flex-direction: column;
    height: 220px;
  }

  @media (max-width: 850px) {
    flex-direction: column;
    height: 220px;
  }
`;

export const BoxImage = styled(Box)`
  img {
    width: 150px;
  }

  @media (max-width: 850px) {
    img {
      width: 90px;
    }
  }
`;

export const BoxHotelDescritions = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 80%;
  height: 100%;
  padding-left: 10px;
`;

export const BoxInformation = styled(Box)``;

export const Name = styled(Typography)`
  font-size: 15px;
  color: #f47920;
  font-weight: 600;
  padding: 8px 0px;

  @media (max-width: 600px) {
    font-size: 14px;
  }

  @media (max-width: 850px) {
    font-size: 12px;
  }
`;
export const Description = styled(Typography)`
  font-size: 12px;
  font-weight: 400;
  max-width: 90%;
  padding-bottom: 8px;

  @media (max-width: 344px) {
    display: none;
  }

  @media (max-width: 600px) {
    font-size: 10px;
  }

  @media (max-width: 850px) {
    font-size: 8px;
  }
`;

export const BoxContact = styled(Box)`
  display: flex;
  justify-content: space-around;

  @media (max-width: 280px) {
    flex-direction: column;
    padding-bottom: 2px;
  }

  @media (max-width: 850px) {
    padding-bottom: 2px;
  }
`;

export const Address = styled(Typography)`
  font-size: 10px;
  font-weight: 600;
  color: #585757;
  margin-right: 4px;

  @media (max-width: 690px) {
    font-size: 8px;
  }
`;
export const Contact = styled(Typography)`
  font-size: 10px;
  font-weight: 600;
  color: #585757;

  @media (max-width: 62p0x) {
    font-size: 8px;
  }
`;
