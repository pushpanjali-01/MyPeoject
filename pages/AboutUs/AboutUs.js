import React from "react";
import "./index.css"
import { Col, Container, Row, Card } from "react-bootstrap";
import deliver from "../../asserts/images/deliver.png"
import grocery from "../../asserts/images/grocery.png"
import shared1 from "../../asserts/images/shared1.png"
import shared2 from "../../asserts/images/shared2.png"
import Grocery_delivery from "../../asserts/images/Grocery_delivery.png"
import Publish from "../../components/Publish/Publish";
import Footer from "../../components/Footer/Footer";
import data from "./data";
import ThumbnailCard from "../../components/ThumbnailCard/ThumbnailCard";
import profile1 from "../../asserts/images/profile1.png"
import profile2 from "../../asserts/images/profile2.png"
import profile3 from "../../asserts/images/profile3.jpg"
import profile7 from "../../asserts/images/profile7.jpg"
import profile4 from "../../asserts/images/profile4.png"
import profile8 from "../../asserts/images/profile8.jpg"
import img1 from "../../asserts/images/img1.png"
import img2 from "../../asserts/images/img2.png"
import img3 from "../../asserts/images/img3.png"
import img4 from "../../asserts/images/img4.png"
import img5 from "../../asserts/images/img5.png"
const about = () => {
    return (
        <main>
            <section className="deliver">
                <div className="delivers">
                    <img src={deliver} alt="" />
                </div>
                <div className="aboutUs_btn">
                    <button className="btn">Shop it</button>
                </div>
            </section>
            <section className="who_are_we">
                {/* <Container>
                    <Row>
                        <Col md={6}>
                            <div className="who">
                                <div className="Heading">
                                    <p>Who are we?</p>
                                </div>
                                <div className="desc">
                                    <p>Launched in 2010, Our technology platform connects customers, restaurant partners and delivery partners, serving their multiple needs. Customers use our platform to search and discover restaurants, read and write customer generated reviews and view and upload photos, order food delivery, book a table and make payments while dining-out at restaurants. On the other hand, we provide restaurant partners with industry-specific marketing tools which enable them to engage and acquire customers to grow their business while also providing a reliable and efficient last mile delivery service. We also operate a one-stop procurement solution, Hyperpure, which supplies high quality ingredients and kitchen products to restaurant partners. We also provide our delivery partners with transparent and flexible earning opportunities.</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="grocery">
                                <img src={grocery} alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container> */}
                <Container>
                    <Row>
                        <Col md={7}>
                            <div>
                                <div className="aboutUs_heading">
                                    <p>Who are we?</p>
                                </div>
                                <div className="under">

                                </div>
                                <div className="aboutUs_desc">
                                    <p>Launched in 2010, Our technology platform connects customers, restaurant partners and delivery partners, serving their multiple needs. Customers use our platform to search and discover restaurants, read and write customer generated reviews and view and upload photos, order food delivery, book a table and make payments while dining-out at restaurants. On the other hand, we provide restaurant partners with industry-specific marketing tools which enable them to engage and acquire customers to grow their business while also providing a reliable and efficient last mile delivery service. We also operate a one-stop procurement solution, Hyperpure, which supplies high quality ingredients and kitchen products to restaurant partners. We also provide our delivery partners with transparent and flexible earning opportunities.</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={5}>
                            <div className="grocery_image">
                                <img src={grocery} alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="two_sections">
                <Container>
                    <div className="aboutUs_heading">
                        <p>Our shared philosophy</p>
                    </div>
                    <div className="under"></div>
                    <Row>
                        {/* <Col md={6}>
                            <div className="subject">
                                <div className="shared1">
                                    <img src={shared1} alt="" />
                                </div>
                                <div className="sub_heading">
                                    <p>Mindsets & leverage points</p>
                                </div>
                                <div className="desc1">
                                    <p>We believe that being a leader is a mindset, much more than it is a title. And are codifying the operating principles that leaders at Blinkit follow at all times</p>
                                </div>
                            </div>
                        </Col> */}
                        <Col md={6}>
                            <div>
                                <div className="groc">
                                    <img src={shared1} alt="" />
                                </div>
                                <div className="groc_heading">
                                    <p>
                                        Mindsets & leverage points
                                    </p>
                                </div>
                                <div className="groc_sub_heading">
                                    <p>
                                        We believe that being a leader is a mindset, much more than it is a title. And are codifying the operating principles that leaders at Blinkit follow at all times
                                    </p>
                                </div>
                            </div>
                        </Col>
                        {/* <Col md={6}>
                            <div>
                                <div className="shared2">
                                    <img src={shared2} alt="" />
                                </div>
                                <div className="sub_heading">
                                    <p>Learning organisation</p>
                                </div>
                                <div className="desc1">
                                    <p>We are a group of people who are constantly learning the skills we need, and continuously improving upon ourselves to create the future we desire
                                    </p>
                                </div>
                            </div>
                        </Col> */}
                        <Col md={6}>
                            <div className="left_shared">
                                <div className="groc">
                                    <img src={shared2} alt="" />
                                </div>
                                <div className="groc_heading">
                                    <p>
                                        Learning organisation
                                    </p>
                                </div>
                                <div className="groc_sub_heading">
                                    <p>
                                        We are a group of people who are constantly learning the skills we need, and continuously improving upon ourselves to create the future we desire
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="delivery_stock">
                {/* <Container>
                    <Row>
                        <Col md={6}>
                            <div className="info_col">
                                <p className="info">Get your <span className="inner_info">groceries</span> within 30 minutes</p>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div>
                                <img src={Grocery_delivery} alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container> */}
                <Container>
                    <Row>
                        <Col md={6}>
                            <div className="info_cols">
                                <p className="info">Get your <span className="inner_info">groceries</span> within 30 minutes</p>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="groc_imm">
                                <img src={Grocery_delivery} alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="members">
                {/* <Container>
                    <div className="Heading">
                        <p>Some of the people building grozep</p>
                    </div>
                    <Row className="profile_row">
                        <Col md={4}>
                            <Card>
                                <div className="profile">
                                    <div className="profile_Image">
                                        <img src={profile1} alt="" />
                                    </div>
                                    <div>
                                        <p>Allahrakha Siddiqui</p>
                                    </div>
                                    <div>
                                        <p>CEO</p>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card>
                                <div className="profile">
                                    <div className="profile_Image">
                                        <img src={profile2} alt="" />
                                    </div>
                                    <div>
                                        <p>Kumar Shashi</p>
                                    </div>
                                    <div>
                                        <p>Manager</p>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card>
                                <div className="profile">
                                    <div className="profile_Image">
                                        <img src={profile3} alt="" />
                                    </div>
                                    <div>
                                        <p>Akash</p>
                                    </div>
                                    <div>
                                        <p>UI Developer</p>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="profile_row">
                        <Col md={4}>
                            <Card>
                                <div className="profile">
                                    <div className="profile_Image">
                                        <img src={profile7} alt="" />
                                    </div>
                                    <div>
                                        <p>Allahrakha Siddiqui</p>
                                    </div>
                                    <div>
                                        <p>CEO</p>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card>
                                <div className="profile">
                                    <div className="profile_Image">
                                        <img src={profile4} alt="" />
                                    </div>
                                    <div>
                                        <p>Kumar Shashi</p>
                                    </div>
                                    <div>
                                        <p>Manager</p>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card>
                                <div className="profile">
                                    <div className="profile_Image">
                                        <img src={profile8} alt="" />
                                    </div>
                                    <div>
                                        <p>Akash</p>
                                    </div>
                                    <div>
                                        <p>UI Developer</p>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </Container> */}
                <Container>
                    <div className="aboutUs_heading">
                        <p>
                            Some of the people building grozep
                        </p>
                    </div>
                    <div className="under"></div>
                    <div className="profiless">
                    <Row className="profile_row">
                        <Col md={4}>
                            <div className="profile">
                                <div className="profile_Image">
                                    <img src={img1} alt="" />
                                </div>
                                <div className="name_designation">
                                    <div className="name_heading">
                                        <p>Allahrakha Siddiqui</p>
                                    </div>
                                    <div className="designatio_heading">
                                        <p>CEO</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="profile">
                                <div className="profile_Image">
                                    <img src={img2} alt="" />
                                </div>
                                <div className="name_designation">
                                    <div className="name_heading">
                                        <p>Kumar Shashi</p>
                                    </div>
                                    <div className="designatio_heading">
                                        <p>Manager</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="profile">
                                <div className="profile_Image">
                                    <img src={img3} alt="" />
                                </div>
                                <div className="name_designation">
                                    <div className="name_heading">
                                        <p>Mahendran</p>
                                    </div>
                                    <div className="designatio_heading">
                                        <p>UI/UX</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="profile_row">
                        <Col md={4}>
                            <div className="profile">
                                <div className="profile_Image">
                                    <img src={img4} alt="" />
                                </div>
                                <div className="name_designation">
                                    <div className="name_heading">
                                        <p>AAAA</p>
                                    </div>
                                    <div className="designatio_heading">
                                        <p>UI</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="profile">
                                <div className="profile_Image">
                                    <img src={img5} alt="" />
                                </div>
                                <div className="name_designation">
                                    <div className="name_heading">
                                        <p>Pushpanjali</p>
                                    </div>
                                    <div className="designatio_heading">
                                        <p>UI</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="profile">
                                <div className="profile_Image">
                                    <img src={img5} alt="" />
                                </div>
                                <div className="name_designation">
                                    <div className="name_heading">
                                        <p>yyyyy</p>
                                    </div>
                                    <div className="designatio_heading">
                                        <p>yyyyy</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    </div>
                </Container>
            </section>
            <section>
                <Publish />
            </section>
            <section>
                <Footer />
            </section>
        </main>
    )
}
export default about;