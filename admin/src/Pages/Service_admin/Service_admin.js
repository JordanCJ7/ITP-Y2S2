import '../Service_admin/Service_admin.css'
import Service_bar from '../../Components/Service_bar/Service_bar'
import { Routes, Route } from "react-router-dom"
import Add_Service from '../../Components/Add_Service/Add_Service'
import List_service from '../../Components/List_service/List_Service'
import Add_Offer from '../../Components/Add_Offer/Add_Offer'
import List_Offer from '../../Components/List_Offer/List_Offer'


const Service_admin = () => {
    return (

        <>
        <div className='Service-admin'>
        <Service_bar/>

        <Routes>

            <Route path='/AddService' element={<Add_Service/>}/>
            <Route path='/ListService' element={<List_service/>}/>
            <Route path='/AddOffer' element={<Add_Offer/>}/>
            <Route path='/ListOffer' element={<List_Offer/>}/>



        </Routes>
        </div>
        
        
        
        </>



    )
}
export default Service_admin