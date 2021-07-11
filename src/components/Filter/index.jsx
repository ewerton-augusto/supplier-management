import React from "react";
import { FilterDiv } from "../../styles/components/Filter";
import { ReactComponent as SearchIcon } from "../../assets/svg/search.svg";
import { ButtonStandard } from "../../styles/components/ButtonStandard";

const Filter = () => {
  return (
    <>
      <FilterDiv>
        <div className="filter__header">
          <h2>Filtros</h2>
          <hr />
        </div>
        <div className="filter__content">
          <div className="content__inputs">
            <div>
              <label htmlFor="search">Pesquisar: </label>
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Digite sua busca"
                className="filter__input"
              />
            </div>
            <div className="input__group">
              <input type="checkbox" id="status" name="status" />
              <label htmlFor="status"> Ativos </label>
            </div>
          </div>
          <ButtonStandard>
            Pesquisar
            {" "}
            <SearchIcon className="icon" />
          </ButtonStandard>
        </div>
      </FilterDiv>
    </>
  );
};

export default Filter;
