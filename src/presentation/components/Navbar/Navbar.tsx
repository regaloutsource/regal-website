import { Col } from 'antd'

import "./navbar.css"
import { pageRoutes } from '../../../routes/pageRoute'

const Navbar = () => {
    return (
            <Col className="navbar" span={24}>
                <div className="nav-container">
                    <input className="checkbox" type="checkbox" name="" />
                    <Col className="hamburger-lines glassmorphism-effect-dark">
                        <span className="line line1" />
                        <span className="line line2" />
                        <span className="line line3" />
                    </Col>
                    {/* <Col className="logo">
                        <Image preview={false} src={logo} alt="regal_logo" width={100}  />
                    </Col> */}
                    <Col className="menu-items glassmorphism-effect-dark">
                        <li>
                            <a href={`https://regal-website-lyart.vercel.app/${pageRoutes.HOME}`}>Home</a>
                        </li>
                        <li>
                            <a href={`https://regal-website-lyart.vercel.app/${pageRoutes.ABOUT}`}>about</a>
                        </li>
                        <li>
                            <a href="#">blogs</a>
                        </li>
                        <li>
                            <a href="#">portfolio</a>
                        </li>
                        <li>
                            <a href={pageRoutes.CONTACT}>contact</a>
                        </li>
                    </Col>
                </div>
            </Col>
    )
}

export default Navbar