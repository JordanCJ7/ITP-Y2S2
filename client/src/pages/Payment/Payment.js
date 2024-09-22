import '../Payment/Payment.css'
import Master from '../../Assets/master.png'
import Visa from '../../Assets/visa.png'




const Payment = () => {
    return (
          <>
          <div className='payment-container'>
            <form className='former'>
            <div className='pay-row'>
                <div className='pay-coloumn'>
                    <h1 className='pay-tittle'>Billing Address</h1>
                    <div className='pay-box'>
                        <label>
                            Full Name  </label>
                            
                             <input type='text' name='Name' placeholder='Enter Name'/>

                    </div>

                    <div className='pay-box'>
                        <label> E-Mail  </label>
                        <input type='email' name='email' placeholder='Enter Email'/>
                    </div>

                    <div className='pay-box'>
                        <label> Address  </label>
                        <input type='text' name='email' placeholder='Enter Adress'/>
                    </div>

                    <div className='pay-box'>
                        <label> City  </label>
                        <input type='text' name='email' placeholder='Enter Adress'/>
                    </div>

                </div>


                <div className='pay-coloumn'>
                    <h1 className='pay-tittle' >Payment</h1>
                    <div className='pay-box'>
                        <label>
                            Card Accepted </label>
                            <div className='pay-card'>
                            <img src={Master} alt="master"/>
                            <img src={Visa} alt="visa"/>
                            </div>
   
                    </div>

                    <div className='pay-box'>
                        <label> Name on Card  </label>
                        <input type='email' name='owner' placeholder='Card Owner'/>
                    </div>

                    <div className='pay-box'>
                        <label> Credit card Number  </label>
                        <input type='number' name='number' placeholder='Enter Card Number'/>
                    </div>
                    
                    <div className='pay-flex'>
                    <div className='pay-box'>
                        <label> Exp.Month  </label>
                        <input type='number' name='month' placeholder='Month'/>
                    </div>

                    <div className='pay-box'>
                        <label> Exp.Year  </label>
                        <input type='number' name='year' placeholder='Year'/>
                    </div>

                    <div className='pay-box'>
                        <label> CVC  </label>
                        <input type='number' name='CVC' placeholder='CVC'/>
                    </div>
                    
                
         

                    </div>


                </div>
            
            </div>
            <div className='pay-button'>
                <button>Pay Now</button>
            </div>
            </form>
          </div>

          
          
          
          
          </>

    )
}
export default Payment