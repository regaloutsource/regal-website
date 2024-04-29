import { Col, Flex, Progress, Typography } from 'antd'
import React from 'react'
import { ProgressBarInterface } from '../../domain/interfaces/ProgressInterface'

type IProgressBar = {
    progressData: ProgressBarInterface
}
const ProgressBar: React.FC<IProgressBar> = ({ progressData }) => {
  return (
    <Flex>
        <Col span={24}>
            <Typography.Paragraph>{progressData.progressTitle}</Typography.Paragraph>
            <Progress percent={progressData.progressValue} strokeColor={progressData.color} status='active' />
        </Col>
    </Flex>
  )
}

export default ProgressBar