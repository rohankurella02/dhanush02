import { Route, Routes,useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { GrLogout } from "react-icons/gr";
import Button from 'react-bootstrap/Button';
import { clearLoginStatus } from "../Slices/userSlice";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import axios from 'axios';


function Submissions() {
  // let { userObj, isError, isLoading, isSuccess, errMsg } = useSelector(
  //   (state) => state.user
  // );
  // let dispatch = useDispatch();
  let userObj=JSON.parse(localStorage.getItem("Key1"))
  // isSuccess=true
  let user=userObj.UserName
  console.log(user)
  let [arr,setarr]=useState([]);
  let loginstatus=JSON.parse(localStorage.getItem("Login"))
  if(loginstatus==true){
    axios.get("/Score-api/get-Score/"+user)
    .then((response)=>{
        // alert((response.data.message));
        var tem=response.data.payload
        tem.sort((a,b)=>{
          if(a.Timestamp !=b.Timestamp){
              return a.Timestamp>b.Timestamp?-1:1;
          }
          return 0;
        })
        setarr(tem)
    })
    .catch((error)=>{
        console.log(error)
        alert("Something went wrong in fetching Submissions")
    }) 

  }



  return (
    <div className="LeadBoard">
    <h2 className="myHeading mt-4">SUBMISSIONS</h2>
    {
      (arr.length!=0)?(
        <>
        <div class="table-responsive mt-2 mb-5 ms-5 me-5 text-center">
        <table class="table table table-striped table-dark">
        <thead>
        <tr className='table-light'>
          <th scope="col">Number</th>
          <th scope="col">Name</th>
          <th scope="col">Score</th>
          <th scope="col">Duration</th>
          <th scope="col">Date</th>
        </tr>
      </thead>
      <tbody>
        {
          arr.map((x)=>
              <tr>
              <th scope="row">Puzzle {x.No}</th>
              <td>{x.UserName}</td>
              <td>{x.Score}</td>
              <td>{x.Time}</td>
              <td>{x.Date}</td>
              </tr>
      
          )
        }
      
      
      </tbody>
        </table>
      </div>
        </>
      ):
      <>
      <h2 className="myHeading mt-4">NO SUBMISSIONS YET</h2>
      </>
    }
 
    </div>
  );
}

export default Submissions;
