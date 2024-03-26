import { Col, Image, Row } from 'antd'
import { FooterData } from '../../../domain/constants/FooterData';
import FooterChips from '../../hocs/FooterChips';
import FooterForm from '../../hocs/FooterForm';
import facebook from "../../../assets/icons/socialMedia/facebook-color-svgrepo-com.svg"
import instagram from "../../../assets/icons/socialMedia/instagram-1-svgrepo-com.svg"
import linkedin from "../../../assets/icons/socialMedia/linkedin-svgrepo-com.svg"

import  "./footer.css"

const Footer = () => {

  return (
    <Row className="footer-row" gutter={[20, 10]}>
        <Col span={10} className="footer-col1-parent">
            <Col>
            {
                FooterData.map((item, index: number) => {
                    return (
                        <FooterChips key={index} icon={item.icon} title={item.title} subtitle={item.subtitle} value={item.value} />
                    )
                })
            }
            </Col>
            <Col>
                <Image src={facebook} preview={false} className="footer-social-icon" width={40} alt="social-icon" />
                <Image src={instagram} preview={false} className="footer-social-icon" width={40} alt="social-icon" />
                <Image src={linkedin} preview={false} className="footer-social-icon" width={40} alt="social-icon" />
            </Col>
        </Col>
        <Col span={14} className="glassmorphism-effect-light footer-col-2">
            <FooterForm />
        </Col>
    </Row>
  )
}

export default Footer