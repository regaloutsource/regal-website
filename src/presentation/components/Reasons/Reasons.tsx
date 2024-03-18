import { Col } from 'antd'
import React, { Suspense } from 'react'
import { ReasonsData } from '../../../domain/constants/ReasonsData'
import { ReasonsInterface } from '../../../domain/interfaces/ReasonsInterface'
import SubSectionHeading from '../../hocs/SubSectionHeading'

const Reasons = () => {
    const ReasonsBox = React.lazy(() => import("../../hocs/ReasonsBox"))
  return (
    <Col span={24}>
        <SubSectionHeading title="Why choose Regal Outsource ?" subTitle="Here are a few reasons why our customers choose us" />
        {
          ReasonsData.map((item: ReasonsInterface, index: number) => {
            return(
              <Suspense fallback="" key={index}>
                <ReasonsBox data={item} isReverse={index+1} />
              </Suspense>
            )
          })
        }
      </Col>
  )
}

export default Reasons