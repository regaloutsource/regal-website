import { Col, Flex, Typography } from 'antd'
import React, { useEffect, useState } from 'react'

type IFooterChips = {
    icon: any,
    title: string,
    subtitle: string,
    value: string
}
const FooterChips: React.FC<IFooterChips> = ({ icon, title, subtitle, value }) => {
    const [href, setHref] = useState<string>("");

    useEffect(() => {
        if(value.includes("@")){
            setHref("mailto:"+value)
        } 
       else if(value.includes("+")){
            setHref("tel:"+value)
        }
        else {
            setHref("https://maps.app.goo.gl/DX3sokg13jxah2B29")
        }
    }, [])

  return (
    <Flex>
        <Col style={{ margin: ".6vmax" }}>
            {icon}
        </Col>
        <Flex vertical>
            <Typography.Text className="footer-title-text">{title}</Typography.Text>
            <Typography.Text className="footer-sub-text">{subtitle}</Typography.Text>
            <Typography.Link href={href} target='_blank' className="footer-value-text">{value}</Typography.Link>
        </Flex>
    </Flex>
  )
}

export default FooterChips