import React, { useState, useRef } from "react";
import Logo from '../../assets/img/logo.svg';
import Hero3 from "../../assets/img/hero/hero-3.jpg";
import { Parallax } from "react-parallax";
import { Col, Container, Image, Row } from "react-bootstrap";
import { FaPhoneSquare, FaStar } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import advimg1 from "../../assets/img/advertise/advertiseAustria.png"
import advimg2 from "../../assets/img/advertise/advertiseGreece.png"
import advimg3 from "../../assets/img/advertise/advertiseTasMania.png"
import advimg4 from "../../assets/img/advertise/advTaiwan.png"
import advimg5 from "../../assets/img/advertise/advbelize.png"
import magazineImage from "../../assets/img/advertise/advmagazineimg.png"
import Header from "../components/header";
import Footer from "../components/footer";
import CallToAction from "../components/callToAction";

function AdvertiseWithUs() {

    const [activeTab, setActiveTab] = useState("Zoom");

    const openLink = (animName) => {
        setActiveTab(animName);
    }

    const sliderRef = useRef(null);

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const deals = [
        {
            title: advimg1,
            stars:  "\f149",
            description: "“Wanderlust are the ideal partner to work with for the UK market, with excellent editorial standards, and a loyal audience of avid travellers. When working with them we decided to promote an off-the-beaten path destination, in the region of Thrace and the result well-and-truly impressed us! Wanderlust is the best avenue when presenting a new destination/experience/offer to the world!”",
        },
        {
            title: advimg2,
            stars: "*****",
            description: " “Wanderlust interpreted our ideas and suggestions brilliantly to come up with a very impactful piece of collateral that portrayed Tasmania’s adventure product in a way that had not been achieved in the UK before.”						",
        },
        {
            title: advimg3,
            stars: "*****",
            description: " “Wanderlust are the ideal partner to work with for the UK market, with excellent editorial standards, and a loyal audience of avid travellers. When working with them we decided to promote an off-the-beaten path destination, in the region of Thrace and the result well-and-truly impressed us! Wanderlust is the best avenue when presenting a new destination/experience/offer to the world!”						",
        },
        {
            title: advimg4,
            stars: "*****",
            description: " “The Taiwan Tourism Board needed to find a UK media partner that is well respected, widely known and able to deliver campaigns that satisfy challenging briefs. Wanderlust was able to exceed expectations on all these points and we look forward to working with them again in the future.”	",
        },
        {
            title: advimg5,
            stars: "*****",
            description: "“Our campaign with Wanderlust exceeded all expectations (212% of proposed target engagement). We were incredibly pleased with the results and will continue to work with Wanderlust on other campaigns.”",
        },



    ];
    return (
        <>
        {/* <HEad */}
        <Header></Header>

            <Parallax blur={0} bgImage={Hero3} bgImageAlt="the cat" strength={100} className="advertise-first-section">
                <section>
                    <h2 className="text-center mt-4">Advertise With Us</h2>
                    <Container className="adv-container">
                        <Row>

                            <Col lg={4} className="p-5">
                                <div class="flip-box">
                                    <div class="flip-box-inner">
                                        <div class="flip-box-front">
                                            <Image src={magazineImage} alt="Paris" />


                                        </div>
                                        <div class="flip-box-back">
                                            <h3>The UK's longest-running travel magazine</h3>
                                            <p className="heading">Relaunched in 2021 with a higher design spefication, more pages than ever and even further distribution. Our six collectable double issues a year reach an average readership of 100k</p>
                                        </div>
                                    </div>

                                </div>
                                <div className="text-heading-button">

                                    <div className="text-center mt-4">
                                        <p className="heading">PRINT</p>
                                    </div>
                                    <div className="text-center ">

                                        <button >PRINT CAMPAIGN</button>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={4} className="p-5">
                                <div class="flip-box">
                                    <div class="flip-box-inner">
                                        <div class="flip-box-front">
                                            <Image src={magazineImage} alt="Paris" />


                                        </div>
                                        <div class="flip-box-back">
                                            <h3>The UK's longest-running travel magazine</h3>
                                            <p className="heading">Relaunched in 2021 with a higher design spefication, more pages than ever and even further distribution. Our six collectable double issues a year reach an average readership of 100k</p>
                                        </div>
                                    </div>

                                </div>
                                <div className="text-heading-button">

                                    <div className="text-center mt-4">
                                        <p className="heading">TAILORED FOR YOU</p>
                                    </div>
                                    <div className="text-center ">

                                        <button >PRINT CAMPAIGN</button>
                                    </div>
                                </div>
                            </Col>


                            <Col lg={4} className="p-5">
                                <div class="flip-box">
                                    <div class="flip-box-inner">
                                        <div class="flip-box-front">
                                            <Image src={magazineImage} alt="Paris" />
                                        </div>
                                        <div class="flip-box-back">
                                            <h3>The UK's longest-running travel magazine</h3>
                                            <p className="heading">Relaunched in 2021 with a higher design spefication, more pages than ever and even further distribution. Our six collectable double issues a year reach an average readership of 100k</p>
                                        </div>
                                    </div>

                                </div>
                                <div className="text-heading-button">

                                    <div className="text-center mt-4">
                                        <p className="heading">DIGITAL</p>
                                    </div>
                                    <div className="text-center ">
                                        <button >PRINT CAMPAIGN</button>
                                    </div>
                                </div>
                            </Col>


                        </Row>

                    </Container>
                </section>

            </Parallax>
            <section className="spad">
                <Container>
                    <h2 className="text-center mb-4">ADVERTISING TESTIMONIALS </h2>

                    <Slider {...sliderSettings} ref={sliderRef}>
                        {deals.map((deal, index) => (
                            <div key={index} className=" exclusive-deals1">
                                <a>
                                    <img src={deal.title} />
                                </a>
                                <div className="mt-3">
    {Array.from({ length: 5 }, (_, index) => (
        <span key={index} className={index < deal.starRating ? "normal-star filled" : "normal-star"}>
          <FaStar style={{color:"#EABE12"}} className="m-0"/>
        </span>
    ))}
</div>
                                <div>
                                    <a>
                                        <h5>{deal.description}</h5>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </Container>
            </section>

            <section >
                <Row>
                    <Col lg={6} className="what-we-do p-0">
                        <div className="hovermaindiv">
                        <div className="inner-div">
                            <div className="text-center">
                                <p>Continue Reading</p></div>
                            <div className="text-center">
                                <h2><a>WHAT WE DO</a></h2>
                            </div>
                        </div>
                        </div>

                    </Col>

                    <Col lg={6} className="contact-us p-0">
                    <div className="hovermaindivtwo">
                        <div className="inner-div">
                            <div className="text-center">
                                <p>Looks Great?</p></div>
                            <div className="text-center">
                                <h2><a>CONTACT US</a></h2>
                            </div>
                        </div>
                        </div>

                    </Col>
                </Row>

            </section>
            <CallToAction/>
            <Footer/>
        </>

    );
}
export default AdvertiseWithUs;