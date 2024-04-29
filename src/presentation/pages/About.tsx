import React, { Suspense } from "react"
import { Col, Flex, Image, Row, Typography } from "antd"
import Heading from "../hocs/Heading"
import ProgressBar from "../hocs/ProgressBar"
import { ProgressBarInterface } from "../../domain/interfaces/ProgressInterface"
import { progressBarData } from "../../domain/constants/ProgressBarData"
import dirPhoto from "../../assets/director.jpg"
import { TeamData } from "../../domain/constants/TeamData"
import { TeamMemberInterface } from "../../domain/interfaces/TeamMemberInterface"
import Footer from "../components/Footer/Footer"

import "./styles/about.css"

const TeamMemberCard = React.lazy(() => import("../hocs/TeamMemberCard"))

const About = () => {
  return (
    <Row gutter={[0, 40]}>
      <Col span={24} className="about-main-col glassmorphism-effect-light">
        <Heading title="About Us" />
        <Typography.Text>A company turning into beautiful ideas</Typography.Text>
      </Col>

      <Flex justify="space-around" align="center">
        <Col span={10}>
          <Typography.Title>Quality Services</Typography.Title>
          <Typography.Text>
            We specialize in data entry and quality examination. When we receive data from our clients, our primary goal is to execute the tasks within the specified deadline while maintaining high quality standards. Once the data is entered into our system, we meticulously examine it to ensure accuracy and consistency. This involves thorough checks for any errors, discrepancies, or inconsistencies. Once we've completed our examination and made any necessary corrections, the data is finalized for delivery to the client. Our meticulous process ensures that the data we provide is accurate, reliable, and meets our clients' expectations.
          </Typography.Text>
        </Col>
        <Col span={10}>
          {
            progressBarData?.map((data: ProgressBarInterface, index: number) => {
              return (
                <ProgressBar progressData={data} key={index} />
              )
            })
          }
        </Col>
      </Flex>

      <Flex justify="space-around" align="center" className="dir-mess-flex glassmorphism-effect-light">
        <Col span={12}>
          <Image preview={false} src={dirPhoto} alt="director's photo" />
        </Col>
        <Col span={10}>
          <Typography.Title>Director's Message</Typography.Title>
          <Typography.Paragraph>We believe in quality outputs, meeting deadlines, and high customer satisfaction by implementing our policies and unmatched management style in a harmonious work environment.</Typography.Paragraph>
          <Typography.Text> <b> Mr. Sanjay Nagda <br /> Managing Director & CEO </b> </Typography.Text>
        </Col>
      </Flex>

      <Flex justify="space-around" vertical style={{ margin: "2vmax" }}>
        <Typography.Title>Meet Core Team</Typography.Title>
        <Row gutter={[20, 50]}>
          {
            TeamData?.map((data: TeamMemberInterface, index: number) => {
              return (
                <Col key={index} xs={12} md={8} lg={6}>
                  <Suspense fallback="">
                    <TeamMemberCard teamData={data} />
                  </Suspense>
                </Col>
              )
            })
          }
        </Row>
      </Flex>

      {/* Footer */}
      <Footer />
    </Row>
  )
}

export default About