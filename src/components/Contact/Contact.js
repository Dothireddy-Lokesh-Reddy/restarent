import React, { Component } from "react";
import Nav from "../Navbar/Nav";
import "./Contact.css";
import Footer from "../Footer/Footer";
export default class Contact extends Component {
	onContactDetailSubmit  = (event)=>
		{
			event.preventDefault()
		}
    render() {
        return (
            <>
                <Nav />
                <div className="contact-section">
                    <div className="contact-img-sec">
					<img
                        src="https://t3.ftcdn.net/jpg/06/99/44/68/360_F_699446849_Ey2Fbed82Bvlou6j7AoeJ5naalij9yX2.jpg"
                        alt=""
						className="contact-women-img"
                    />
					</div>
                    <form className="contact-form" onSubmit={this.onContactDetailSubmit}>
                        <div className="input-fields">
                            <label htmlFor="fname">First Name</label>
                            <input
                                type="text"
                                id="fname"
                                placeholder="Enter Your First Name"
                            />
                        </div>
                        <div className="input-fields">
                            <label htmlFor="lname">Last Name</label>
                            <input
                                type="text"
                                id="lname"
                                placeholder="Enter Your Last Name"
                            />
                        </div>
                        <div className="input-fields">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter Your Email Id"
                            />
                        </div>
                        <div className="input-fields">
                            <label htmlFor="dis">Discription</label>
                            <textarea placeholder="Enter your problem here..."></textarea>
                        </div>
						<button className="logout-btn" style={{marginTop:"10px"}} > Submit</button>
                    </form>
                </div>
					<Footer />
            </>
        );
    }
}
