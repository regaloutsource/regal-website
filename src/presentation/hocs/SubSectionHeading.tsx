import { Flex, Typography } from 'antd'
import React from 'react'

type ISubSectionHeading = {
    title: string,
    subTitle: string
}
const SubSectionHeading: React.FC<ISubSectionHeading> = ({ title, subTitle }) => {
  return (
    <Flex align="center" vertical>
        <Typography.Title className="primary-text-heading">{title}</Typography.Title>
        <Typography.Title className="secondary-text-heading" style={{width: "60%"}}>{subTitle}</Typography.Title>
    </Flex>
  )
}

export default SubSectionHeading