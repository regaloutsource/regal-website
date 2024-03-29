import { Col, Row, Image } from 'antd'
import Heading from '../../hocs/Heading'
import { TechStackData } from '../../../domain/constants/TechStackData'

import "./techStack.css"

const TechStack = () => {
  return (
    <Col span={24} style={{marginBottom: "5vmax"}}>
    <Heading title="Tech Stack" />
    <Row className="tech-stack-row">
    {
      TechStackData.map((item: string, index: number) => {
        return(
          <Col key={index} className="tech-stack-col glassmorphism-effect-dark">
            <Image preview={false} src={item} alt='tech-icon' />
          </Col>
        )
      })
    }
    </Row>
</Col>
  )
}

export default TechStack