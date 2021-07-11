import styled from "styled-components";
import { primary, lightGrey, grey } from "../../../UI/colors";

export const TableStandard = styled.table`
  width: 100%;
  margin: 0.5rem 0;
  text-align: center;

  thead th {
    font-weight: 600;
    color: #eee;
    background-color: ${primary};
    text-transform: uppercase;
  }

  thead th,
  tbody td {
    padding: 0.5rem;
    border: 1px solid ${lightGrey};
  }

  tr {
    transition: 0.5s;
    &:hover,
    &:focus {
      background-color: ${grey};
    }
  }

  @media only screen and (max-width: 768px),
    (min-device-width: 768px) and (max-device-width: 768px) {
    table,
    thead,
    tbody,
    th,
    td,
    tr {
      display: block;
    }

    thead tr {
      position: absolute;
      top: -9999px;
      left: -9999px;
    }

    tr {
      border: 1px solid ${grey};
      margin-bottom: 1.5rem;
      &:hover,
      &:focus {
        background-color: none;
      }
    }

    tr:nth-child(odd) {
      background: ${lightGrey};
    }

    tbody td {
      border: none;
      position: relative;
    }

    td:before {
      position: absolute;
      top: 1;
      left: 6px;
      padding-right: 10px;
      white-space: nowrap;
    }

    td:nth-of-type(1):before {
      content: "Nome";
    }
    td:nth-of-type(2):before {
      content: "CNPJ";
    }
    td:nth-of-type(3):before {
      content: "Contato";
    }
    td:nth-of-type(4):before {
      content: "País";
    }
    td:nth-of-type(5):before {
      content: "Ações";
    }
  }
`;
