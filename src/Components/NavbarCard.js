import { Route, Routes,useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { GrLogout } from "react-icons/gr";
import Button from 'react-bootstrap/Button';
import { clearLoginStatus } from "../Slices/userSlice";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from 'react';


function NavbarCard() {
  let [userinfo,setUserInfo]=useState(false);
  let { userObj, isError, isLoading, isSuccess, errMsg } = useSelector(
    (state) => state.user
  );
  let dispath = useDispatch();
  if(isSuccess==true){
  let userObj1=JSON.parse(localStorage.getItem("Key1"))
  // isSuccess=true
  let user=userObj.UserName
  if(user=='Dhanush'){
    setUserInfo(true)
  }
}
  const navigate=useNavigate();
  const logoutfun=()=>{
    localStorage.clear();
    dispath(clearLoginStatus());
    navigate("/");
  }

  return (
    <div className="NavbarCardHome">

  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='mb-2'>
      <Container>
      <a href="/Home" className="navbar-brand text-info">
      <img className='d-block mx-auto mt-1' src='https://res.cloudinary.com/ddtaj2w6b/image/upload/v1654702034/Personal/LD_uqxuwk.png' 
      width='50px' height="50px"></img>
                </a>
        <Navbar.Brand href="/Home">Puzzle</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link  className='ms-5 me-5' href="/Home">Home</Nav.Link>
          <Nav.Link className='ms-5 me-3' href="/LeaderBoard">LeaderBord</Nav.Link>
          <Nav.Link className='ms-5 me-5' href="/Submissions">Submission</Nav.Link>
       
          <Button variant="primary" size="sm" className='w-75 ms-5 '  type='submit' onClick={logoutfun} >
          Log out <GrLogout/> 
         </Button>

          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>

    </div>
  );
}

export default NavbarCard;
