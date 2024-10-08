import React from "react";
import './Courses.css'


function Courses(props){
    return(
    <>
        

        <div className="page">

            <div className="main-Container" >

                <div className="img-Container">

                    <div className="imgitem">
                       <img src={props.Img} alt="image 1" className="image"/>
                    </div>
                    <div className="">
                        <p>{props.name}</p>
                    </div>
                    
                </div>   

                <div className="description-Container">

                    <div className="course-prices">

                        <div className="course-price-new">
                        <p>Rs:{props.newprice}</p>
                        </div>
                        <div className="course-price-old">
                        <p>Rs:{props.oldprice}</p>
                        </div>
                                                   
                    </div>
                    <p className="description">{props.description}</p>

                </div>

                <div className="buttonContainer1">
                    <button className="btn2">Enroll Here</button>
                    <button className="btn2">See more...</button>
                </div>


            </div>


        </div>


    </>

    )
}

export default Courses