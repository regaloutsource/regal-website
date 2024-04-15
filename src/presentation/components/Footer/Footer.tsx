import { Col, Image, Row } from 'antd'
import { FooterData } from '../../../domain/constants/FooterData';
import FooterChips from '../../hocs/FooterChips';
import FooterForm from '../../hocs/FooterForm';
import facebook from "../../../assets/icons/socialMedia/facebook-color-svgrepo-com.svg"
import instagram from "../../../assets/icons/socialMedia/instagram-1-svgrepo-com.svg"
import linkedin from "../../../assets/icons/socialMedia/linkedin-svgrepo-com.svg"

import "./footer.css"

const Footer = () => {

    return (
        <Row className="footer-row" gutter={[0, 20]}>
            <Col xs={24} md={18} lg={10} className="footer-col1-parent">
                <Col>
                    {
                        FooterData.map((item, index: number) => {
                            return (
                                <FooterChips key={index} icon={item.icon} title={item.title} subtitle={item.subtitle} value={item.value} />
                            )
                        })
                    }
                </Col>
                
            </Col>
            <Col xs={24} lg={14} className="glassmorphism-effect-light footer-col2">
                <FooterForm />
            </Col>
            <Col span={24}>
                <Image src={facebook} preview={false} className="footer-social-icon" alt="social-icon" />
                <Image src={instagram} preview={false} className="footer-social-icon" alt="social-icon" />
                <Image src={linkedin} preview={false} className="footer-social-icon" alt="social-icon" />
            </Col>
        </Row>
    )
}

export default Footer