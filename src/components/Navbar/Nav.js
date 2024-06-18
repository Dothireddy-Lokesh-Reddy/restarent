import "./Nav.css";
import React, { Component } from "react";
import { myContext } from "../../App";
import { Link } from "react-router-dom";
export default class Nav extends Component {
    render() {
        return (
            <myContext.Consumer>
                {(value) => {
                    return (
                        <div className="bg-nav">
                            <nav className="nav-container">
                                <h1>Delish Dishes</h1>
                                <ul className="nav-items-list">
                                    <li>
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/login">Products</Link>
                                    </li>
                                    <li>
                                        <Link to="/"> Cart</Link>
                                    </li>
                                    <li>
                                        <Link to="/contact">Contact Us</Link>
                                    </li>
                                    <li>
                                        <button className="logout-btn">
                                            Log Out
                                        </button>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    );
                }}
            </myContext.Consumer>
        );
    }
}
