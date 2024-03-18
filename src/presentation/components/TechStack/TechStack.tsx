import { Col, Row, Image } from 'antd'
import Heading from '../../hocs/Heading'
import { TechStackData } from '../../../domain/constants/TechStackData'

const TechStack = () => {
  return (
    <Col span={24}>
    <Heading title="Tech Stack" />
    <Row className="tech-stack-row">
    {
      TechStackData.map((item: string, index: number) => {
        return(
          <Col key={index} className="tech-stack-col glassmorphism-effect">
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