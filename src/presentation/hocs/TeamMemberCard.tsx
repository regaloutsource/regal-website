import React from 'react'
import { Col, Image, Typography } from 'antd'
import { TeamMemberInterface } from '../../domain/interfaces/TeamMemberInterface'

import "./styles/teamMember.css"

type ITeamCard = {
    teamData: TeamMemberInterface
}
const TeamMemberCard: React.FC<ITeamCard> = ({ teamData }) => {
  return (
    <Col span={24} className="team-card-col glassmorphism-effect-light">
        <Image src={teamData.image} alt={teamData.name} preview={false} height={200} />
        <Typography.Title>{teamData.name}</Typography.Title>
        <Typography.Text>{teamData.desp}</Typography.Text>
    </Col>
  )
}

export default TeamMemberCard