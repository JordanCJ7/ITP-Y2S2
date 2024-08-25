import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from '../src/pages/Home'
import  Header from './components/Header/Header';

function App() {
  return (
    <>
    <Header/>
    <BrowserRouter>
      <Routes>
        
        {/* <Route path='/' element={<Home/>}/> */}
      </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
