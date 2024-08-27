import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from '../src/pages/Home'
import  Header from './components/Header/Header';
import CoursePage from './pages/Course-list-page/CoursePage';
import Enroll from './pages/EnrollForm/Enroll';
import CourseDetailsPage from './pages/course-details/CourseDetailsPage';

function App() {
  return (
    <>
    <Header/>
    <BrowserRouter>
      <Routes>       
        <Route path='/courselist' element={<CoursePage/>}/>
        <Route path='/enroll' element={<Enroll/>}/>
        <Route path='/seedetails' element={<CourseDetailsPage/>}/>
      </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
