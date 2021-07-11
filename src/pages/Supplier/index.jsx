import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

import api from "../../services/api";

import Filter from "../../components/Filter";
import { ReactComponent as AddIcon } from "../../assets/svg/add.svg";
import { ReactComponent as EditIcon } from "../../assets/svg/edit.svg";
import { ReactComponent as DeleteIcon } from "../../assets/svg/delete.svg";

import { Container } from "../../styles/pages";
import { TableStandard } from "../../styles/components/TableStandard";
import { ButtonStandard } from "../../styles/components/ButtonStandard";

const Supplier = () => {
  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    api
      .get("")
      .then((response) => {
        console.log(response.data.suppliers);
        response.status === 200
          ? setSuppliers(response.data.suppliers)
          : toast.error("Falha ao listar fornecedores.");
      })
      .catch((error) =>
        toast.error("Falha ao listar fornecedores. Error: " + error)
      );
  }, []);

  return (
    <>
      <Container>
        <section className="management">
          <h1 className="title">Fornecedores</h1>
          <Filter />
          <div className="text-end">
            <ButtonStandard
              type="button"
              className="success"
              title="Incluir novo"
            >
              Incluir Novo <AddIcon className="icon" />
            </ButtonStandard>
          </div>
          <TableStandard>
            <thead>
              <tr>
                <th>Nome</th>
                <th>CNPJ</th>
                <th>Contato</th>
                <th>País</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {suppliers.map((supplier) => (
                <tr key={supplier._id}>
                  <td>{supplier.name}</td>
                  <td>{supplier.cnpj}</td>
                  <td>{supplier.phone}</td>
                  <td>{supplier.address.country}</td>
                  <td>
                    <EditIcon className="icon icon-hover" title="Editar" /> 
                    <DeleteIcon className="icon icon-hover" title="Deletar" />
                  </td>
                </tr>
              ))}
            </tbody>
          </TableStandard>
        </section>
      </Container>
    </>
  );
};

export default Supplier;
