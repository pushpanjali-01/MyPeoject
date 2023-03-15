import React from "react";
import "./index.css"
import FAQ_banner from "../../asserts/images/FAQ_banner.svg"
import Footer from "../../components/Footer/Footer";
import { Container, Row, Col, Card } from "react-bootstrap";
import MainHeading from "../../components/MainHeading";
import SubHeading from "../../components/SubHeading";
import Publish from "../../components/Publish/Publish";
import ReactPlayer from "react-player/youtube";
const faqs = () => {
    return (
        <React.Fragment>
            <main>
                <section className="FAQS">
                    <div className="FAQ_banner">
                        <p>FAQ's</p>
                        <img src={FAQ_banner} alt="" />

                    </div>
                </section>
                <Container>
                    <section className="section_head">
                        <div className="aboutUs_heading">
                            <p>Frequently asked questions</p>
                        </div>
                        <div className="under"></div>
                    </section>
                    <section>
                        <Container>
                            <Row>
                                <Col>
                                    <Card>
                                        <div className='player-wrapper'>
                                            <ReactPlayer
                                                className='react-player'
                                                url='https://www.youtube.com/watch?v=ia7006AzOUY'
                                                width='100%'
                                                height='100%'
                                            />
                                        </div>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                    <section className="Fqasection">
                        <Card>
                            <Row>
                                <Col>
                                    <div className="Faqs">
                                        <MainHeading main_text="General" />
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                    </section>
                    <section className="Fqasection">
                        <Card>
                            <Row>
                                <Col>
                                    <div className="head_card">
                                        <div className="Faqs">
                                            <MainHeading main_text="What is grozep and why was the name changed?" />
                                            <SubHeading sub_text="grozep is leading the charge in transforming India’s vast,
                                                unorganised grocery landscape through cutting-edge
                                                technology and innovation. grozep is India’s largest and most
                                                convenient hyper-local delivery company, which enables you
                                                to order grocery, fruits & vegetables, and other daily essential
                                                products, directly via your mobile or web browser."/>
                                            <SubHeading sub_text="To know the reason why we changed our brand name from
                                                Grofers to grozep, read this blog post."/>
                                        </div>

                                        <div className="Faqs_border">
                                            <MainHeading main_text="What kind of products does grozep sell?" />
                                            <SubHeading sub_text="You can buy 7000+ products on grozep everything from
                                                groceries to fresh fruits & vegetables, cakes and bakery items,
                                                to meats & seafood, cosmetics, mobiles & accessories,
                                                electronics (including Apple products), baby care products
                                                and much more. We get it delivered at your doorstep in the
                                                fastest and the safest way possible."/>
                                        </div>

                                        <div className="Faqs_border">
                                            <MainHeading main_text="What cities and locations does grozep operate in?" />
                                            <SubHeading sub_text="grozep currently operates in Ahmedabad, Bengaluru,
                                                Chandigarh, Chennai, Delhi, Faridabad, Ghaziabad, Gurugram,
                                                Hyderabad, Jaipur, Jalandhar, Kanpur, Kolkata, Lucknow,
                                                Ludhiana, Meerut, Mohali, Mumbai, Noida, Panchkula,
                                                PuneVadodara and Zirakpur."/>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                    </section>
                    <section className="Fqasection">
                        <Card>
                            <Row>
                                <Col>
                                    <div className="Faqs">
                                        <MainHeading main_text="Miscellaneous" />
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                    </section>
                    <section className="Fqasection">
                        <Card>
                            <Row>
                                <Col>
                                    <div className="head_card">
                                        <div className="Faqs">
                                            <MainHeading main_text="Does grozep deliver cigarettes?" />
                                            <SubHeading sub_text="Yes, grozep delivers cigarettes in select areas in all the 23
                                                cities we are currently operating in. We are fully cognisant of
                                                the harmful nature of smoking and hence, expect our
                                                customers to be 18 or above (we are bound to report to the
                                                authorities in case of transgression). We urge our customers
                                                to ensure that their location is away from educational
                                                institutes. We strongly advise against purchasing cigarettes on
                                                behalf of minors."/>
                                        </div>
                                        <div className="Faqs_border">
                                            <MainHeading main_text="Does grozep deliver condoms?" />
                                            <SubHeading sub_text="Yes, we deliver condoms in all the 23 cities we operate in.
                                                Orders come with discreet packaging. Our customers’ privacy
                                                is of utmost priority for us and we help them to shop in
                                                confidence."/>
                                        </div>
                                        <div className="Faqs_border">
                                            <MainHeading main_text="Does grozep deliver 24 hours/all night?" />
                                            <SubHeading sub_text="As of now, this service (delivery between 12 am to 6am) is
                                                available in select areas in a few cities."/>
                                        </div>
                                        <div className="Faqs_border">
                                            <MainHeading main_text="Does grozep deliver ice cream?" />
                                            <SubHeading sub_text="Yes, we deliver ice creams and frozen desserts in almost all
                                                cities that we operate. We service delicious flavors of ice
                                                creams and frozen desserts in small/family packs from Amul,
                                                Kwality Walls, NIC and many more."/>
                                        </div>
                                        <div className="Faqs_border">
                                            <MainHeading main_text="How does grozep deliver in 10 minutes?" />
                                            <SubHeading sub_text="Our tech enables our partners staff to pick and pack an order
                                                within 2 minutes of the customer placing it. Our network of
                                                partner stores are so widely spread across cities that we have
                                                a store live almost every 2 kilometers. Read this blogpost to
                                                know more."/>
                                        </div>
                                        <div className="Faqs_border">
                                            <MainHeading main_text="Do you take into consideration delivery partners’ safety?" />
                                            <SubHeading sub_text="The average delivery speed for our fleet is 18kmph and the
                                                average distance covered by our delivery partners is about
                                                2km. This is possible only due to the efficiency of our systems
                                                and cluster of stores, coupled with our in-house technology.
                                                Our delivery partners connect the dots between the stores
                                                and the customers in the safest way possible. Read this
                                                blogpost to know more."/>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                    </section>
                    <section className="Fqasection">
                        <Card>
                            <Row>
                                <Col>
                                    <div className="Faqs">
                                        <MainHeading main_text="Delivery" />
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                    </section>
                    <section className="Fqasection">
                        <Card>
                            <Row>
                                <Col>
                                    <div className="head_card">
                                        <div className="Faqs">
                                            <MainHeading main_text="Do you charge for delivery?" />
                                            <SubHeading sub_text="Every store has its own delivery charges. The delivery charges
                                                are mentioned on the app and web at the checkout page."/>
                                        </div>
                                        <div className="Faqs_border">
                                            <MainHeading main_text="What are your delivery timings?" />
                                            <SubHeading sub_text="The delivery timings are different for different cities and
                                                localities. In some locations, our deliveries begin from 6 AM
                                                and the last delivery is completed by 11 PM. But we also deliver
                                                between 12 AM and 6 AM in in select areas in Bengaluru,
                                                Chandigarh, Delhi, Faridabad, Ghaziabad, Gurugram,
                                                Jalandhar, Kolkata, Lucknow, Ludhiana, Mumbai, Noida,
                                                Panchkula and Zirakpur."/>
                                        </div>
                                        <div className="Faqs_border">
                                            <MainHeading main_text="Can I change the delivery address of my order?" />
                                            <SubHeading sub_text="At this time, we do not offer this option. You can, however,
                                                cancel your order and reorder from a different locality"/>
                                        </div>
                                        <div className="Faqs_border">
                                            <MainHeading main_text="What if I don’t receive my order by the scheduled time?" />
                                            <SubHeading sub_text="Over 70% of our deliveries are honoured within the 15 minute
                                            timelines. On rare occasions, due to unforeseen
                                            circumstances, your order might be delayed. In case of
                                            imminent delay, our customer support executive will keep you
                                            updated about the delivery time of your order"/>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                    </section>
                    <section className="Fqasection">
                        <Card>
                            <Row>
                                <Col>
                                    <div className="Faqs">
                                        <MainHeading main_text="Cancellation and return" />
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                    </section>
                    <section className="Fqasection">
                        <Card>
                            <Row>
                                <Col>
                                    <div className="head_card">
                                        <div className="Faqs">
                                            <MainHeading main_text="How can I cancel my order?" />
                                            <SubHeading sub_text="grozep provides easy and hassle-free cancellation. You can
                                            cancel your order via the app or web on the order details page
                                            while it is still in the packing stage."/>
                                        </div>
                                        <div className="Faqs_border">
                                            <MainHeading main_text="What If I want to return something?" />
                                            <SubHeading sub_text="The timeline to raise a complaint depends on the category in
                                            which the product falls into: Consumable Perishables meats,
                                            seafood, frozen food and FnV, dairy category including milk,
                                            eggs and bread, etc. (7 days); Consumable Non-perishables
                                            groceries, etc. (7 days); General Merchandise Electronics,
                                            home furnishings, fashion, etc. (7 days); Freebie missing issue
                                            (7 days); Entire wrong order and MDND (7 days); and Other
                                            issues insect, fungus or foreign material, expired products,
                                            etc. (no restriction)."/>
                                        </div>
                                        <div className="Faqs_border">
                                            <MainHeading main_text="Can I reschedule my order?" />
                                            <SubHeading sub_text="We deliver your order in 10 minutes during all times the store in
                                            your area is operational. Hence we request you to order when
                                            you are available. It is not possible to reschedule an order."/>
                                        </div>
                                        <div className="Faqs_border">
                                            <MainHeading main_text="What if I have a complaint regarding my order?" />
                                            <SubHeading sub_text="Please reach out to us via the Customer Support section on
                                            the app/web. Our customer care team is more than happy to
                                            help"/>
                                        </div>
                                    </div>
                                </Col>
                                {/* <Col md={3}>
                                </Col> */}
                            </Row>
                        </Card>
                    </section>
                </Container>
                <section>
                    <Publish />
                </section>
                <section>
                    <Footer />
                </section>
            </main>
        </React.Fragment >


    )
}
export default faqs;