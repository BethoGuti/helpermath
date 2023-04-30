import { Nav } from './components/index';
import { Routes, Route } from 'react-router-dom';
import { Login, Principal, Registration } from "./components";
import { DetailsLessons } from './components/DetailsLessons';
import { Lesson } from './components/Lesson';
import { ProtectedRoute } from './components/ProtectedRoute';
import { AuthProvider } from "./context/AuthContext";
import { AddLesson } from './components/AddLesson';
import { AddPageLesson } from './components/AddPageLesson';
import { LessonProviner } from './context/LessonContext';
import { Btn_Whatssap } from './components/Btn_Whatssap';


export function App() {

  return (
    <AuthProvider>
      <LessonProviner>
        <Nav />
        <Routes>
          <Route path="/" element={<Principal />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registration />} />
          <Route path='/detailsLesson/:id' element={<DetailsLessons />} />
          <Route path='/addLesson' element={<AddLesson />} />
          <Route path='/addPAgeLesson' element={<AddPageLesson />} />
          <Route path='/lesson/:id' element={<ProtectedRoute><Lesson /></ProtectedRoute>} />
        </Routes>
        <Btn_Whatssap />
      </LessonProviner>
    </AuthProvider>
  )
}

