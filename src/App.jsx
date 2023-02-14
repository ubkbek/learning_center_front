import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/login/login';
import Teacher from './pages/teacher/teacher';
import Admin from './pages/admin/admin'
import Student from './pages/student/students';
import NotFound from './pages/notFound/notFound';
import TeacherAdmin from './components/teacher-admin';
import StudentAdmin from './components/student-admin';
import GroupsAdmin from './components/groups-admin';
import CourseAdmin from './components/course-admin';

function App() {
  return (
    <div className="App container">
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/teacher' element={<Teacher/>}/>
        <Route path='/admin' element={<Admin/>}>
          <Route index element={<CourseAdmin />}/>
          <Route path='courses' element={<CourseAdmin />}/>
          <Route path='groups' element={<GroupsAdmin />}/>
          <Route path='students' element={<StudentAdmin />}/>
          <Route path='teachers' element={<TeacherAdmin />}/>
        </Route>
        <Route path='/student' element={<Student/>}/>
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
