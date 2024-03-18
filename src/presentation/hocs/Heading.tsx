import { Typography } from 'antd'
import React from 'react'
import "./styles/heading.css"

type IHeading = {
    title: string
}
const Heading: React.FC<IHeading> = ({ title }) => {
    return (
        <Typography.Title className="head-text">{title}</Typography.Title>
    )
}

export default Heading