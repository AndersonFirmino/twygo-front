import { Route, Routes } from 'react-router-dom'

import { Courses, CreateCourse, EditCourse } from '@/ui/pages'

export const getRoutes = () => (
  <Routes>
    <Route path="/courses" element={<Courses />} />
    <Route path="/courses/create" element={<CreateCourse />} />
    <Route path="/courses/:id/edit" element={<EditCourse />} />
    <Route path="/health-check" element={<>true</>} />
    <Route path="*" element={<div>Not Found</div>} />
  </Routes>
)
