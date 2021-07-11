import styled from "styled-components";

export const ButtonStandard = styled.button`
  min-width: 150px;
  margin: 1rem 0;
  color: #fff;
  background-color: #ccc;
  border-radius: 6px;
  border: 0;
  padding: 0.5rem;
  font-weight: bold;
  font-size: 1rem;
  line-height: 1;
  outline: 0;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover,
  &:focus {
    opacity: 0.8;
    transform: scale(1.02);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.3;
    &:hover {
      transform: none;
    }
  }

  @media (max-width: 320px) {
    width: 100%;
  }
`;
