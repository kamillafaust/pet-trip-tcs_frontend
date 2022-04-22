import React, { useState } from "react";
import { Container } from "@mui/material";
import {
  TextCity,
  CardContainer,
  CardBox,
  BoxImage,
  BoxHotelDescritions,
  BoxInformation,
  Name,
  Description,
  BoxContact,
  Address,
  Contact,
} from "./styles";
import { useHotels } from "../../contextApi/useHotels";
import HotelNotFound from "../HotelNotFound";
import ReactPaginate from "react-paginate";
import "./styles.css";

const CardHotel = () => {
  const { city, hoteis } = useHotels();
  const [pageNumber, setPageNumber] = useState(0);
  const hotelsPage = 3;
  const hotelVisited = pageNumber * hotelsPage;
  const pageCount = Math.ceil(hoteis.length / hotelsPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  if (hoteis.length === 0) {
    return <HotelNotFound />;
  } else {
    const displayHotels = hoteis
      .slice(hotelVisited, hotelVisited + hotelsPage)
      .map((hotel) => {
        return (
          <ul>
            <li key={hotel.id}>
              <CardBox>
                <BoxImage>
                  <img src={hotel.image} alt="Imagem do Hotel" />
                </BoxImage>
                <BoxHotelDescritions>
                  <BoxInformation>
                    <Name>{hotel.name}</Name>
                    <Description>{hotel.description}</Description>
                  </BoxInformation>
                  <BoxContact>
                    <Address>
                      {hotel.address.street}, nº {hotel.address.number}, {""}
                      {hotel.address.district}, {hotel.address.city.city}, {""}
                      {hotel.address.city.state}, CEP {hotel.address.zipCode}
                    </Address>
                    <Contact>
                      {hotel.email} / {hotel.numberPhone}
                    </Contact>
                  </BoxContact>
                </BoxHotelDescritions>
              </CardBox>
            </li>
          </ul>
        );
      });

    return (
      <CardContainer>
        <Container maxWidth="lg">
          <TextCity>
            Hotéis em: <span>{city.label} </span>
          </TextCity>
          {displayHotels}
          <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationButtons"}
            activeClassName={"paginationActive"}
          />
        </Container>
      </CardContainer>
    );
  }
};

export default CardHotel;
