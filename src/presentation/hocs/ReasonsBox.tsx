import React from 'react'
import { ReasonsInterface } from '../../domain/interfaces/ReasonsInterface'
import { Col, Flex, Image, Typography } from 'antd'

import "./styles/reasons.css"

type IReasonBox = {
    data: ReasonsInterface,
    isReverse: number
}
const ReasonsBox: React.FC<IReasonBox> = ({ data, isReverse }) => {
  return (
    <Flex justify="space-between" align="center" className="reason-flex-box" style={{ backgroundImage: `${isReverse % 2 === 1 ? `linear-gradient(to right, #fff, #d4f7d4c6)` : `linear-gradient(to right, #d4f7d4c6, #fff)`}` }}>
        <Col span={10} style={{ order: isReverse % 2 === 0 ? 1 : 0 }}>
      <Typography.Title className="reason-number">#{isReverse}</Typography.Title>
            <Image preview={false} className="reasons-img" src={data.image} alt={`${data.title}-img`} />
        </Col>
        <Col span={10}>
            <Typography.Text className="reasons-desp-text">{data.desp}</Typography.Text>
        </Col>
    </Flex>
  )
}

export default ReasonsBox