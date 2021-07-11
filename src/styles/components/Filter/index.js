import styled from "styled-components";
import { darkGrey, lightGrey, primary } from "../../../UI/colors";

export const FilterDiv = styled.div`
  width: 100%;
  padding: 1rem;
  margin: 0.5rem 0;
  box-sizing: border-box;

  border: 1px solid ${lightGrey};
  border-radius: 5px;

  .filter__header {
    padding: 0.5rem 0;
    hr {
      opacity: 0.5;
    }
  }

  .filter__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    .content__inputs {
      display: flex;
      align-items: center;
    }

    .input__group {
      margin: 0 0.5rem;
    }
  }

  .filter__input {
    padding: 0.5rem;
    margin: 1rem 0;
    border: 1px solid ${darkGrey};
    border-radius: 6px;
    box-sizing: border-box;

    &:focus {
      outline: 0;
      box-shadow: 0 0 1px 1px ${primary};
    }
  }
`;
