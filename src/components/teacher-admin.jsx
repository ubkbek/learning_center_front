import TeacherForm from "./teacherForm/teacherForm"
import AllTeachersForAdmin from "./AllTeachersForAdmin"

const TeacherAdmin = () => {
  return (
    <div className='w-100 ps-5'>
      <h2 className='mb-4'>Add new teacher</h2>
      <TeacherForm />
      <AllTeachersForAdmin />
    </div>
  )
}

export default TeacherAdmin