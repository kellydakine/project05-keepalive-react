import React from "react";
import WeatherLogo from "../../assets/weather-logo.svg";
import { ContainerWeather } from "./WeatherStyle";

class Weather extends React.Component {
  state = {
    lat: undefined,
    lon: undefined,
    city: undefined,
    state: undefined,
    temperatureC: undefined,
    temperatureF: undefined,
    errorMessage: undefined,
  };

  getPosition = () => {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };

  getWeather = async (lat, lon) => {
    const api_call = await fetch(
      `//api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
    );
    const data = await api_call.json();
    this.setState({
      lat: lat,
      lon: lon,
      city: data.name,
      state: data.name,
      temperatureC: Math.round(data.main.temp),
      temperatureF: Math.round(data.main.temp * 1.8 + 32),
      icon: data.weather[0].icon,
    });
  };

  componentDidMount() {
    this.getPosition()
      .then((position) => {
        this.getWeather(position.coords.latitude, position.coords.longitude);
      })
      .catch((err) => {
        this.setState({ errorMessage: err.message });
      });

    this.timerID = setInterval(
      () => this.getWeather(this.state.lat, this.state.lon),
      60000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    const { city, temperatureC } = this.state;
    if (city) {
      return (
        <ContainerWeather>
          <p>{city} - SC</p>
          <div>
            <img src={WeatherLogo}  alt="Weather logo"/>
            <h2>{temperatureC}°</h2>
          </div>
        </ContainerWeather>
      );
    } else {
      return <span>Loading...</span>;
    }
  }
}

export default Weather;
