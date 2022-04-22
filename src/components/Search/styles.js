import { Button, styled, Box, Autocomplete } from "@mui/material";

export const BoxForm = styled(Box)`
  display: flex;
  max-width: 600px;
  width: 90%;
  justify-content: space-between;
  font-family: "Montserrat Alternates", sans-serif;

  @media (max-width: 630px) {
    flex-direction: column;
  }
`;

export const BoxSearch = styled(Box)`
  display: flex;

  @media (max-width: 300px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const InputAutocomplete = styled(Autocomplete)`
  width: 450px;
  padding-left: 30px;

  & input {
    width: 200px;
    font-size: 12px;
    font-weight: 600;
    border-bottom: 0px;
    content: none;
  }

  & svg {
    width: 40px;
    padding: 4px;
    margin-bottom: 5x;
  }

  @media (max-width: 300px) {
    width: 100%;
    padding: 0px 4px;
  }
`;

export const ButtonSearch = styled(Button)`
  background-color: #f47920;
  color: #ffffff;
  font-size: 8px;
  margin-left: 15px;

  @media (max-width: 450px) {
    margin-top: 10px;
  }
`;
