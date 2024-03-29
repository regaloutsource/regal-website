import { Col, Typography, Row, Image, Button } from 'antd'
import bgVideo from "../../../assets/bgVideo.mp4";
import logo from "../../../assets/regal_outsource_logo.svg"

import "./hero.css"

const Hero = () => {
    return (
        <Row className="hero-section-row">
            <Col span={10}>
            <video
            width="100%"
            height="auto"
            autoPlay
            loop
            muted
        >
                    <source src={bgVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </Col>

            <Col span={14} className="hero-section-col">
                <Image preview={false} src={logo} alt="regal_logo" id="logo" width={100}  />
                <Typography.Title className="heading-text">Regal Outsource</Typography.Title>
                <Typography.Text className="sub-heading-text">
                    We are Programmed for delivering Quality and Excellence.
                </Typography.Text> <br />
                <Button className="hero-section-btn">Contact us</Button>
            </Col>
        </Row>
    )
}

export default Hero