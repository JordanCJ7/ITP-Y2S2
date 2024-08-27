import React from 'react'
import '../course-details/CourseDetails.css'


function CourseDetails () {
    return(

        <div className='page-container'>
            <div className='coursedetails-container'>
                <div className='image-container'>
                    <img src='' alt=''/>
                </div>
                <div className='right-container'>
                    <div className='name-and-rating'>
                        <p className='course-name-tag'>This is Name</p>
                        <p className='star-container'>this is star container</p>
                    </div>                  
                    <div className='course-price-container'>
                        <p className='new-price-tag'>new price tag</p>
                        <p className='old-price-tag'>old price tag</p>
                    </div>
                    <div className='description-part'>
                        <p className='full-description-part'>Short paragraphs have several advantages over long ones when it comes to web content. First, they make your content easier to scan and skim, which is how most online readers consume information. Short paragraphs create more white space, which helps to reduce visual clutter and improve readability.</p>
                        <p className='instructure-details'>instructor Details</p>
                    </div>
                    <div className='course-details-button-container'>
                        <button className='course-details-enroll-button'>Enroll Now</button>
                    </div>
                    

                </div>

            </div>
        </div>

    )
}
export default CourseDetails
