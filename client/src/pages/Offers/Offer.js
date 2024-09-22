import '../../pages/Offers/offer.css'
import Image1 from "../../Assets/offer.jpeg"
import Image2 from "../../Assets/special.jpeg"
import Image3 from "../../Assets/clock.png"

export const Service_details = () => {
    return (

           <>
           <h1 className="main">Special Offers and Discount</h1>
        
           <div className="flex-cont">
            <div className="cad">
               <img src={Image1} alt="men-haircut"/>
            </div>
            </div>
            

            <div className="para">
            <div className="par">
               <p><h1>Any Haircut</h1>A tailored service that includes consultation, precision cutting, and styling.<br/>
               The stylist will assess hair type and preferences to deliver a customized modern styles.<br/>
                Includes shampooing, cutting, and finishing with product application if desired.
               <h2>Duration</h2>
               <div>
                <div>
               <img className="clock" src={Image3} alt="time"/>
               </div>


               <div className="time">
               <h4>30 Minute</h4>
               </div>
               </div>
              
               <div className="discount">
                  <h2>Offer</h2>
                  <h4 className="off">20% Discount</h4>
                  <h2 className="dline">Deadline</h2>
                  <h4 className="dline">Aug 25 - Dec 12</h4>
               </div>

               <div >
                 <button className="btto">Make Appoinment</button>
               
               </div>
              
               </p>

               
            </div>

            <div className="flex-con">
            <div className="cad">
               <img src={Image2} alt="men-haircut"/>
            </div>
            </div>

            <div className="para">
            <div className="par">
               <p><h1>Special Hair Style</h1>A tailored service that includes consultation, precision cutting, and styling.<br/>
               The stylist will assess hair type and preferences to deliver a customized modern styles.<br/>
                Includes shampooing, cutting, and finishing with product application if desired.
               <h2>Duration</h2>
               <div>
                <div>
               <img className="clock" src={Image3} alt="time"/>
               </div>


               <div className="time">
               <h4>1 hrs</h4>
               </div>
               </div>
              
               <div className="discount">
                  <h2>Offer</h2>
                  <h4 className="off">20% Discount</h4>
                  <h2 className="dline">Deadline</h2>
                  <h4 className="dline">Aug 25 - Dec 12</h4>
               </div>

               <div >
                 <button className="btto">Make Appoinment</button>
               
               </div>
              
               </p>
            </div>
            </div>
            </div>

            

            


           </>

    )
}
export default Service_details