import { Route, Routes } from 'react-router-dom'

import { Courses, CreateCourse, Dashboard, EditCourse } from '@/ui/pages'

export const getRoutes = () => (
  <Routes>
    <Route path="/" element={<Courses />} />
    <Route path="/courses" element={<Courses />} />
    <Route path="/courses/create" element={<CreateCourse />} />
    <Route path="/courses/:id/edit" element={<EditCourse />} />
    <Route path="/courses/dashboard" element={<Dashboard />} />
    <Route path="/health-check" element={<>true</>} />
    <Route path="*" element={<div>Not Found</div>} />
  </Routes>
)
