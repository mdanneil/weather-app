import React, { Component } from "react";

export default class App extends Component {
    state = { weatherData: undefined };

    componentDidMount() {
        console.log("Mounted");
    }

    getWeather = async () => {
        console.log("getWeather runs");
    };

    render() {
        this.getWeather();
        return <>Weatherapp</>;
    }
}
