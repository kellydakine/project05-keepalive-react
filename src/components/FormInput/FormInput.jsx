import React, { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { MdLockOutline } from "react-icons/md";
import { ContainerInput, Icon } from "./FormInputStyle";

const FormInput = ({ placeholder, name, type, onChange, style }) => {
  const [clicked, setClicked] = useState(false);
  return (
    <ContainerInput>
      <input
        placeholder={placeholder}
        style={style}
        name={name}
        type={type}
        onChange={onChange}
        onBlur={(event) =>
          event.target.value.length > 0 ? setClicked(true) : setClicked(false)
        }
        onFocus={() => setClicked(true)}
      />
      <Icon clicked={clicked}>
        {type === "name" ? (
          <AiOutlineUser size={20} />
        ) : (
          <MdLockOutline size={20} />
        )}
      </Icon>
    </ContainerInput>
  );
};

export default FormInput;
