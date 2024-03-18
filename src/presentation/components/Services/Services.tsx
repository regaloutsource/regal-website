import { Col, Row } from 'antd'
import React, { Suspense } from 'react'
import { ServicesData } from '../../../domain/constants/ServicesData'
import SubSectionHeading from '../../hocs/SubSectionHeading'

const Services = () => {
  const ServicesBox = React.lazy(() => import("../../hocs/ServicesBox"))
  return (
    <Col span={24} className="nth-col">
    <SubSectionHeading title="Services we offer" subTitle="From custom software to UI/UX design, we deliver top-tier solutions, empowering you to focus on your core business" />

    <Row>
      {ServicesData.map((item, index: number) => (
        <Col key={index} span={8}>
          <Suspense fallback="">
            <ServicesBox data={item} />
          </Suspense>
        </Col>
      ))}
  </Row>

  </Col>
  )
}

export default Services