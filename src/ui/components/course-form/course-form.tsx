import { Button, Input, Stack, Textarea, Text } from '@chakra-ui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'

import { CourseFormData, CourseFormProps } from './interfaces'
import { courseFormSchema } from './schema'

const CourseForm: React.FC<CourseFormProps> = ({ initialData, onSubmit, isSubmitting }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CourseFormData>({
    resolver: zodResolver(courseFormSchema),
    defaultValues: {
      title: initialData?.title || '',
      description: initialData?.description || '',
      end_date: initialData?.end_date ? initialData.end_date.split('T')[0] : '',
      videos_size: initialData?.videos_size || 0,
      video_url: initialData?.video_url || '',
    },
  })

  const onSubmitForm = (data: CourseFormData) => {
    onSubmit(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmitForm)}>
      <Stack gap={4}>
        <div>
          <Text as="label" fontWeight="medium" display="block" mb={2}>
            Title
          </Text>
          <Input {...register('title')} placeholder="Course title" />
          {errors.title && (
            <Text color="red.500" fontSize="sm" mt={1}>
              {errors.title.message}
            </Text>
          )}
        </div>

        <div>
          <Text as="label" fontWeight="medium" display="block" mb={2}>
            Description
          </Text>
          <Textarea {...register('description')} placeholder="Course description" rows={4} />
          {errors.description && (
            <Text color="red.500" fontSize="sm" mt={1}>
              {errors.description.message}
            </Text>
          )}
        </div>

        <div>
          <Text as="label" fontWeight="medium" display="block" mb={2}>
            End Date
          </Text>
          <Input {...register('end_date')} type="date" />
          {errors.end_date && (
            <Text color="red.500" fontSize="sm" mt={1}>
              {errors.end_date.message}
            </Text>
          )}
        </div>

        <div>
          <Text as="label" fontWeight="medium" display="block" mb={2}>
            Videos Size (MB)
          </Text>
          <Input {...register('videos_size', { valueAsNumber: true })} type="number" min={0} />
          {errors.videos_size && (
            <Text color="red.500" fontSize="sm" mt={1}>
              {errors.videos_size.message}
            </Text>
          )}
        </div>

        <div>
          <Text as="label" fontWeight="medium" display="block" mb={2}>
            Video URL
          </Text>
          <Input {...register('video_url')} placeholder="https://www.youtube.com/watch?v=example" />
          {errors.video_url && (
            <Text color="red.500" fontSize="sm" mt={1}>
              {errors.video_url.message}
            </Text>
          )}
        </div>

        <Button mt={4} colorScheme="blue" variant="solid" type="submit" loading={isSubmitting} loadingText="Saving">
          {initialData ? 'Update Course' : 'Create Course'}
        </Button>
      </Stack>
    </form>
  )
}

export default CourseForm
