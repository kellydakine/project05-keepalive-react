import React from "react";
import { Container, Header } from "./HomeStyle";
import Logo from "../../assets/compass-logo.svg";
import Weather from "../../components/Geolocation/Weather";
import Time from "../../components/Geolocation/Time";
import SectionHome from "./SectionHome";

const Home = () => {
  return (
    <Container>
      <Header>
        <img src={Logo} alt="Compass Logo" />
        <Time />
        <Weather />
      </Header>
      <SectionHome />
    </Container>
  );
};

export default Home;
