import { Col, Row } from 'antd'
import React from 'react'
import Navbar from '../components/Navbar/Navbar'

type ILayoutType = {
    Children: any
}
const LayoutPage: React.FC<ILayoutType> = ({ Children }) => {
  return (
    <Row>
      <Col span={24}>
        <Navbar />
        {Children}
      </Col>
    </Row>
  )
}

export default LayoutPage