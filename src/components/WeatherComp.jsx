import React, { Component } from "react";

class WeatherComp extends Component {
    state = {};
    render() {
        console.log(this.props.data);
        return (
            <>
                <h1>City: {this.props.data.name}</h1>
                <h1>Temperature: {this.props.data.main.temp}</h1>
            </>
        );
    }
}

export default WeatherComp;
