import React, { Suspense } from 'react'
import { Col, Divider, Image, Row, Typography } from 'antd'
import bgVideo from "../../assets/bgVideo.mp4";
import logo from "../../assets/regal_outsource_logo.svg"
import "./styles/home.css"

const Home = () => {
  const Expertise = React.lazy(() => import("../components/Expertise/Expertise"))
  const Reasons = React.lazy(() => import("../components/Reasons/Reasons"))
  const Services = React.lazy(() => import("../components/Services/Services"))
  const TechStack = React.lazy(() => import("../components/TechStack/TechStack"))

  return (
    <Row>
      {/* Hero Section */}
      <Col span={24}>
        <video className='video-tag' autoPlay loop muted>
          <source src={bgVideo} type='video/mp4' />
        </video>
        <div className='heading-overlay glassmorphism-effect'>
          <Col>
              <Image preview={false} src={logo} alt="regal_logo" id="logo" width={100}  />
          </Col>
          <Typography.Title className="heading-text">Regal Outsource</Typography.Title>
          <Typography.Text className="sub-heading-text">
              We are Programmed for delivering Quality and Excellence.
          </Typography.Text>
        </div>
      </Col>

      {/* Expertise Section */}
      <Suspense fallback="" ><Expertise /></Suspense>

      {/* Why Choose Section */}
      <Suspense fallback="" > <Reasons /> </Suspense>
      <Divider />

      {/* Services */}
      <Suspense fallback="" ><Services /></Suspense>
      <Divider />

      {/* Tech Stack */}
      <Suspense fallback=""><TechStack /></Suspense>
    </Row>
  )
}

export default Home