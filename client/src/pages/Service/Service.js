import '../../pages/Service/Service.css'
import {  Link  } from 'react-router-dom'
import Image1 from '../../Assets/men.jpeg'
import Image2 from "../../Assets/girl.jpeg"
import Image3 from "../../Assets/color.jpeg"
import Image4 from "../../Assets/dry.jpeg"




export const Service = () => {  

    return (
        <>
       
   <h1 className="hair">SERVICES</h1>
            
         <div className="container">
            <div className="card">
               <img src={Image1} alt="men-haircut"/>
               <div className="card-cont">
                  <h1>Men's Cut</h1>
                  <Link to="/Service_details">
                  <button className="btn"> Select</button>
                  </Link>
                  
               </div>
            </div>

            <div className="card">
               <img src={Image2} alt="men-haircut"/>
               <div className="card-cont">
                  <h1>Women's Haircut</h1>
                  <button className="btn">Select</button>
               </div>
            </div>

            <div className="card">
               <img src={Image3} alt="men-haircut"/>
               <div className="card-cont">
                  <h1>Collor collection</h1>
                  <button className="btn">Select</button>
               </div>
            </div>
            <div className="card">
               <img src={Image4} alt="men-haircut"/>
               <div className="card-cont">
                  <h1>Blow Dry & Style</h1>
                  <button className="btn">Select</button>
               </div>
            </div>

            
         </div>
           
<h1 className="top">Special Offers and Discount</h1>
            <Link to="/Offer">
            <button className="disbut">View Offers and Discount</button>
            </Link>
           
            



        </>
        
    )
}

export default Service        