import { Container } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button } from "@mui/material";
import { Table } from "react-bootstrap";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

const base_url = "https://64abdaef9edb4181202ead89.mockapi.io/add/";

const CrudMain = () => {
  const [getApiData, setGetApiData] = useState([]);

  const getData = async () => {
    const res = await fetch(`${base_url}students`);
    const data = await res.json();
    setGetApiData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  // delete
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Confirm delete");
    if (confirmDelete) {
      try {
        const res = await fetch(`${base_url}/students/${id}`, {
          method: "DELETE",
        });
        if (res.ok) {
          console.log("Deleted");
        } else {
          console.log("Something went wrong");
        }
        getData();
      } catch (error) {
        console.error("Error:", error);
      }
    } else {
      console.log("Delete cancelled");
    }
  };

  return (
    <Section>
      <Container>
        <div className="d-flex gap-3 mb-5">
          <Button variant="contained">
            <Link to={"/create"}>create</Link>
          </Button>
          {/* <Button variant="contained">
            <Link to={"/edit"}>edit</Link>
          </Button> */}
        </div>
        <Table striped bordered>
          <thead>
            <tr>
              <th>name</th>
              <th>phone</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {getApiData?.map(({ id, name, phone }, i) => {
              return (
                <tr key={i}>
                  <td>{name}</td>
                  <td>{phone}</td>
                  <td>
                    <div className="d-flex gap-4">
                      <Link to={`/edit/${id}`}>
                        <Button variant="outlined">
                          <AiFillEdit />
                        </Button>
                      </Link>
                      <Button
                        variant="outlined"
                        onClick={() => handleDelete(id)}
                      >
                        <AiFillDelete />
                      </Button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </Section>
  );
};

export default CrudMain;

const Section = styled.section`
  padding: 50px 0;
`;
