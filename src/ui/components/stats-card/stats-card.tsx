import { Card, Stat } from '@chakra-ui/react'
import React from 'react'

import { StatsCardProps } from './interfaces'

const StatsCard: React.FC<StatsCardProps> = ({ label, value }) => {
  return (
    <Card.Root flex={1}>
      <Card.Body>
        <Stat.Root>
          <Stat.Label>{label}</Stat.Label>
          <Stat.ValueText>{value}</Stat.ValueText>
        </Stat.Root>
      </Card.Body>
    </Card.Root>
  )
}

export default StatsCard