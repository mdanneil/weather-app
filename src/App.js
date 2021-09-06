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
    }

    getWeather = async (city) => {
        const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
        const CITY = city;

        try {
            const API_CALL = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`
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

    updateWeather = async (CITY) => {
        const weatherData = await this.getWeather(CITY);
        this.setState({ weatherData: weatherData });
    };

    render() {
        return (
            <div className="app">
                <div className="main">
                    <div className="container">
                        <div className="search-box">
                            <Searchbar
                                className="searchbar"
                                parentCallBack={this.updateWeather}
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
