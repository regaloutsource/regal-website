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
      <Col  span={20} className="expertise-col">
        <Flex align="center" justify="space-evenly">
          <div className="icon-box"><Image src={icon} preview={false} className="expertise-icon" alt={`${title}-icon`} width={100} /></div>
          <div style={{ width: "70%" }}>
          <Typography.Title className="primary-text-heading">{title}</Typography.Title>
          <Typography.Text>{content}</Typography.Text>
          </div>
        </Flex>
       
      </Col>
  )
}

export default ExpertiseBox