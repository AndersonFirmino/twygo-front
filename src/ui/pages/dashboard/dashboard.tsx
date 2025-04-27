import { Flex, Spinner, Stack, Text } from '@chakra-ui/react'
import React from 'react'

import { Breadcrumb, PageContainer, PageHeader, StatsCard, VideoSizeChart } from '@/ui/components'
import { useGetTotalVideosSize } from '@/ui/hooks'
import { formatFileSize, formatNumber } from '@/ui/utils'

const Dashboard: React.FC = () => {
  const { data, isLoading, error } = useGetTotalVideosSize()

  const chartData = [
    {
      name: 'Average Size',
      value: data?.average_videos_size || 0,
      color: 'blue.solid',
      formattedValue: `${formatFileSize(data?.average_videos_size || 0)} MB`,
    },
    {
      name: 'Total Size',
      value: data?.total_videos_size || 0,
      color: 'teal.solid',
      formattedValue: `${formatFileSize(data?.total_videos_size || 0)} MB`,
    },
  ]

  if (isLoading) return <Spinner size="xl" />
  if (error) return <Text color="red.500">Error loading dashboard data</Text>

  return (
    <PageContainer>
      <Breadcrumb />
      <PageHeader title="Dashboard" />

      <Stack>
        <Flex justifyContent="space-between" gap={4}>
          <StatsCard label="Total Courses" value={formatNumber(data?.total_courses || 0)} />
          <StatsCard label="Average Video Size" value={`${formatFileSize(data?.average_videos_size || 0)} MB`} />
          <StatsCard label="Total Video Size" value={`${formatFileSize(data?.total_videos_size || 0)} MB`} />
        </Flex>

        <VideoSizeChart chartData={chartData} />
      </Stack>
    </PageContainer>
  )
}

export default Dashboard
