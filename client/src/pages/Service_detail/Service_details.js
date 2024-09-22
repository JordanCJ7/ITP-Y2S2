import '../../pages/Service_detail/details.css'
import Image1 from "../../Assets/img1.jpeg"
import Image2 from "../../Assets/clock.png"

export const Service_details = () => {
    return (

           <>

           <div className="flex-conte">
            <div className="cad">
               <img src={Image1} alt="men-haircut"/>
            </div>
            </div>
            

            <div className="para">
            <div className="par">
               <p><h1>Men Haircut</h1>A tailored service that includes consultation, precision cutting, and styling.<br/>
               The stylist will assess hair type and preferences to deliver a customized modern styles.<br/>
                Includes shampooing, cutting, and finishing with product application if desired.
               <h2>Duration</h2>
               <div>
                <div>
               <img className="clock" src={Image2} alt="time"/>
               </div>


               <div className="time">
               <h4>30 Minute</h4>
               </div>
               </div>
              
               <div className="price">
                  <h2>Price</h2>
                  <h4 className="rs">Rs.400</h4>
                  <h2 className="day">Time</h2>
                  <h4 className="day">Weekday (8.00 AM - 4.00 PM)</h4>
               </div>

               <div >
                 <button className="btto">Make Appoinment</button>
               
               </div>
              
               </p>
           
 
            </div>
            </div>
            

           </>

    )
}
export default Service_details