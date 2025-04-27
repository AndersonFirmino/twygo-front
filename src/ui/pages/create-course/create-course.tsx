import React from 'react'
import { useNavigate } from 'react-router-dom'

import { Breadcrumb, CourseForm, CourseFormData, PageContainer, PageHeader } from '@/ui/components'
import { toaster } from '@/ui/components/toaster'
import { useCreateCourse } from '@/ui/hooks'

const CreateCourse: React.FC = () => {
  const navigate = useNavigate()
  const { mutate, isPending } = useCreateCourse()

  const handleSubmit = (data: CourseFormData) => {
    mutate(data, {
      onSuccess: () => {
        navigate('/courses')
      },
      onError: () => {
        toaster.create({
          title: 'Error creating course',
          description: 'There was an error creating the course. Please try again.',
          type: 'error',
        })
      },
    })
  }

  return (
    <PageContainer>
      <Breadcrumb />
      <PageHeader title="Create Course" />
      <CourseForm onSubmit={handleSubmit} isSubmitting={isPending} />
    </PageContainer>
  )
}

export default CreateCourse
