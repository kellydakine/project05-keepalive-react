import React from "react";
import { BallImage, Descriptions, Section } from "./SectionHomeStyle";
// import BallCompass from "../../assets/ball-compass.svg";
import teste from "../../assets/teste.png"

const SectionHome = () => {
  return (
    <Section>
      <BallImage src={teste} alt="" />
      <Descriptions>
        <h3>Our mission is</h3>
        <p>Nossa missão é</p>
        <h2>to transform the world</h2>
        <p>transformar o mundo</p>
        <h2>building digital experiences</h2>
        <p>construindo experiências digitais</p>
        <h2>that enable our client's growth</h2>
        <p>que permitem o crescimento dos nossos clientes</p>
      </Descriptions>
    </Section>
  );
};

export default SectionHome;
