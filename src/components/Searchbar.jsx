import React, { Component } from "react";
import "../App.css";

class Searchbar extends Component {
    state = { value: "" };

    handleChange = (e) => {
        this.setState({ value: e.target.value });
        console.log(e);
    };

    handleSubmit = (e) => {
        this.props.parentCallBack(this.state.value);
    };

    render() {
        return (
            <div className="form-box">
                <form onSubmit={this.handleSubmit} className="searchbar">
                    <input
                        type="text"
                        value={this.state.value}
                        onChange={this.handleChange}
                        placeholder="Search for a city"
                    />
                </form>
            </div>
        );
    }
}

export default Searchbar;
