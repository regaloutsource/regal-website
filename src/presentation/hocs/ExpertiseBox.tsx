import React from 'react'
import { Col, Flex, Image, Typography } from 'antd';
import "./styles/expertise.css"

type IExpertiseType = {
    icon: string;
    title: string;
    content: string;
}
const ExpertiseBox: React.FC<IExpertiseType> = ({ icon, title, content }) => {
  return (
      <Col className="expertise-col glassmorphism-effect-light">
        <Flex align="center" justify="space-evenly">
          <Col xs={6} md={4} lg={3} className="icon-box">
            <Image src={icon} preview={false} alt={`${title}-icon`} />
          </Col>
          <Col xs={16} md={18} lg={19}>
            <Typography.Title className="primary-text-heading">{title}</Typography.Title>
            <Typography.Paragraph className="expertise-content">{content}</Typography.Paragraph>
          </Col>
        </Flex>
      </Col>
  )
}

export default ExpertiseBox