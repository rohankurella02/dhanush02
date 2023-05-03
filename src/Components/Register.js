import 'animate.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {FcCalendar} from "react-icons/fc";
import { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { BsTwitter,BsInstagram } from "react-icons/bs";
import { AiFillYoutube,AiFillTwitterCircle } from "react-icons/ai";
function Register() {
    let [registerData,newRegisterData]=useState([]);
    let navigate=useNavigate();
    const { register, handleSubmit, formState:{errors} } = useForm();
    const onSubmit = data =>{ 
        newRegisterData([...registerData,data]);
        // console.log(data)
        // console.log(data.photo.length)
        data.userType='User'
        console.log(data)
        axios.post("/user-api/create-users",data)
        .then((response)=>{
            alert((response.data.message));
            if(response.data.message==="User has created Successfully.Now please Login"){
              navigate("/")
            }
        })
        .catch((error)=>{
            console.log(error)
            alert("Something went wrong in creating user")
        }) 
      };
  return (
    <div className='register p-3'>
      <img src="https://raw.githubusercontent.com/ldhanush02/MERNWEBSITE/6f0033648d8a644ac516de56aea8a6d880ff6607/src/Components/Images1/Welcome.svg"
       className="w-25 mx-auto d-block"/>
 <Form onSubmit={handleSubmit(onSubmit)} className='shadow-lg text-center border rounded border-2 border-dark  w-50 p-3 m-1 mt-3 mx-auto form1 bg-white'>
    <div className='text-start'>
    <h1 className='googleFont fw-bold'>Sign Up</h1>
    <p>It's quick and easy.</p>
    <hr></hr>
    </div>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Control type="email" placeholder="Email Adress or Phone number" {...register("Email",{required: true})} />
    {errors.Email?.type==='required' && <p className='text-danger text-start '>*This field is required</p>}
  </Form.Group>
  <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
    <Form.Control type="text" placeholder="Username" {...register("UserName",{required: true})}  />
    {errors.Name?.type==='required' && <p className='text-danger text-start '>*This field is required</p>}
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Control type="password" placeholder="Password" {...register("Password",{required: true})} />
    {errors.Password?.type==='required' && <p className='text-danger text-start '>*This field is required</p>}
  </Form.Group>
              
<p className='terms'>By clicking Sign Up, you agree to our Terms, Data Policy and Cookie Policy.
     You may receive SMS notifications from us and can opt out at any time.</p>
    <Button variant="success" size="lg" className='w-100' type='submit'>
    Sign Up
  </Button>
  <div className='socialiconsparent'>
   <div><span className="socialicons text-primary "> <FaFacebook/></span></div>
   <div><span className="socialicons text-warning "><BsInstagram/></span></div>
   <div><span className="socialicons text-primary "><AiFillTwitterCircle/></span></div>
   <div><span className="socialicons text-danger "><AiFillYoutube/></span></div>
  </div>
</Form>
    </div>
  );
}

export default Register;