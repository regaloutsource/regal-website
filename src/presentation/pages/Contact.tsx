import React from 'react'
import { Col, Flex, Row, Typography } from 'antd'
import { HomeOutlined, PhoneOutlined, MailOutlined } from "@ant-design/icons"
import Heading from '../hocs/Heading'

import "./styles/contact.css"
import Footer from '../components/Footer/Footer'

const Contact = () => {
  return (
    <Row gutter={[0, 40]}>
        <Col span={24} className="contact-main-col glassmorphism-effect-light">
        <Heading title="Contact Us" />
        <Typography.Text>Come on let's have a chat</Typography.Text>
      </Col>

      <Flex justify="space-around" align="center">
        <Col span={10}>
          <Typography.Title>Office</Typography.Title>
          <Flex align="start">
            <HomeOutlined style={{ fontSize: "2vmax" }} />
            <Typography.Text className="contact-texts">
                Regal Outsource (India) Private Limited F-39(B), I.T.Park, M.I.A. (Extn.),Madri Udaipur - 313003, Rajasthan, India           
             </Typography.Text>
          </Flex>

          <Flex align="start">
            <PhoneOutlined  style={{ fontSize: "2vmax" }} />
            <Typography.Text className="contact-texts">
                +91 882 991 8888 <br /> +91 294 298 0888             
            </Typography.Text>
          </Flex>

          <Flex align="start">
            <MailOutlined style={{ fontSize: "2vmax" }} />
            <Typography.Text className="contact-texts">
                admin@regaloutsourceindia.com             
            </Typography.Text>
          </Flex>
        </Col>
        <Col span={10}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2801.573187192607!2d73.73776867400096!3d24.577309056531874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e5f8a28c857f%3A0xb67e1720c55fd500!2sRegal%20Outsource%20(India)%20Private%20Limited!5e1!3m2!1sen!2sin!4v1714394414966!5m2!1sen!2sin" width="550" height="450" loading="lazy"></iframe>
        </Col>
      </Flex>

      {/* Footer */}
      <Footer />
    </Row>
  )
}

export default Contact