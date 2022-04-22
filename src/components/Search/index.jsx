import React, { useEffect, useState } from "react";
import { ButtonSearch, BoxForm, InputAutocomplete, BoxSearch } from "./styles";
import { TextField } from "@mui/material";
import { useHotels } from "../../contextApi/useHotels";

const Search = () => {
  const { setCity, handleSearchCities, citiesOptions } = useHotels();

  const [cidadeSelecionada, setCidadeSelecionada] = useState({
    label: "Florianópolis",
    id: 1,
  });

  function handleSubmit() {
    setCity(cidadeSelecionada);
  }

  useEffect(() => {
    handleSearchCities();
  }, []);

  return (
    <BoxForm>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit();
        }}
      >
        <BoxSearch>
          <InputAutocomplete
            disablePortal
            id="combo-box-demo"
            options={citiesOptions}
            onChange={(event, newValue) => {
              setCidadeSelecionada(newValue);
            }}
            defaultValue={cidadeSelecionada}
            style={{ fontSize: 10 }}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="Para onde você está indo?"
                color="warning"
                variant="standard"
              />
            )}
          />
          <ButtonSearch type="submit">Pesquisar</ButtonSearch>
        </BoxSearch>
      </form>
    </BoxForm>
  );
};

export default Search;
