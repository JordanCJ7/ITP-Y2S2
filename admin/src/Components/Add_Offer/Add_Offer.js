import '../../Components/Add_Service/Add_service.css'
import ImageUpload from '../../Assets/image_upload.png'
import { useState } from 'react'

const Add_Service = () => {

    const [image, setImage] = useState(false);

    const imageHandler = (e) =>{
        setImage(e.target.files[0])

    }




    return (
        <>
        <div className='Add_Service'>
            <div className='Add_Service-itemfield'>
                <p>Offer Tittle</p>
                <input type='text' name='Service-tittle' placeholder='Type service'/>
            </div>

            <div className='Add_service-price'>
                <div className='Add_Service-itemfield'>
                    <p>Offer</p>
                    <input type='text' name='price' placeholder='Type Price'/>
                </div>
            </div>
            <div className='Add_Service-itemfield'>
                    <p>Duration</p>
                    <input type='text' name='duration' placeholder='Type Duration'/>
                </div>

                <div className='Add_Service-itemfield'>
                    <p>Time</p>
                    <input type='text' name='time' placeholder='Type Time'/>
                </div>

                <div className='Add_Service-itemfield'>
                    <p>Discription</p>
                    <textarea className='Service-text-area'/>
                </div>

                <div className='Add_Service-thumnail-img'>
                    <label htmlFor='file-input'>
                        <img src={image?URL.createObjectURL(image):ImageUpload} className='image-upload' alt='image-upload'/>
                    </label>

                    <input onChange={imageHandler}  type='file' name='image' id='file-input' hidden/>
                </div>

                <button className='Add_service-button'>ADD</button>
        </div>
        
        
        </>

    )
}
export default Add_Service