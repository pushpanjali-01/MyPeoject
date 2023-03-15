import React from "react";
import { Container, Card, Col, Row } from "react-bootstrap";
import "./Thumbnail.css"
const ThumbnailCard = ({ items }) => {
    return (
        <Container>
            <div className="thumbnail">
                <Row>
                    <Col>
                        <Card className="card2">
                            <div className="CardImg">
                                <img src={items.src} alt="" />
                            </div>
                            <div className="data">
                                <div>
                                    <p>
                                        {items.name}
                                    </p>
                                </div>
                                <div className="designation">
                                    <p>
                                        {items.designation}
                                    </p>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>
        </Container>

    )


}
export default ThumbnailCard