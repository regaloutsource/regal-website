import { Divider, Row } from 'antd'
import Hero from '../components/Hero/Hero';
import Expertise from '../components/Expertise/Expertise';
import Reasons from '../components/Reasons/Reasons';
import Services from '../components/Services/Services';
import TechStack from '../components/TechStack/TechStack';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <Row gutter={[0, 50]}>
      {/* Hero Section */}
      <Hero />

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

      {/* Footer */}
      <Footer />
    </Row>
  )
}

export default Home