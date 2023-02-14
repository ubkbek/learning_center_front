import React from 'react'
import StudentForm from './studentForm.jsx/studentForm'
import AllStudents from './allStudents'

const StudentAdmin = () => {
  return (
    <div className='w-100 ps-5'>
      <h2 className='h3 mb-4'>Add new student</h2>
      <StudentForm />
      <AllStudents/>
    </div>
  )
}

export default StudentAdmin