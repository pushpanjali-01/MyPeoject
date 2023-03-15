import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./index.css"
import map_ from "../../asserts/images/map_.svg"
import Careers_banner2 from "../../asserts/images/Careers_banner2.png"
import Careers_banner3 from "../../asserts/images/careers_banner3.png"
import Publish from "../../components/Publish/Publish";
import Footer from "../../components/Footer/Footer";
import career from "../../asserts/images/career.png"
import rightvector from "../../asserts/images/rightvector.svg"
// import fontawesome from "font-awesome"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
const careers = () => {
  return (
    <React.Fragment>
      <main>
        <section className="career_banners">
          <div className="career_banner">
            <img src={career} alt="" />
          </div>
          <div className="career_btn">
            <button className="btn">View jobs</button>
          </div>
        </section>
        <section className="location-section" >
          <Container>
            <Row>
              <Col md={6}>
                <div>
                  <img src={map_} alt="" className="map_img" />
                </div>
              </Col>
              <Col md={6}>

                <div className="info_col">
                  <p className="info">Flexibility to do your best work  <span className="inner_info">remotely</span> </p>
                </div>
                <div className="Sub_title">
                  <p>We’ve been remote first for nearly a decade nd have teammates in more than 80 cities worldwide. We go to great length to set you up for success from day one, and work hard to keep you connected.</p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section>
          <div className="career_banner1">
            <img src={Careers_banner2} alt="" />
          </div>
        </section>
        <section className="card_container">
          <Container>
            <Card className="card_ui">
              <div className="description">
                <div className="heading">
                  <p>Open positions</p>
                </div>
                <div className="sub-heading_career">
                  <p>We're hiring across the board in engineering, marketing and ops.</p>
                </div>
              </div>
              <div className="input_field">
                <input placeholder="Search from jobs below">
                </input>
              </div>
              <Container>
                <Row>
                  <Col md={9}>
                    <div className="experience1">
                      <p className="desig">
                        IOS Developer - Buy4rarn-Retail
                      </p>
                      <p className="exp">
                        Experience: 2-7 years
                      </p>
                    </div>
                  </Col>
                  <Col md={3}>
                    <div className="viewbtn">
                      <button>View jobs</button>
                    </div>
                  </Col>
                </Row>
              </Container>
              <div className="divider_line"></div>
              <Container>
                <Row>
                  <Col md={9}>
                    <div className="experience">
                      <p className="desig">
                        UX and UI designer - Buy4rarn-Retail
                      </p>
                      <p className="exp">
                        Experience: 2-6 years
                      </p>
                    </div>
                  </Col>
                  <Col md={3}>
                    <div className="viewbtn1">
                      <button >View jobs</button>
                    </div>
                  </Col>
                </Row>
              </Container>
            </Card>
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
export default careers;