import 'animate.css';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useForm } from "react-hook-form";
import { AiFillYoutube,AiFillTwitterCircle } from "react-icons/ai";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { userLogin } from '../Slices/userSlice';
import Register from './Register';

import { MdOutlineAccountCircle } from "react-icons/md";
import { GrLogin } from "react-icons/gr";

function Login() {
  let [logInData,newlogInData]=useState([]);
  let [myData,setmyData]=useState({});
  let navigate=useNavigate();
  let { userObj, isError, isLoading, isSuccess, errMsg } = useSelector(
    (state) => state.user
  );
  let dispatch = useDispatch();
  const { register, handleSubmit, formState:{errors} } = useForm();

  useEffect(()=>{
    let loginstatus=JSON.parse(localStorage.getItem("Login"))
    let obj2=JSON.parse(localStorage.getItem("Key1"))
    if(loginstatus==true){
      if(obj2.UserName!='Dhanush'){
        navigate('/Home')
      }
      else{
        navigate("/Admin")
      }
      
    }
  })

  const onSubmit = xdata =>{ 
      newlogInData([...logInData,xdata]);
      // console.log(xdata)
      dispatch(userLogin(xdata));
    // console.log(xdata)
    setmyData(xdata)
    localStorage.setItem("Key1",JSON.stringify(xdata))
    localStorage.setItem("Login",JSON.stringify(true))
    };
    useEffect(() => {
      if (isSuccess) {

        navigate('/Home')
      }
    }, [isSuccess, isError]);
       navigate=useNavigate();
      const TranferToRegister =()=>{
        navigate('/Register')
      }

  return (
    <div className='login body1'>
    <div className="App">
     <img  className="w-50 d-block mx-auto rounded" src="https://res.cloudinary.com/ddtaj2w6b/image/upload/v1654702034/Personal/LD_uqxuwk.png"/>
    <h1 className='display-4 title mt-3 mb-5 text-center'>DHANUSH LOKAM</h1>
    </div>
    <div className='form container'>
    <Tabs defaultActiveKey="Log In" id="uncontrolled-tab-example" className="mb-3 tab">
  <Tab eventKey="Log In" title="Log In">
    <img src="https://raw.githubusercontent.com/ldhanush02/MERNWEBSITE/6f0033648d8a644ac516de56aea8a6d880ff6607/src/Components/Images1/Login.svg"
     className="w-25 mx-auto d-block mypic"/>
    <Form onSubmit={handleSubmit(onSubmit)} className='shadow-lg text-center border rounded border-2 border-dark  w-50 p-3 m-1 mt-3 mx-auto form1 bg-white'> 
  <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
    <Form.Control type="text" placeholder="Username" {...register("UserName",{required: true})}  />
    {errors.Name?.type==='required' && <p className='text-danger text-start '>*This field is required</p>}
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Control type="password" placeholder="Password" {...register("Password",{required: true})} />
    {errors.Password?.type==='required' && <p className='text-danger text-start '>*This field is required</p>}
  </Form.Group>
  <Button variant="primary" size="lg" className='w-100' type='submit'>
   Log In<GrLogin/> 
  </Button>
    <hr/>
    <Button variant="success" size="lg" className='w-100' onClick={TranferToRegister}
   > Create New Account<MdOutlineAccountCircle/>
  </Button>
  <div className='socialiconsparent '>
   <div><span className="socialicons text-primary "> <FaFacebook/></span></div>
   <div><span className="socialicons text-warning "><BsInstagram/></span></div>
   <div><span className="socialicons text-primary "><AiFillTwitterCircle/></span></div>
   <div><span className="socialicons text-danger "><AiFillYoutube/></span></div>
  </div>
</Form>
<p className='mt-2 pt-2 text-center'><span className='fw-bold'>Create a Account</span> for a improving Soft Skills</p>

  </Tab>
  <Tab eventKey="Register" title="Register">
    <Register/>
  </Tab>

</Tabs>
    
    </div>
    </div>
  );
}

export default Login;