import "./Login.css";
import React, { Component } from "react";
import { myContext } from "../../App";
// import { Link } from "react-router-dom";
import { MdLightMode } from "react-icons/md";
import { FaGoogle } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
import { BsLinkedin } from "react-icons/bs";
import { SiGithub } from "react-icons/si";

export default class Login extends Component {
    render() {
        return (
            <myContext.Consumer>
                {(values) => {
                    const { isdarkMode, changeMode } = values;
                    return (
                        <div
                            className={`login-container ${
                                isdarkMode ? "dark-bg" : ""
                            }`}
                        >
                            <div className="light-section">
                                <MdLightMode
                                    onClick={() => changeMode()}
                                    className={`light-icon ${
                                        isdarkMode ? "dark-heading" : ""
                                    }`}
                                />
                            </div>
                            <h1
                                className={`login-heading ${
                                    isdarkMode ? "dark-heading" : ""
                                }`}
                            >
                                Login Form
                            </h1>
                            <div className={`inner-login-container ${ isdarkMode ? 'border-white':''}`}>
                                <div className="img-section">
                                    <img
                                        src="/images/redtom.jpg"
                                        alt=""
                                        className="login-img"
                                    />
                                </div>
                                <form
                                    className={`form-details ${
                                        isdarkMode ? "dark-bg" : ""
                                    }`}
                                >
                                    <h1
                                        className={`main-logo-heading-login-pg ${
                                            isdarkMode ? "dark-heading" : ""
                                        }`}
                                    >
                                        Delish Dishes
                                    </h1>
                                    <img
                                        src="/images/fooddelicious.png"
                                        alt=""
                                        class="del-food"
                                    />
                                    <div className="input-fields">
                                        <label
                                            htmlFor="name"
                                            className={`${
                                                isdarkMode ? "text-white" : ""
                                            }`}
                                        >
                                            User Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            placeholder="Enter your name..."
											className={`
												${
													isdarkMode? "input-bg-black text-white":""
												}`}
                                        />
                                    </div>
                                    <div className="input-fields">
                                        <label
                                            htmlFor="name"
                                            className={`${
                                                isdarkMode ? "text-white" : ""
                                            }`}
                                        >
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            id="name"
                                            placeholder="Enter Password..."
											className={`
												${
													isdarkMode? "input-bg-black text-white":""
												}`}
                                        />
                                    </div>
                                    <div className="input-fields">
                                        <button
                                            className="login-btn"
                                            onClick={(e) => e.preventDefault()}
                                        >
                                            Login
                                        </button>
                                    </div>
                                    <div className={`web-links ${
                                            isdarkMode ? "dark-heading" : ""
                                        }`}>
                                        <FaGoogle className="web-icon" />
                                        <ImFacebook2 className="web-icon" />
                                        <BsLinkedin className="web-icon" />
                                        <SiGithub className="web-icon" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    );
                }}
            </myContext.Consumer>
        );
    }
}
