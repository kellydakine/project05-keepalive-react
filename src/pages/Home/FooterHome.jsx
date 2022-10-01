import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Footer, TextAlert } from "./FooterHomeStyle";

const FooterHome = () => {
  const [counter, setCounter] = useState(6000);
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
      <div>
        <p>Application refresh in</p>
        <div>
          <h3>60</h3>
          <p>seconds</p>
        </div>
      </div>
      <div>
        <a href="https://www.google.com.br/">Continuar Navegando</a>
        <a href="http://localhost:3000/">Logout</a>
      </div>
    </Footer>
  );
};

export default FooterHome;
