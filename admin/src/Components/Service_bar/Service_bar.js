import '../Service_bar/Service_bar.css'
import { Link } from 'react-router-dom'
import Serviceicon from '../../Assets/addserviceicon.png'
import listservice from '../../Assets/listserviceicon.png'

const Service_bar = () =>{
    return (
        <>
        
        <div className='service-bar'>
            <Link to={'/AddService'} style={{textDecoration:"none"}}>

                <div className='service-bar-item'>
                    <img src={Serviceicon} alt="serviceicon"/>
                    <p>Add Service</p>

                </div>
            </Link>
             <Link to={'/ListService'} style={{textDecoration:"none"}}>

                <div className='service-bar-item'>
                    <img src={listservice} alt="listicon"/>
                    <p>Service List </p>
                    
                </div>
            </Link>
            <Link to={'/AddOffer'} style={{textDecoration:"none"}}>

                <div className='service-bar-item'>
                    <img src={Serviceicon} alt="serviceicon"/>
                    <p>Add Offer</p>

                </div>
            </Link>
            <Link to={'/ListOffer'} style={{textDecoration:"none"}}>

                <div className='service-bar-item'>
                    <img src={listservice} alt="listicon"/>
                    <p>Offer List </p>
                    
                </div>
            </Link>
            

            
        </div>
        
        
        
        </>

    )
}
export default Service_bar