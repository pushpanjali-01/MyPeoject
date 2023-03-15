import React from "react";
import "./index.css"
import play_store_download from "../../asserts/images/play_store_download.png"
import app_store_download from "../../asserts/images/app_store_download.png"
import mobile_up from "../../asserts/images/mobile_up.png"
import mobile_down from "../../asserts/images/mobile_down.png"
import { Col, Container, Row } from "react-bootstrap";
const Publish = () => {
  return (
    <React.Fragment>
      <main>
        <section className="publish">
          <Container>
            <Row>
              <Col md={5}>
                <div>
                  <div className="publish_Description">
                    {/* <Title title={"Groceries in your pocket"}
                fontSize={"18px"} />
              <SubTitle subtitle={"Order your daily needs & house hold items on the go, with the all-new Grozep app."}
                width={"202px"}
                fontSize={"10px"} /> */}
                    <div className="title-darks">
                      <p>Groceries in <br />your pocket</p>
                    </div>
                    <div className="sub-title-grays">
                      <p>Order your daily needs & house hold items<br />on the go, with the all-new Grozep app.</p>
                    </div>
                  </div>
                  <div className="store_imagess">
                  <div className="store_image1">
                    <img src={play_store_download} alt="" />
                  </div>
                  <div className="store_image2">
                    <img src={app_store_download} alt="" />
                  </div>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="mobile_down">
                  <img src={mobile_down} alt="" />
                </div>
              </Col>
              <Col md={3}>
                <div className="mobile_up">
                  <img src={mobile_up} alt="" />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    </React.Fragment>
  )
}
export default Publish;