import { Col, Typography } from 'antd'
import React from 'react'

type IFooterChips = {
    icon: any,
    title: string,
    subtitle: string,
    value: string
}
const FooterChips: React.FC<IFooterChips> = ({ icon, title, subtitle, value }) => {
  return (
    <Col>
        {icon}
        <Typography.Text>{title}</Typography.Text>
        <Typography.Text>{subtitle}</Typography.Text>
        <Typography.Text>{value}</Typography.Text>
    </Col>
  )
}

export default FooterChips