import { Col, Row, Typography } from "antd"
import Heading from "../hocs/Heading"

import "./styles/about.css"

const About = () => {
  return (
    <Row>
      <Col span={24} className="about-main-col-overlay">
        <div className="about-div">
          <Heading title="About Us" />
          <Typography.Text>A company turning into beautiful ideas</Typography.Text>
        </div>
      </Col>
    </Row>
  )
}

export default About