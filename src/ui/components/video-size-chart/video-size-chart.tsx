import { Chart, useChart } from '@chakra-ui/charts'
import { Box, Center, Heading } from '@chakra-ui/react'
import React from 'react'
import { Cell, LabelList, Pie, PieChart, Tooltip } from 'recharts'

import { VideoSizeChartProps } from './interfaces'

const VideoSizeChart: React.FC<VideoSizeChartProps> = ({ chartData }) => {
  const chart = useChart({
    data: chartData,
  })

  return (
    <Box mt={8}>
      <Center>
        <Heading as="h3" size="md" mb={4}>
          Video Size Distribution
        </Heading>
      </Center>
      <Center>
        <Chart.Root boxSize="320px" mx="auto" chart={chart}>
          <PieChart>
            <Tooltip
              cursor={false}
              animationDuration={100}
              content={
                <Chart.Tooltip
                  formatter={(value, _name, props) => {
                    const item = props.payload
                    return item ? item.formattedValue : value
                  }}
                />
              }
            />
            <Pie isAnimationActive={false} data={chart.data} dataKey={chart.key('value')}>
              <LabelList dataKey={chart.key('formattedValue')} position="inside" fill="white" stroke="none" />
              {chart.data.map((item) => (
                <Cell key={item.name} fill={chart.color(item.color)} />
              ))}
            </Pie>
          </PieChart>
        </Chart.Root>
      </Center>
    </Box>
  )
}

export default VideoSizeChart