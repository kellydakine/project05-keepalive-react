import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { MdLockOutline } from "react-icons/md";
import { ContainerInput, Icon } from "./FormInputStyle";

const FormInput = ({placeholder}) => {
  return (
    <ContainerInput>
      <input placeholder={placeholder}/>
      <Icon>
        <AiOutlineUser size={20}/>
      </Icon>
    </ContainerInput>
  );
};

export default FormInput;
