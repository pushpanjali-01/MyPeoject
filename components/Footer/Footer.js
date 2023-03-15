import React from "react";
import "./index.css"
import { Col, Container, Row } from "react-bootstrap";
import logo from "../../asserts/images/logo.svg"
import insta from "../../asserts/images/insta.png"
import ln from "../../asserts/images/in.png"
import youtube from "../../asserts/images/youtube.png"
import { Link } from "react-router-dom";
const footer = () => {
    return (
        <footer className="footer">
            <div className="logo_img">
                <img src={logo} alt="" />
            </div>
            <section className="footer_desc">
                <Container>
                    <Row>
                    
                        <Col md={6} className="first_row" >
                        <Col md={6} className="col1">
                            <div className="footer_title">
                                <p>RANCHI (Headquarter)</p>
                            </div>
                            <div className="footer_sub_title">
                                <p>3rd floor Hariom Tower, Lalpur, Ranchi, Jharkhand-830001</p>
                            </div>
                            <div className="footer_title">
                                <p>contactus@grozep.com</p>
                            </div>
                            <div>
                                <div className="footer_title">
                                    <p>FOLLOW US</p>
                                </div>
                                <div className="socilaMedia">
                                    <img src={insta} alt="" />
                                    <img src={ln} alt="" />
                                    <img src={youtube} alt="" />
                                </div>
                            </div>
                        </Col>
                
                        <Col md={6}>
                            <div className="footer_title">
                                <p>GARHWA</p>
                            </div>
                            <div className="footer_sub_title">
                                <p>Sukbana, Near Railway Crossing, Garhwa, Jharkhand - 822114</p>
                            </div>
                            <div className="footer_title">
                                <p>+91 8448444943</p>
                            </div>
                        </Col>
                        </Col>
                        <Col md={6} className="second_row">
                        <Col md={5}>
                            <div className="footer_sub_title_areas">
                                <p>COMPANY</p>
                            </div>
                            <div className="footer_list_menu">
                                <ul>
                                    <li>
                                        <Link to="about">About Us</Link>
                                    </li>
                                    <li>
                                        <Link to="/careers">Careers</Link>
                                    </li>
                                    <li>
                                        <Link to="/privacyandpolicy">Privacy Policies</Link>
                                    </li>
                                    <li>
                                        <Link to="/termsandconditions">Terms & Conditions</Link>
                                    </li>
                                    <li>
                                        <Link to="/faqs">FAQs</Link>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col md={7}>
                            <div className="company">
                                <div className="footer_sub_title_areas">
                                    <p>
                                        DELIVERY AREAS
                                    </p>
                                </div>
                                <div className="footer_list">
                                    <ul>
                                        <li>
                                            Garhwa
                                        </li>
                                        <li>
                                            Ranchi
                                        </li>
                                        <li>
                                            Jamshedpur
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        </Col>
                        <div className="divider">
                    </div>
                    </Row>
                </Container>
            </section>
            <section>
                <div>
                    
                    <div className="copyright">
                        <div className="footer_sub_titles">
                            <p>Copyright © 2023 Grozep Inc. All rights reserved</p>
                        </div>
                    </div>
                </div>
            </section>
        </footer>

    )
}
export default footer;