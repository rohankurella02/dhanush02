import CardOne from "./Components/CardOne";
import Login from "./Components/Login";
import { Route, Routes,useNavigate } from 'react-router-dom';
import Register from "./Components/Register";
import Barchart from "./Components/Barchart";
import Piechart from "./Components/Piechart";
import AllCharts from "./Components/AllCharts";
import TimeLine from "./Components/TimeLine";
import LeaderBord from "./Components/LeaderBord";
import MaxScore from "./Components/MaxScore";
import NavbarCard from "./Components/NavbarCard";
import Submissions from "./Components/Submissions";
import HighCard from "./Components/HighCard";
import AdminCard from "./Components/AdminCard";


function App() {
  // const navigate=useNavigate();
  // const Logout =()=>{
  //   localStorage.clear();
  //   dispath(clearLoginStatus());
  //   navigate("/");
  // localStorage
  // }
  // <Route path="/" element={} />

  // <Route path="/" element={} />

  // <Route path="/" element={} />

  // <Route path="/" element={} />
  
  return (
    <div className="AppHome">
    <NavbarCard/>
    <Routes>
                <Route path="/" element={<Login/>} />
                {/*<Route path="/" element={<Login />} /> */}
                <Route path="/LeaderBoard" element={<LeaderBord/>} />
                <Route path="/Submissions" element={<Submissions/>} />
                {/*<Route path="/Admin" element={Admin} />*/}
                <Route path="/Register" element={<Register />}/>
                <Route path="/Home" element={<CardOne/>}/>
                <Route path="/Admin" element={<AdminCard/>}/>
      </Routes>
      <div className="row pt-5 mt-5 bg-dark text-light">
      <div class="col ms-4 mt-5 text-center">
          <a href="#" class="navbar-brand text-light">
              <img width="120px" height="120px"
                  src="https://res.cloudinary.com/ddtaj2w6b/image/upload/v1654702034/Personal/LD_uqxuwk.png"
                  alt=""></img></a>
                  <p className='brandlast '>Puzzle</p>
      </div>
      <div className="col last">
              <h4>ADDRESS</h4><hr/>
              <p>Post box No. 10</p>
              <p>Harita, Housar-635 108</p>
              <p>Ph:8897450872 </p>
              <p>Fax: 04344-276865</p>
      </div>
      <div className="col last">
          <h4>CALL US ON</h4><hr/>
          <p>Toll Free: 18002587444</p>
          <p>Ph:+91-9177100359</p>
      </div>
      <div className="col text-center mt-3 last">
           <h5>Email:</h5>
          <h6>ldhanush02@gmail.com</h6>
          <h6>20071a6933@vnrvjiet.in</h6>
          
      </div>
  </div>
    <div className="formContainer">
 {/*   <CardOne/>*/ }
    </div>
    </div>
  );
}

export default App;
