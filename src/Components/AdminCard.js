import { useEffect, useState } from "react";
import AllCharts from "./AllCharts";
import BarPercent from "./BarPercent";
import Barchart from "./Barchart";
import MaxScore from "./MaxScore";
import TimeLine from "./TimeLine";
import axios from "axios";
function AdminCard() {
  let [arr,setarr]=useState([]);
  useEffect(()=>{
    axios.get("http://localhost:4000/Score-api/get-Scores").then((response)=>{
      var tem=response.data.payload;
      setarr(tem)

  }).catch((err)=>{
    alert("Error in fetching data for LeaderBoard")
  })
  },[arr])



  return (
    <div className="AdminHome">
    <h2 className="myHeading"> SOFT SKILL : COGNITIVE FLEXIBILITY</h2>
     <p className="myHeading">Submissions Track</p>
     <TimeLine item={arr}/>
     <p className="myHeading">Soft Skill Percentage Comparsion</p>
     <BarPercent item={arr}/>
     <p className="myHeading">Individual users Highest Scores</p>
     <MaxScore item={arr}/>
    <p className="myHeading">Min / Max Scores in Individual Puzzle</p>
    <Barchart item={arr}/> 
    <p className="myHeading">Time Consumed by Individual Puzzle</p>
    <AllCharts item={arr}/>
    </div>
  );
}

export default AdminCard;
