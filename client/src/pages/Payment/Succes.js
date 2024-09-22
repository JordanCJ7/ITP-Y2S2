import Success from '../../Assets/success.gif'
import '../Payment/Succes.css'

const Succes = () =>{
    return (

         <>
            <div className='gif-container'>
            <div className='gif'>
                <img src={Success} alt='gif'/>
                <h3>Payment Successfull</h3>

                <div className='success-butt'>
                <button className='succes-button'>Continue</button>
                <button className='succes-button '>Downlad Receipt</button>
                </div>
            </div>
            
            </div>
            
        
         
         </>


    )
}
export default Succes