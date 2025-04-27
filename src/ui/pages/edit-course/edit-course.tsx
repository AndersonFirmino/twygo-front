import { Spinner } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { Breadcrumb, CourseForm, CourseFormData, PageContainer, PageHeader, toaster } from '@/ui/components'
import { useGetCourse, useUpdateCourse } from '@/ui/hooks'

const EditCourse: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const courseId = id ? parseInt(id, 10) : 0
  const navigate = useNavigate()

  const { data: courseData, isLoading, error: fetchError } = useGetCourse(courseId)
  const { mutate, isPending } = useUpdateCourse()

  useEffect(() => {
    if (fetchError) {
      toaster.create({
        title: 'Error loading course',
        description: 'There was an error loading the course. Please try again.',
        type: 'error',
      })
      navigate('/courses')
    }
  }, [fetchError, navigate])

  const handleSubmit = (formData: CourseFormData) => {
    mutate(
      { id: courseId, ...formData },
      {
        onSuccess: () => {
          navigate('/courses')
        },
        onError: () => {
          toaster.create({
            title: 'Error updating course',
            description: 'There was an error updating the course. Please try again.',
            type: 'error',
          })
        },
      },
    )
  }

  if (isLoading) return <Spinner size="xl" />
  if (!courseData?.course) {
    toaster.create({
      title: 'Course not found',
      description: 'The requested course could not be found.',
      type: 'error',
    })
    navigate('/courses')
    return null
  }

  return (
    <PageContainer>
      <Breadcrumb />
      <PageHeader title="Edit Course" />
      <CourseForm initialData={courseData.course} onSubmit={handleSubmit} isSubmitting={isPending} />
    </PageContainer>
  )
}

export default EditCourse
