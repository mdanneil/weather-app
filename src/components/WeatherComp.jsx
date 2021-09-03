import React, { Component } from "react";

class WeatherComp extends Component {
    state = {};
    render() {
        console.log(this.props.data);
        return (
            <>
                <p>City: {this.props.data.name}</p>
                <p>Temperature: {this.props.data.main.temp}°C</p>
            </>
        );
    }
}

export default WeatherComp;
