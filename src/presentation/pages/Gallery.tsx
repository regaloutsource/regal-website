import { Col, Row, Typography, Image } from 'antd'
import Heading from '../hocs/Heading'
import { RegalPhotos } from '../../domain/constants/RegalPhotos'

import "./styles/gallery.css"
import Footer from '../components/Footer/Footer'

const Gallery = () => {
    return (
        <Row gutter={[0, 40]}>

            <Col span={24} className="gallery-main-col glassmorphism-effect-light">
                <Heading title="Gallery" />
                <Typography.Text>Experience the vibrant energy of Regal Outsource's dynamic work environment through our photo gallery.</Typography.Text>
            </Col>
            
            <Col span={24}>
                {
                    RegalPhotos?.map((src: string, index: number) => {
                        return(
                            <Col span={16} className="regal-img-col glassmorphism-effect-light" key={index}>
                                <Image preview={false} src={src}  />
                            </Col>
                        )
                    })
                }
            </Col>

            <Col>
                <Footer />
            </Col>
        </Row>
    )
}

export default Gallery