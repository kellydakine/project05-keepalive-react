import React from "react";
import { TiWeatherPartlySunny } from "react-icons/ti";

class Weather extends React.Component {
  REACT_APP_WEATHER_API_KEY = "502d71885acddcadadd5c2ff87683ea1";
  state = {
    lat: undefined,
    lon: undefined,
    city: undefined,
    state: undefined,
    temperatureC: undefined,
    temperatureF: undefined,
    // sunrise: undefined,
    // sunset: undefined,
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
      // sunrise: moment.unix(data.sys.sunrise).format("hh:mm a"),
      // sunset: moment.unix(data.sys.sunset).format("hh:mm a"),
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
        <div>
          <p>{city} - SC</p>
          <div>
            <TiWeatherPartlySunny />
            <h2>{temperatureC}°</h2>
          </div>
        </div>
      );
    } else {
      return <span>Loading...</span>;
    }
  }
}

export default Weather;
