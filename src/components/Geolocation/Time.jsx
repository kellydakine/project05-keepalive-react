import React, { useState, useEffect } from "react";
import { ContainerTime } from "./TimeStyle.js";

const SetTimer = () => {
  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 30000);
  }, []);
  return (
    <ContainerTime>
      <p>
        {dateState.toLocaleString("pt-BR", {
          hour: "numeric",
          minute: "numeric",
          // hour12: true,
        })}
      </p>
      <span>
        {" "}
        {dateState.toLocaleDateString("pt-BR", {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </span>
    </ContainerTime>
  );
};

export default SetTimer;
