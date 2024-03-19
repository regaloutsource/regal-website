import { Col, Divider, Image, Row, Typography } from 'antd'
import bgVideo from "../../assets/bgVideo.mp4";
import logo from "../../assets/regal_outsource_logo.svg"
import Expertise from '../components/Expertise/Expertise';
import Reasons from '../components/Reasons/Reasons';
import Services from '../components/Services/Services';
import TechStack from '../components/TechStack/TechStack';
import Footer from '../components/Footer/Footer';
import "./styles/home.css"

const Home = () => {
  return (
    <Row>
      {/* Hero Section */}
      <Col span={24}>
        <video className='video-tag' autoPlay loop muted>
          <source src={bgVideo} type='video/mp4' />
        </video>
        <div className='heading-overlay glassmorphism-effect-dark'>
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
      <Expertise />
      <Divider />

      {/* Why Choose Section */}
       <Reasons /> 
      <Divider />

      {/* Services */}
      <Services />
      <Divider />

      {/* Tech Stack */}
      <TechStack />
      <Divider />

      {/* Footer */}
      <Footer />
    </Row>
  )
}

export default Home