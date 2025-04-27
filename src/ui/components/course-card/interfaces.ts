import { Course } from '@/domain'

export interface CourseCardProps {
  course: Course
  onEdit: (id: number) => void
  onDelete?: (id: number) => void
}
