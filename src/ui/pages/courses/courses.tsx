import { Spinner, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

import { CourseCard, PageContainer, PageHeader } from '@/ui/components'
import { toaster } from '@/ui/components/toaster'
import { useDeleteCourse, useGetCourses } from '@/ui/hooks'

const Courses: React.FC = () => {
  const navigate = useNavigate()
  const { data, isLoading, error } = useGetCourses()
  const { mutate: deleteCourse } = useDeleteCourse()

  const handleDelete = (id: number) => {
    deleteCourse(id, {
      onSuccess: () => {
        toaster.create({
          title: 'Course deleted',
          description: 'The course has been successfully deleted.',
          type: 'success',
        })
      },
      onError: () => {
        toaster.create({
          title: 'Error deleting course',
          description: 'There was an error deleting the course. Please try again.',
          type: 'error',
        })
      },
    })
  }

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
          <CourseCard
            key={course.id}
            course={course}
            onEdit={(id) => navigate(`/courses/${id}/edit`)}
            onDelete={handleDelete}
          />
        ))}
        {data?.courses.length === 0 && <Text>No courses found</Text>}
      </Stack>
    </PageContainer>
  )
}

export default Courses
