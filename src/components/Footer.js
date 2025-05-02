import React from "react";
import '../App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div className="">
            <footer
                className="text-center text-lg-start text-dark"
                style={{ backgroundColor: "#ECEFF1" }}
            >
                <section
                    className="d-flex justify-content-between p-4 text-white"
                    style={{ backgroundColor: "#4ec1b2d3" }}
                >
                    <div className="me-5">
                        <span>Get connected with us on social networks:</span>
                    </div>

                    <div>
                        <a href="#" className="text-white me-4">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className="text-white me-4">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className="text-white me-4">
                            <i className="fab fa-google"></i>
                        </a>
                        <a href="#" className="text-white me-4">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="#" className="text-white me-4">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="#" className="text-white me-4">
                            <i className="fab fa-github"></i>
                        </a>
                    </div>
                </section>

                <section>
                    <div className="container text-center text-md-start mt-5">
                        <div className="row mt-3">
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold turq">EduQube</h6>
                                <hr
                                    className="mb-4 mt-0 d-inline-block mx-auto"
                                    style={{
                                        width: "60px",
                                        backgroundColor: "#7c4dff",
                                        height: "2px",
                                    }}
                                />
                                <p>
                                Where Data Meets Digital Brilliance.
                                Strategic content creation, next-level analytics, and communication solutions that turn brands into market leaders.
                                </p>
                            </div>

                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold turq">Navigation</h6>
                                <hr
                                    className="mb-4 mt-0 d-inline-block mx-auto"
                                    style={{
                                        width: "60px",
                                        backgroundColor: "#7c4dff",
                                        height: "2px",
                                    }}
                                />
                                <p><Link to="/" className="text-dark">Home</Link></p>
                                <p><Link to="/Offerings" className="text-dark">Our Offerings</Link></p>
                                <p><Link to="/About" className="text-dark">About Us</Link></p>
                                <p><Link to="/Contact" className="text-dark">Contact Us</Link></p>
                            </div>

                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold ">Useful links</h6>
                                <hr
                                    className="mb-4 mt-0 d-inline-block mx-auto"
                                    style={{
                                        width: "60px",
                                        backgroundColor: "#7c4dff",
                                        height: "2px",
                                    }}
                                />
                                <p><a href="#!" className="text-dark">Your Account</a></p>
                                <p><a href="#!" className="text-dark">Podcast</a></p>
                                <p><a href="#!" className="text-dark">Log In</a></p>
                                <p><a href="#!" className="text-dark">Sign Up</a></p>
                            </div>

                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <h6 className="text-uppercase fw-bold">Contact</h6>
                                <hr
                                    className="mb-4 mt-0 d-inline-block mx-auto"
                                    style={{
                                        width: "60px",
                                        backgroundColor: "#7c4dff",
                                        height: "2px",
                                    }}
                                />
                                <p><i className="fas fa-home me-3"></i> 6 Sturdee Avenue, Rosebank, Johannesburg, 2196, South Africa</p>
                                <p><i className="fas fa-envelope me-3"></i> info@example.com</p>
                                <p><i className="fas fa-phone me-3"></i> +27 11 912 1000</p>
                            </div>
                        </div>
                    </div>
                </section>

                <div
                    className="text-center p-3 "
                    style={{ backgroundColor: "rgba(114, 114, 114, 0.2)" }}
                >
                    © {new Date().getFullYear()} Copyright:
                    <a className="text-dark " href="https://eduqube.com/"> eduqube.co.za</a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;