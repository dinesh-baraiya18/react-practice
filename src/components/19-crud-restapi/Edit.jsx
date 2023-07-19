import { Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";

const base_url = "https://64abdaef9edb4181202ead89.mockapi.io/add/";

const Edit = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    const getEdit = async (id) => {
      const res = await fetch(`${base_url}/students/${id}`);
      const data = await res.json();
      setFormData(data);
    };
    getEdit(id);
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${base_url}/students/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Data updated");
      } else {
        console.log("Something went wrong");
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <Section>
      <Container>
        <div>
          <Typography variant="h5" mb={2}>
            edit a data
          </Typography>
        </div>
        <form method="PUT" onSubmit={handleUpdate}>
          <div className="mb-3">
            <input
              type="text"
              name="name"
              className="form-control"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <input
              type="number"
              name="phone"
              className="form-control"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>
          <div className="d-flex gap-2 mt-4">
            <Button variant="contained" color="success" type="submit">
              Update
            </Button>
            <Button variant="contained" color="secondary">
              <Link to="/">go to details</Link>
            </Button>
          </div>
        </form>
      </Container>
    </Section>
  );
};

export default Edit;

const Section = styled.section`
  padding: 50px 0;
`;
