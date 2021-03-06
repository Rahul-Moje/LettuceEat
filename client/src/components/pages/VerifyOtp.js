// Author : Pavan Abburi
//This component is used to take otp input from user and verify in the process of resetting password
import React from "react";
import { Form, Button, Row, Col, Container, Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ErrorMessage } from "@hookform/error-message";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API } from "../../API";
import Wrapper from "../styles/usermanagementstyles";

const headers = {
  "Content-Type": "application/json",
};

const content = {
  inputs: [
    {
      label: "Please enter your email again",
      name: "email",
      type: "text",
    },
    {
      label: "Enter the code received in your email",
      name: "otp",
      type: "text",
    },
  ],
};

const schema = yup.object().shape({
  email: yup.string().required().email(),
  otp: yup.string().required()
});

const VerifyOtp = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const res = await axios.post(`${API}/verifyotp`, data, { headers: headers });
    if (res.data.success === true) {
      localStorage.setItem('otpemail', JSON.stringify(res.data));
      navigate("/resetpassword");
    }else{
      alert("Please enter valid OTP");
    }
  };

  return (
    <Wrapper>
      
      <Container className="Container">
      <h1 style={{ fontSize: "40px" }}>Verify OTP</h1>
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
          <Button type="submit">Submit</Button>
        </form>
      </Container>
    </Wrapper>
  );
};

export default VerifyOtp;
