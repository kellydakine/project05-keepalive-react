import React, { useState } from "react";
import { SectionLogin, Form, BackgroundLogin, ImgLogo } from "./LoginStyle";
import FormInput from "../../components/FormInput/FormInput";
import Button from "../../components/Button/Button";
import Logo from "../../assets/logo-compass.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [error, setError] = useState();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function validate(data, type) {
    const types = {
      email:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
    };
    return types[type].test(data);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (validate(username, "email") && validate(password, "password")) {
      navigate("/home");
    }
    setError("Ops, usuário ou senha inválidos. Tente novamente!");
  }

  return (
    <SectionLogin>
      <Form onSubmit={handleSubmit}>
        <h1>Olá,</h1>
        <p>Para continuar navegando de forma segura, efetue o login na rede.</p>
        <h2>Login</h2>
        <FormInput
          placeholder="Usuário"
          style={
            !error
              ? { border: "1px solid #FFFFFF" }
              : { border: "1px solid #E9B425" }
          }
          name="username"
          type="name"
          onChange={({ target }) => setUsername(target.value)}
        />
        <FormInput
          placeholder="Senha"
          style={
            !error
              ? { border: "1px solid #FFFFFF" }
              : { border: "1px solid #E9B425" }
          }
          name="password"
          type="password"
          onChange={({ target }) => setPassword(target.value)}
        />
        <Button>Continuar</Button>
        {error && <span>{error}</span>}
      </Form>
      <BackgroundLogin>
        <ImgLogo src={Logo} alt="Compass Logo"></ImgLogo>
      </BackgroundLogin>
    </SectionLogin>
  );
};

export default Login;
