import React from 'react'
import { Col, Image, Typography } from 'antd'
import { ServicesInterface } from '../../domain/interfaces/ServicesInterface'

import "./styles/services.css"

type IServices = {
    data: ServicesInterface
}
const ServicesBox: React.FC<IServices> = ({ data }) => {
  return (
        <Col span={24} className="services-col">
            <Image preview={false} src={data.icon} alt='icon' width={70} />
            <Typography.Text className="primary-text-heading" style={{ marginTop: "1vmax" }}>{data.title}</Typography.Text>
            <Typography.Text className="services-secondary-text">{data.desp}</Typography.Text>
        </Col>
  )
}

export default ServicesBox