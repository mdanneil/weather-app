import React, { Component } from "react";
import "../App.css";

class Searchbar extends Component {
    state = { value: "" };

    handleChange = (e) => {
        this.setState({ value: e.target.value });
    };

    handleSubmit = (e) => {
        this.props.parentCallBack(this.state.value);
        e.preventDefault();
    };

    render() {
        return (
            <div className="form-box">
                <form className="searchbar" onSubmit={this.handleSubmit}>
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
