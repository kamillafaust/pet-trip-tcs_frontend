import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/api";

export const HotelContext = createContext({});

export function HotelContextProvider({ children }) {
  const [hotels, setHotels] = useState([]);
  const [filter, setFilter] = useState({});
  const [city, setCity] = useState({
    label: "Florianópolis, SC",
    id: 1,
  });

  const [citiesOptions, setCitiesOptions] = useState([]);

  const handleSearch = async () => {
    let paramsOptions = {};
    paramsOptions = {
      params: {
        type: filter.type,
        gender: filter.gender,
        castrated: filter.castrated,
        weight: filter.weight,
      },
    };

    paramsOptions = {
      params: {
        ...paramsOptions.params,
        cityId: city.id,
      },
    };

    try {
      const response = await api.get("/establishment/", paramsOptions);
      setHotels(response.data.content);
    } catch (error) {
      setHotels([]);
    }
  };

  useEffect(() => {
    handleSearch();
  }, [city, filter]);

  const handleSearchCities = async () => {
    try {
      const response = await api.get("/cities/");
      const citiesFormated = response.data.map((city) => {
        return {
          label: city.cityAndState,
          id: city.id,
        };
      });
      setCitiesOptions(citiesFormated);
    } catch (error) {
      setCitiesOptions([]);
    }
  };

  return (
    <HotelContext.Provider
      value={{
        city,
        setCity,
        hotels,
        handleSearch,
        citiesOptions,
        handleSearchCities,
        setFilter,
      }}
    >
      {children}
    </HotelContext.Provider>
  );
}

export const useHotels = () => {
  return useContext(HotelContext);
};
