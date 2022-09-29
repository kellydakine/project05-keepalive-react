import React from "react";
import { SectionLogin, Form, BackgroundLogin, ImgLogo } from "./LoginStyle";
import FormInput from "../../components/FormInput/FormInput";
import Button from "../../components/Button/Button";
import Logo from "../../assets/logo-compass.png";

const Login = () => {
  return (
    <SectionLogin>
      <Form>
        <h1>Olá,</h1>
        <p>Para continuar navegando de forma segura, efetue o login na rede.</p>
        <h2>Login</h2>
        <FormInput placeholder="Usuário" />
        <FormInput placeholder="Senha" />
        <Button>Continuar</Button>
      </Form>
      <BackgroundLogin>
        <ImgLogo src={Logo} alt="Compass Logo"></ImgLogo>
      </BackgroundLogin>
    </SectionLogin>
  );
};

export default Login;
