import { z } from 'zod'

import { Course } from '@/domain'

import { courseFormSchema } from './schema'

export type CourseFormData = z.infer<typeof courseFormSchema>

export interface CourseFormProps {
  initialData?: Course
  onSubmit: (data: CourseFormData) => void
  isSubmitting: boolean
}
