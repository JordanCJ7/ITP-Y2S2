import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from '../src/pages/Home'
import  Header from './components/Header/Header';
import Service from './pages/Service/Service';
import Offer from './pages/Offers/Offer';
import Payment from './pages/Payment/Payment';
import Succes from './pages/Payment/Succes';
import Service_details from './pages/Service_detail/Service_details';

function App() {
  return (
    <>
   
    <BrowserRouter>
    {/* <Header/> */}
      <Routes>       
        <Route path='/Service' element={<Service/>}/>
        <Route path='/Offer' element={<Offer/>}/>
        <Route path='/Service_details' element={<Service_details/>}/>
        <Route path='/Payment' element={<Payment/>}/>
        <Route path='/Succes' element={<Succes/>}/>
      </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
