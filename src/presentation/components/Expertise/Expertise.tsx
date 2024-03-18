import { Col, Row } from 'antd'
import React, { Suspense } from 'react'
import { ExpertiseData } from '../../../domain/constants/ExpertiseData'
import { ExpertiseInterface } from '../../../domain/interfaces/ExpertiseInterface'
import Heading from '../../hocs/Heading'

const Expertise = () => {
    const ExpertiseBox = React.lazy(() => import("../../hocs/ExpertiseBox"))
  return (
    <Col span={24} style={{marginBottom: "5%" }}>
    <Heading title="Our Expertise" />
    <Row gutter={[0, 30]}>
      {
        ExpertiseData.map((item: ExpertiseInterface, index: number) => {
          return(
            <Suspense fallback="" key={index}>
              <ExpertiseBox icon={item.icon} title={item.title} content={item.content} />
            </Suspense>
          )
        })
      }
    </Row>
  </Col>
  )
}

export default Expertise