import React from "react"
import '../Courses-Feedback-Page/FeedbackTable.css'
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function FeedbackTable(){

    
    const tfeedbacks = {
        name:"",
        traineeID:"",
        course:"",
        rating:"",
        comment:"",

    };
    const [Tfeedback , setTfeedbacks] = useState(tfeedbacks)
    const navigate = useNavigate();

    const inputHandler = (e) =>{
        const {name, value} = e.target
        console.log(name, value)

        setTfeedbacks({...Tfeedback, [name]: value})
    }

    const submitForm = async(e) =>{
        e.preventDefault();
        console.log(Tfeedback)
        await axios.post("http://localhost:5000/api/courseFeedback",Tfeedback,{headers:{"Content-Type" : "application/json"}})
       
        .then((response) =>{
            console.log("Feedback Enterd Successfully")
            navigate("/")
        })


        .catch((error) =>{
            console.log("error",error)
        })

    }

    return(

        <div className="FeedbackBodyContainer">

            <div class="feedbackContainer">
                <h2 className="traineeTag" >Trainee Feedback</h2>
                    <form onSubmit={submitForm}>
                        <div className="formGroup">
                            <label for="name">Name:</label>
                            <input className="inputBox" type="text" id="name" name="name" required onChange={inputHandler} />
                        </div>
                        <div className="formGroup">
                            <label for="name">Trainee ID:</label>
                            <input className="inputBox" type="text" id="traineeID" name="traineeID" required  onChange={inputHandler}/>
                        </div>
                        <div className="formGroup">
                            <label for="course">Course:</label>
                            <input className="inputBox" type="text" id="course" name="course" required  onChange={inputHandler}/>
                        </div>
                        <div className="formGroup">
                            <label for="rating">Rating (1-5):</label>
                            <input className="inputBox" type="number" id="rating" name="rating" min="1" max="5" required  onChange={inputHandler}/>
                        </div>
                        <div className="formGroup">
                            <label for="comments">Comments:</label>
                            <textarea className="textarea1" id="comment" name="comment" required onChange={inputHandler}></textarea>
                        </div>
                        <button className="feedbackSubmitButton" type="submit">Submit Feedback</button>
                    </form>
            </div>

        </div>

    )
}
export default FeedbackTable