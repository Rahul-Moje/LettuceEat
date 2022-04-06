// Author : Pavan Abburi
//This component is used to login in to the application
import React, { useContext } from "react";
import Wrapper from "../styles/usermanagementstyles";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import content from "../static/LoginElements";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ErrorMessage } from "@hookform/error-message";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API } from "../../API";
import { useState } from "react";
import Header from "../Header";
import { UserContext } from "../../App";

const headers = {
  "Content-Type": "application/json",
};

const schema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required(),
});

const Login = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    console.log(data);

    localStorage.clear();
    const res = await axios.post(API + "/login", data, { headers: headers });
    if (res.data.success === true) {
      console.log(res.data);
      localStorage.setItem("user", JSON.stringify(res.data));
      setUser(localStorage.getItem("user"));
      navigate("/menu");
    }
  };

  return (
    <Wrapper>
      <Container className="Container">
        <h1 style={{ fontSize: "40px" }}>Log In</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          {content.inputs.map((input, key) => {
            return (
              <Row key={key}>
                <Col style={{ textAlign: "left" }}>
                  <label>{input.label}</label>
                </Col>
                <Col>
                  <Form.Control
                    name={input.name}
                    type={input.type}
                    {...register(input.name, { required: true })}
                  />
                </Col>
                <p>
                  <ErrorMessage errors={errors} name={input.name} />
                </p>
              </Row>
            );
          })}
          <p>
            Don't have an account? <a href="/signup">SignUp</a>
          </p>
          <p>
            Forgot or Reset password? <a href="/sendmail">Reset here</a>
          </p>
          <Button type="submit">Submit</Button>
        </form>
      </Container>
    </Wrapper>
  );
};

export default Login;
