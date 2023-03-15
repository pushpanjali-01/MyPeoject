import React from "react";
import "./Home.css"
import mobile from "../../asserts/images/mobile.png";
import lays from "../../asserts/images/lays.svg";
import fortune from "../../asserts/images/fortune.svg"
import biscuit from "../../asserts/images/biscuit.svg"
import horlicks from "../../asserts/images/horlicks.svg"
import hairoil from "../../asserts/images/hairoil.svg"
import dairymilk from "../../asserts/images/dairymilk.svg"
import superfast from "../../asserts/images/superfast_.svg"
import loyaltypoints from "../../asserts/images/loyaltypoints_.svg"
import instantrefund from "../../asserts/images/instantrefund_.svg"
import placeorder from "../../asserts/images/placeorder.svg"
import ordershipment from "../../asserts/images/ordershipment.svg"
import enjoytime from "../../asserts/images/enjoytime.svg"
import map from "../../asserts/images/map.png"
import double_quotes from "../../asserts/images/double_quotes.png"
import profile from "../../asserts/images/profile.png"
import Footer from "../../components/Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import Publish from "../../components/Publish/Publish";
import map_ from "../../asserts/images/map_.svg"
import left from "../../asserts/images/left_.svg"
import right from "../../asserts/images/right_.svg"
import image1 from "../../asserts/images/image1.svg"

const home = () => {
  return (
    <React.Fragment>
      <main>
        <section className="banner">
          <Container>
            <Row>
              <Col md={6} className="sec-left">
                <div className="section-left">
                  <div className="main_head">
                    <div className="title-light">
                      <p>Get your groceries within 30 minutes</p>
                    </div>
                    <div className="sub-title-light">
                      <p>Explore wide range of products with exclusive offers and earn loyalty points on purchase. </p>
                    </div>
                  </div>
                  <button className="btn">
                    DOWNLOAD NOW
                  </button>
                </div>
              </Col>
              <Col md={6}>
                <div className="section-right">
                  <div className="inner-circle">
                    <img src={fortune} className="fortune" alt=""></img>
                    <img src={lays} className="lays" alt=""></img>
                    <img src={biscuit} className="biscuit" alt=""></img>
                    <img src={mobile} className="mobileImg" alt=""></img>
                    <img src={horlicks} className="horlicks" alt=""></img>
                    <img src={hairoil} className="hairoil" alt=""></img>
                    <img src={dairymilk} className="dairymilk" alt=""></img>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="why_section">
          <Container>
            <div className="title-dark">
              <p>
                Why buy from us?
              </p>
            </div>
            <Row className="why_or">
              <Col md={4}>
                <div className="why_order1">
                  <div className="why_img">
                    <img src={superfast} alt="" />
                  </div>
                  <div className="why_desc">
                    <div className="sub-title-black">
                      <p>Superfast delivery</p>
                    </div>
                    <div className="sub-title-gray">
                      <p>Order will be delivered<br /> within 30 minutes</p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="why">
                  <div className="why_img">
                    <img src={loyaltypoints} alt="" />
                  </div>
                  <div className="why_desc">
                    <div className="sub-title-black">
                      <p>Earn loyalty points</p>
                    </div>
                    <div className="sub-title-gray">
                      <p>Earn exclusive loylty points<br /> on purchase</p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="why_order3">
                  <div className="why_img">
                    <img src={instantrefund} alt="" />
                  </div>
                  <div className="why_desc">
                    <div className="sub-title-black">
                      <p>Instant refund</p>
                    </div>
                    <div className="sub-title-gray">
                      <p>Get instant refund on order <br />cancelled/returned</p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="location">
          <Container>
            <Row id="rowss">
              <Col md={6} id="row1">
                <div className="location_map">
                  <img src={map_} alt="" />
                </div>
              </Col>
              <Col md={6} id="row2">
                <div className="location_desc">
                  <div className="location_title">
                    <p>Delivery Area</p>
                  </div>
                  <div className="location_sub_title">
                    <p>
                      We are currently delivering 2,000+ <br />daily in 2 major cities within Jharkhand. <br />We're coming to your city soon...
                    </p>
                  </div>
                  <div className="location_List">
                    <ul>
                      <li className="location1">
                        Garhwa
                      </li>
                      <li className="location2">
                        Ranchi
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="delivery_section">
          <Container>
            <div className="title-darkss">
              <p>
                How it works?
              </p>
            </div>
            <Row>
              <Col md={4}>
                <div className="why1">
                  <div className="Working_shaded_circle1">
                    <img src={placeorder} alt="" className="circle_image" />
                  </div>
                  <div className="why_desc">
                    <div>
                      <div className="sub-title-black">
                        <p>Place an order</p>
                      </div>
                      <div className="sub-title-gray">
                        <p>Choose from wide range<br /> of products</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="why">
                  <div className="Working_shaded_circle2">
                    <img src={ordershipment} alt="" className="circle_image" />
                  </div>
                  <div className="why_desc">
                    <div>
                      <div className="sub-title-black">
                        <p>Order shipment</p>
                      </div>
                      <div className="sub-title-gray">
                        <p>Our delivery partner will<br /> be at your door</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="why3">
                  <div className="Working_shaded_circle3">
                    <img src={enjoytime} alt="" className="circle_image" />
                  </div>
                  <div className="why_desc">
                    <div>
                      <div className="sub-title-black">
                        <p>Enjoy your time</p>
                      </div>
                      <div className="sub-title-gray">
                        <p>boom! you'll never have <br />to wait in queue again</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="aboutUs">
          <div className="title-dark">
            <p>What people say about us?</p>
          </div>
          <Container className="aboutUs_container">

            {/* <Row>
              <Col md={4}>
                <div>
                  <div className="right">
                    <img src={left} alt="" />
                  </div>
                  <div className="profile_img">
                    <img src={profile} alt="" />
                  </div>
                  <div className="left">
                    <img src={right} alt="" />
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div>
                  <div className="summary">
                    <p>We are immesely satisfied with the grozep service has provided us. We are now exclusive with grozep and look forward to more growth in our delivery business through their online orders</p>
                  </div>
                  <div className="reviewer_name">
                    <p>Anjelica Huston</p>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div>
                  <div className="double_quoted_img" >
                    <img src={double_quotes} alt="" />
                  </div>

                </div>
              </Col>
            </Row> */}
            <Row>
              <Container>
                <div className="aboutUs_section">
                <Col md={2}>
                  <div>
                    <img src={left} alt="" />
                  </div>
                </Col>
                <Col md={8}>
                  <div className="Reviews">
                    <div className="Image_profile">
                      <img src={profile} alt="" />
                    </div>
                    <div className="Content">
                    <div>
                      <p>We are immesely satisfied with the grozep service has provided us. We are now exclusive with grozep and look forward to more growth in our delivery business through their online orders</p>
                    </div>
                    <div className="reviewer_name">
                      <p>Anjelica Huston</p>
                    </div>
                    </div>
                    <div className="Quotes">
                      <img src={double_quotes} alt="" />
                    </div>
                  </div>
                </Col>
                <Col md={2}>
                  <div className="left_btn">
                    <img src={right} alt="" />
                  </div>
                </Col>
                </div>
              </Container>
            </Row>
          </Container>
        </section>
        <section>
          <Publish />
        </section>
        <section>
          <Footer />
        </section>
      </main>
    </React.Fragment>
  )
}
export default home;