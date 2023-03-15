import React from "react";
import "./index.css"
import Publish from "../../components/Publish/Publish";
import Footer from "../../components/Footer/Footer";
// import Contact_banner from "../../asserts/images/Contact_banner.jpg"
import contact_bnr from "../../asserts/images/contact_bnr.png"
import call_ from "../../asserts/images/call_.svg"
import email from "../../asserts/images/email.svg"
import address from "../../asserts/images/address.svg"
import round from "../../asserts/images/round.svg"
import { Container, Col, Row, Card } from "react-bootstrap";
const contact = () => {
  return (
    <React.Fragment>
      <main>
        <section className="contactUs">
          <div className="contact_banner_img">
            <img src={contact_bnr} alt="" />
          </div>
        </section>
        <section className="contact_us">
          <Container>
            <div className="head">
              <p>
                Contact Us
              </p>
            </div>
            <Row className="contact_details">
              <Col md={4}>
                <div className="card_contact">
                  <div className="contact_img">
                    <img src={call_} alt="" />
                  </div>
                  <div className="number">
                    <p>+91 8448444943<br/>GARHWA</p>
                  </div>
                  <div className="address_text">
                    <p>Sukbana, Near Railway Crossing, Garhwa, Jharkhand - 822114</p>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="card_contact">
                  <div className="contact_img">
                    <img src={email} alt="" />
                  </div>
                  <div className="number">
                    <p>contactus@grozep.com<br/>RANCHI (Headquarter)</p>
                  </div>
                  <div className="address_text">
                    <p>3rd floor Hariom Tower, Lalpur, Ranchi, Jharkhand-830001</p>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="card_contact">
                  <div className="contact_img">
                    <img src={address} alt="" />
                  </div>
                  <div className="number">
                    <p>3rd floor Hariom Tower, Lalpur, Ranchi,<br/> Jharkhand-830001</p>
                  </div>
                  <div className="address_text">
                    <p>Sukbana, Near Railway Crossing, Garhwa, Jharkhand - 822114</p>
                  </div>
                </div>
              </Col>
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
export default contact;