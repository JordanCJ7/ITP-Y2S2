import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from '../src/pages/Home'
import  Header from './components/Header/Header';
import CoursePage from './pages/Course-list-page/CoursePage';
import Enroll from './pages/EnrollForm/Enroll';
import CourseDetailsPage from './pages/course-details/CourseDetailsPage';
import CoursesFeedbackPage from './pages/Courses-Feedback-Page/CoursesFeedbackPage';

function App() {
  return (
    <>

    <BrowserRouter>
      <Header/>
      <Routes>       
        <Route path='/courselist' element={<CoursePage/>}/>
        <Route path='/enroll/:id' element={<Enroll/>}/>
        <Route path='/seedetails/:id' element={<CourseDetailsPage/>}/>
        <Route path='/coursefeedback/' element={<CoursesFeedbackPage/>}/>
      </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
