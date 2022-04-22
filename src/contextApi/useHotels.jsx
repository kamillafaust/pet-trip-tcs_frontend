import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/api";

export const HotelContext = createContext({});

export function HotelContextProvider({ children }) {
  const [hoteis, setHoteis] = useState([]);
  const [city, setCity] = useState({
    label: "Florianópolis",
    id: 1,
  });
  const [citiesOptions, setCitiesOptions] = useState([]);
  console.log(city, "city");

  const handleSearch = async (data) => {
    let paramsOptions = {};

    if (data) {
      paramsOptions = {
        params: {
          "filters.type": data.type,
          "filters.gender": data.gender,
          "filters.castrated": data.castrated,
          "filters.weight": data.weight,
        },
      };
    }
    paramsOptions = {
      params: {
        ...paramsOptions.params,
        "address.city.id": city.id,
      },
    };

    try {
      const response = await api.get("/hoteis", paramsOptions);
      setHoteis(response.data);
    } catch (error) {
      console.log("deu erro");
    }
  };

  useEffect(() => {
    handleSearch();
  }, [city]);

  const handleSearchCities = async () => {
    try {
      const response = await api.get("/cities");
      const citiesFormated = response.data.map((city) => {
        return {
          label: city.city,
          id: city.id,
        };
      });
      setCitiesOptions(citiesFormated);
    } catch (error) {
      console.log("deu erro");
    }
  };

  return (
    <HotelContext.Provider
      value={{
        city,
        setCity,
        hoteis,
        handleSearch,
        citiesOptions,
        handleSearchCities,
      }}
    >
      {children}
    </HotelContext.Provider>
  );
}

export const useHotels = () => {
  return useContext(HotelContext);
};
