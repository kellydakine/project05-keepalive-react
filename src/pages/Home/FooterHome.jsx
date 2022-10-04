import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ContainerCounter, CounterNumber, Footer, LogoutButton, NavButton, Navigation, TextAlert } from "./FooterHomeStyle";

const FooterHome = () => {
  const [counter, setCounter] = useState(60);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((counter) => counter - 1);
      if (counter === 0) {
        navigate("/");
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [counter]);

  return (
    <Footer>
      <TextAlert>
        <p>
          Essa janela do navegador é usada para manter sua sessão de
          autenticação ativa. Deixe-a aberto em segundo plano e abra uma nova
          janela para continuar a navegar.
        </p>
        <hr />
      </TextAlert>
      <ContainerCounter>
        <p>Application <br/> refresh in</p>
        <CounterNumber>
          <h3>{counter}</h3>
          <p>seconds</p>
        </CounterNumber>
      </ContainerCounter>
      <Navigation>
        <NavButton href="https://www.google.com.br/">Continuar Navegando</NavButton>
        <LogoutButton href="http://localhost:3000/">Logout</LogoutButton>
      </Navigation>
    </Footer>
  );
};

export default FooterHome;
