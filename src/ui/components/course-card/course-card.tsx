import { Button, Card } from '@chakra-ui/react'
import React from 'react'

import { CourseCardProps } from './interfaces'

const CourseCard: React.FC<CourseCardProps> = ({ course, onEdit, onDelete }) => {
  return (
    <Card.Root key={course.id} width="100%">
      <Card.Body gap="2">
        <Card.Title>{course.title}</Card.Title>
        <Card.Description>{course.description}</Card.Description>
      </Card.Body>
      <Card.Footer justifyContent="flex-start">
        <Button size="sm" colorScheme="blue" variant="outline" onClick={() => onEdit(course.id)}>
          Edit
        </Button>
        {onDelete && (
          <Button size="sm" colorScheme="red" onClick={() => onDelete(course.id)}>
            Delete
          </Button>
        )}
      </Card.Footer>
    </Card.Root>
  )
}

export default CourseCard
