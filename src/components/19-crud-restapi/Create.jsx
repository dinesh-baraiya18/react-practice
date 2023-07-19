import { Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

const base_url = "https://64abdaef9edb4181202ead89.mockapi.io/add/";

const Create = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, phone } = formData;
    if (name && phone) {
      await postData();
      setFormData({
        name: "",
        phone: "",
      });
    } else {
      alert("Please fill in all fields.");
    }
  };

  const postData = async () => {
    try {
      const res = await fetch(`${base_url}students`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        alert("Data successfully saved.");
      } else {
        console.log("Error occurred while saving data.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Section>
      <Container>
        <div>
          <Typography variant="h5" mb={2}>
            Create a data
          </Typography>
        </div>
        <form onSubmit={handleSubmit}>
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
              Submit
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

export default Create;

const Section = styled.section`
  padding: 50px 0;
`;
