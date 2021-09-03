import React, { Component } from "react";
import WeatherComp from "./components/WeatherComp";
import "./App.css";
import Searchbar from "./components/Searchbar";

export default class App extends Component {
    state = { weatherData: undefined };

    async componentDidMount() {
        const weatherData = await this.getWeather();
        this.setState({
            weatherData: weatherData,
        });
        console.log(weatherData);
    }

    getWeather = async () => {
        const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
        const city = "Gothenburg";

        try {
            const API_CALL = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
            );
            const response = await API_CALL.json();
            if (response.cod === 200) {
                return response;
            } else {
                alert(`${response.cod} : ${response.message}`);
            }
        } catch (e) {
            console.log(e);
        }
    };

    render() {
        return (
            <div className="app">
                <div className="main">
                    <div className="container">
                        <div className="search-box">
                            <input
                                type="text"
                                className="searchbar"
                                placeholder="Search for a city"
                            />
                        </div>
                        <div className="weather">
                            {this.state.weatherData !== undefined && (
                                <WeatherComp data={this.state.weatherData} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
