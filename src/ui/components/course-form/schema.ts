import { z } from 'zod'

export const courseFormSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
  end_date: z.string().min(1, 'End date is required'),
  videos_size: z.number().min(0, 'Videos size must be a positive number'),
  video_url: z.string().url('Please enter a valid URL').min(1, 'Video URL is required'),
})
