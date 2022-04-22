import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHotels } from "../../contextApi/useHotels";

import {
  ContainerSideBar,
  TextFilter,
  TextSize,
  BoxLine,
  AnimalType,
  AnimalSize,
  BoxButton,
  TextButton,
  ButtonSearch,
} from "./styles";

import {
  filterType,
  filterWeight,
  filterGender,
  filterCastrated,
} from "../../controlButtons/controlButtons";

const SideBar = () => {
  const { register, handleSubmit } = useForm();
  const { handleSearch } = useHotels();

  const [checkedButtonType, setCheckedButton] = useState(filterType);
  const [checkedButtonWeight, setCheckedButtonWeight] = useState(filterWeight);
  const [checkedButtonGender, setButtonGender] = useState(filterGender);
  const [checkedButtonCastrated, setButtonCastrated] =
    useState(filterCastrated);

  function controlButtonType(type) {
    setCheckedButton({
      ...filterType,
      [type]: true,
    });
  }

  function controlButtonWeight(weight) {
    setCheckedButtonWeight({
      ...filterWeight,
      [weight]: true,
    });
  }

  function controlButtonGender(gender) {
    setButtonGender({
      ...filterGender,
      [gender]: true,
    });
  }

  function controlButtonCastrated(castrated) {
    setButtonCastrated({
      ...filterCastrated,
      [castrated]: true,
    });
  }

  return (
    <ContainerSideBar>
      <TextFilter>Filtros de busca:</TextFilter>
      <BoxLine />
      <TextFilter>Qual o tipo do seu pet?</TextFilter>

      <form onSubmit={handleSubmit(handleSearch)}>
        <AnimalType>
          <label htmlFor="cat">
            <input
              onClick={() => controlButtonType("cat")}
              type="radio"
              {...register("type")}
              value="cat"
              id="cat"
            />
            <BoxButton checked={checkedButtonType.cat}>
              <TextButton>Gato</TextButton>
            </BoxButton>
          </label>

          <label htmlFor="dog">
            <input
              onClick={() => controlButtonType("dog")}
              type="radio"
              {...register("type")}
              value="dog"
              id="dog"
            />
            <BoxButton checked={checkedButtonType.dog}>
              <TextButton>Cachorro</TextButton>
            </BoxButton>
          </label>
        </AnimalType>

        <BoxLine />

        <TextSize>Seu pet encaixa em qual porte?</TextSize>
        <AnimalSize>
          <label htmlFor="5kg">
            <input
              onClick={() => controlButtonWeight("five")}
              type="radio"
              {...register("weight")}
              value="5kg"
              id="5kg"
            />
            <BoxButton checked={checkedButtonWeight.five}>
              <TextButton>Até 5kg</TextButton>
            </BoxButton>
          </label>

          <label htmlFor="10kg">
            <input
              onClick={() => controlButtonWeight("ten")}
              type="radio"
              {...register("weight")}
              value="10kg"
              id="10kg"
            />
            <BoxButton checked={checkedButtonWeight.ten}>
              <TextButton>até 10KG</TextButton>
            </BoxButton>
          </label>

          <label htmlFor="15kg">
            <input
              onClick={() => controlButtonWeight("fifteen")}
              type="radio"
              {...register("weight")}
              value="15kg"
              id="15kg"
            />
            <BoxButton checked={checkedButtonWeight.fifteen}>
              <TextButton>até 15kg</TextButton>
            </BoxButton>
          </label>

          <label htmlFor="20kg">
            <input
              onClick={() => controlButtonWeight("twenty")}
              type="radio"
              {...register("weight")}
              value="20kg"
              id="20kg"
            />
            <BoxButton checked={checkedButtonWeight.twenty}>
              <TextButton>20kg ou +</TextButton>
            </BoxButton>
          </label>
        </AnimalSize>

        <BoxLine />

        <TextFilter>Qual o sexo do seu pet?</TextFilter>
        <AnimalType>
          <label htmlFor="male">
            <input
              onClick={() => controlButtonGender("male")}
              type="radio"
              {...register("gender")}
              value="male"
              id="male"
            />
            <BoxButton checked={checkedButtonGender.male}>
              <TextButton>Macho</TextButton>
            </BoxButton>
          </label>

          <label htmlFor="female">
            <input
              onClick={() => controlButtonGender("female")}
              type="radio"
              {...register("gender")}
              value="female"
              id="female"
            />
            <BoxButton checked={checkedButtonGender.female}>
              <TextButton>Fêmea</TextButton>
            </BoxButton>
          </label>
        </AnimalType>
        <BoxLine />
        <TextFilter>Seu pet é castrado?</TextFilter>
        <AnimalType>
          <label htmlFor="castrated">
            <input
              onClick={() => controlButtonCastrated("castrated")}
              type="radio"
              {...register("castrated")}
              value="castrated"
              id="castrated"
            />
            <BoxButton checked={checkedButtonCastrated.castrated}>
              <TextButton>Sim</TextButton>
            </BoxButton>
          </label>

          <label htmlFor="uncastrated">
            <input
              onClick={() => controlButtonCastrated("uncastrated")}
              type="radio"
              {...register("castrated")}
              value="uncastrated"
              id="uncastrated"
            />
            <BoxButton checked={checkedButtonCastrated.uncastrated}>
              <TextButton>Não</TextButton>
            </BoxButton>
          </label>
        </AnimalType>
        <ButtonSearch type="submit">Filtrar</ButtonSearch>
      </form>
    </ContainerSideBar>
  );
};

export default SideBar;
