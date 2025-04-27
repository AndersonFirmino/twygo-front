import { Spinner, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

import { CourseCard, PageContainer, PageHeader } from '@/ui/components'
import { useGetCourses } from '@/ui/hooks'

const Courses: React.FC = () => {
  const navigate = useNavigate()
  const { data, isLoading, error } = useGetCourses()

  if (isLoading) return <Spinner size="xl" />
  if (error) return <Text color="red.500">Error loading courses</Text>

  return (
    <PageContainer>
      <PageHeader
        title="Courses"
        actionButton={{
          label: 'Create Course',
          onClick: () => navigate('/courses/create'),
        }}
      />

      <Stack direction="column">
        {data?.courses.map((course) => (
          <CourseCard key={course.id} course={course} onEdit={(id) => navigate(`/courses/${id}/edit`)} />
        ))}
        {data?.courses.length === 0 && <Text>No courses found</Text>}
      </Stack>
    </PageContainer>
  )
}

export default Courses
