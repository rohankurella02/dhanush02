import axios from "axios";
import { useEffect, useState } from "react";

function LeaderBord() {
  let [arr,setarr]=useState([]);
    axios.get("http://localhost:4000/Score-api/get-Scores").then((response)=>{
      var tem=response.data.payload
      tem.sort((a,b)=>{
        if(a.Score!=b.Score){
            return a.Score>b.Score?-1:1;
        }
        else{
            return a.Time<b.Time?-1:1;
        }
    })
      setarr(tem)
  }).catch((err)=>{
    alert("Error in fetching data for LeaderBoard")
  })
    // let arr= [
    //     {
    //      "UserName": "Dhanush",
    //      "Score": 100,
    //      "Time": 10,
    //      "Puzzle": "Elephant",
    //      "Timestamp": 1682945226583,
    //      "Date": "5-1-2023",
    //      "No": 1
    //     },
    //     {
    //      "UserName": "Dhanush",
    //      "Score": 90,
    //      "Time": 20,
    //      "Puzzle": "Guitar",
    //      "Timestamp": 1682945239298,
    //      "Date": "5-1-2023",
    //      "No": 2
    //     },
    //     {
    //      "UserName": "Dhanush",
    //      "Score": 75,
    //      "Time": 87,
    //      "Puzzle": "Ocean",
    //      "Timestamp": 1682858850998,
    //      "Date": "4-30-2023",
    //      "No": 3
    //     },
    //     {
    //      "UserName": "Dhanush",
    //      "Score": 100,
    //      "Time": 5,
    //      "Puzzle": "Pizza",
    //      "Timestamp": 1682513278977,
    //      "Date": "4-26-2023",
    //      "No": 4
    //     },
    //     {
    //      "UserName": "Dhanush",
    //      "Score": 55,
    //      "Time": 180,
    //      "Puzzle": "Technology",
    //      "Timestamp": 1682340544729,
    //      "Date": "4-24-2023",
    //      "No": 5
    //     },
    //     {
    //      "UserName": "Ram",
    //      "Score": 30,
    //      "Time": 345,
    //      "Puzzle": "Sunflower",
    //      "Timestamp": 1682686161522,
    //      "Date": "4-28-2023",
    //      "No": 6
    //     },
    //     {
    //      "UserName": "Uday",
    //      "Score": 0,
    //      "Time": 2,
    //      "Puzzle": "Mountains",
    //      "Timestamp": 1682772578688,
    //      "Date": "4-29-2023",
    //      "No": 7
    //     },
    //     {
    //      "UserName": "Yash",
    //      "Score": 0,
    //      "Time": 3,
    //      "Puzzle": "Dragonfly",
    //      "Timestamp": 1682599795408,
    //      "Date": "4-27-2023",
    //      "No": 8
    //     },
    //     {
    //      "UserName": "Yash",
    //      "Score": 55,
    //      "Time": 1,
    //      "Puzzle": "Football",
    //      "Timestamp": 1682772621997,
    //      "Date": "4-29-2023",
    //      "No": 9
    //     },
    //     {
    //      "UserName": "Ram",
    //      "Score": 90,
    //      "Time": 54,
    //      "Puzzle": "Rainforest",
    //      "Timestamp": 1682772657838,
    //      "Date": "4-29-2023",
    //      "No": 10
    //     },
    //     {
    //      "UserName": "Ram",
    //      "Score": 55,
    //      "Time": 60,
    //      "Puzzle": "Sunflower",
    //      "Timestamp": 1682686161532,
    //      "Date": "4-28-2023",
    //      "No": 6
    //     },
    //     {
    //      "UserName": "Yash",
    //      "Score": 30,
    //      "Time": 45,
    //      "Puzzle": "Dragonfly",
    //      "Timestamp": 1682599795418,
    //      "Date": "4-27-2023",
    //      "No": 8
    //     },
    //     {
    //      "UserName": "Uday",
    //      "Score": 90,
    //      "Time": 32,
    //      "Puzzle": "Mountains",
    //      "Timestamp": 1682772578689,
    //      "Date": "4-29-2023",
    //      "No": 7
    //     },
    //     {
    //      "UserName": "Dhanush",
    //      "Score": 100,
    //      "Time": 132,
    //      "Puzzle": "Technology",
    //      "Timestamp": 1682340544719,
    //      "Date": "4-24-2023",
    //      "No": 5
    //     },
    //     {
    //      "UserName": "Ram",
    //      "Score": 75,
    //      "Time": 63,
    //      "Puzzle": "Sunflower",
    //      "Timestamp": 1682686161542,
    //      "Date": "4-28-2023",
    //      "No": 6
    //     },
    //     {
    //      "UserName": "Yash",
    //      "Score": 55,
    //      "Time": 78,
    //      "Puzzle": "Dragonfly",
    //      "Timestamp": 1682599795452,
    //      "Date": "4-27-2023",
    //      "No": 8
    //     },
    //     {
    //      "UserName": "Dhanush",
    //      "Score": 90,
    //      "Time": 36,
    //      "Puzzle": "Guitar",
    //      "Timestamp": 1682945239272,
    //      "Date": "5-01-2023",
    //      "No": 2
    //     },
    //     {
    //      "UserName": "Uday",
    //      "Score": 0,
    //      "Time": 6,
    //      "Puzzle": "Mountains",
    //      "Timestamp": 1682772578662,
    //      "Date": "4-29-2023",
    //      "No": 7
    //     },
    //     {
    //      "UserName": "Ram",
    //      "Score": 30,
    //      "Time": 78,
    //      "Puzzle": "Sunflower",
    //      "Timestamp": 1682686161541,
    //      "Date": "4-28-2023",
    //      "No": 6
    //     },
    //     {
    //      "UserName": "Dhanush",
    //      "Score": 0,
    //      "Time": 95,
    //      "Puzzle": "Ocean",
    //      "Timestamp": 1682858850973,
    //      "Date": "4-30-2023",
    //      "No": 3
    //     },
    //     {
    //      "UserName": "Yash",
    //      "Score": 75,
    //      "Time": 56,
    //      "Puzzle": "Dragonfly",
    //      "Timestamp": 1682599795428,
    //      "Date": "4-27-2023",
    //      "No": 8
    //     },
    //     {
    //      "UserName": "Dhanush",
    //      "Score": 90,
    //      "Time": 124,
    //      "Puzzle": "Technology",
    //      "Timestamp": 1682340544709,
    //      "Date": "4-24-2023",
    //      "No": 5
    //     },
    //     {
    //      "UserName": "Ram",
    //      "Score": 75,
    //      "Time": 313,
    //      "Puzzle": "Sunflower",
    //      "Timestamp": 1682686161528,
    //      "Date": "4-28-2023",
    //      "No": 6
    //     },
    //     {
    //      "UserName": "Uday",
    //      "Score": 55,
    //      "Time": 18,
    //      "Puzzle": "Mountains",
    //      "Timestamp": 1682772578682,
    //      "Date": "4-29-2023",
    //      "No": 7
    //     },
    //     {
    //      "UserName": "Yash",
    //      "Score": 30,
    //      "Time": 82,
    //      "Puzzle": "Dragonfly",
    //      "Timestamp": 1682599795415,
    //      "Date": "4-27-2023",
    //      "No": 8
    //     },
    //     {
    //      "UserName": "Ram",
    //      "Score": 0,
    //      "Time": 23,
    //      "Puzzle": "Sunflower",
    //      "Timestamp": 1682686161508,
    //      "Date": "4-28-2023",
    //      "No": 6
    //     },
    //     {
    //      "UserName": "Yash",
    //      "Score": 75,
    //      "Time": 74,
    //      "Puzzle": "Dragonfly",
    //      "Timestamp": 1682599795409,
    //      "Date": "4-27-2023",
    //      "No": 8
    //     },
    //     {
    //      "UserName": "Uday",
    //      "Score": 90,
    //      "Time": 48,
    //      "Puzzle": "Mountains",
    //      "Timestamp": 1682772578651,
    //      "Date": "4-29-2023",
    //      "No": 7
    //     },
    //     {
    //      "UserName": "Dhanush",
    //      "Score": 55,
    //      "Time": 112,
    //      "Puzzle": "Technology",
    //      "Timestamp": 1682340544709,
    //      "Date": "4-24-2023",
    //      "No": 5
    //     },
    //     {
    //      "UserName": "Yash",
    //      "Score": 0,
    //      "Time": 56,
    //      "Puzzle": "Football",
    //      "Timestamp": 1682772621952,
    //      "Date": "4-29-2023",
    //      "No": 9
    //     },
    //     {
    //      "UserName": "Uday",
    //      "Score": 90,
    //      "Time": 51,
    //      "Puzzle": "Elephant",
    //      "Timestamp": 1682945226549,
    //      "Date": "5-01-2023",
    //      "No": 1
    //     },
    //     {
    //      "UserName": "Yash",
    //      "Score": 30,
    //      "Time": 51,
    //      "Puzzle": "Elephant",
    //      "Timestamp": 1682945226534,
    //      "Date": "5-01-2023",
    //      "No": 1
    //     },
    //     {
    //      "UserName": "Ram",
    //      "Score": 100,
    //      "Time": 67,
    //      "Puzzle": "Elephant",
    //      "Timestamp": 1682945226543,
    //      "Date": "5-01-2023",
    //      "No": 1
    //     },
    //     {
    //      "UserName": "Dhanush",
    //      "Score": 90,
    //      "Time": 78,
    //      "Puzzle": "Elephant",
    //      "Timestamp": 1682945226517,
    //      "Date": "5-01-2023",
    //      "No": 1
    //     },
    //     {
    //      "UserName": "Uday",
    //      "Score": 90,
    //      "Time": 102,
    //      "Puzzle": "Rainforest",
    //      "Timestamp": 16827726578113,
    //      "Date": "4-29-2023",
    //      "No": 10
    //     },
    //     {
    //      "UserName": "Yash",
    //      "Score": 100,
    //      "Time": 98,
    //      "Puzzle": "Rainforest",
    //      "Timestamp": 1682772657825,
    //      "Date": "4-29-2023",
    //      "No": 10
    //     },
    //     {
    //      "UserName": "Ram",
    //      "Score": 75,
    //      "Time": 34,
    //      "Puzzle": "Rainforest",
    //      "Timestamp": 1682772657888,
    //      "Date": "4-29-2023",
    //      "No": 10
    //     },
    //     {
    //      "UserName": "Dhanush",
    //      "Score": 55,
    //      "Time": 95,
    //      "Puzzle": "Rainforest",
    //      "Timestamp": 1682772657806,
    //      "Date": "4-29-2023",
    //      "No": 10
    //     },
    //     {
    //      "UserName": "Dhanush",
    //      "Score": 0,
    //      "Time": 56,
    //      "Puzzle": "Pizza",
    //      "Timestamp": 1682513278954,
    //      "Date": "4-26-2023",
    //      "No": 4
    //     },
    //     {
    //      "UserName": "Dhanush",
    //      "Score": 30,
    //      "Time": 98,
    //      "Puzzle": "Pizza",
    //      "Timestamp": 1682513278924,
    //      "Date": "4-26-2023",
    //      "No": 4
    //     },
    //     {
    //      "UserName": "Dhanush",
    //      "Score": 0,
    //      "Time": 45,
    //      "Puzzle": "Pizza",
    //      "Timestamp": 1682513278978,
    //      "Date": "4-26-2023",
    //      "No": 4
    //     },
    //     {
    //      "UserName": "Dhanush",
    //      "Score": 75,
    //      "Time": 73,
    //      "Puzzle": "Pizza",
    //      "Timestamp": 1682513278998,
    //      "Date": "4-26-2023",
    //      "No": 4
    //     },
    //     {
    //      "UserName": "Dhanush",
    //      "Score": 100,
    //      "Time": 23,
    //      "Puzzle": "Ocean",
    //      "Timestamp": 1682858850964,
    //      "Date": "4-30-2023",
    //      "No": 3
    //     },
    //     {
    //      "UserName": "Dhanush",
    //      "Score": 0,
    //      "Time": 65,
    //      "Puzzle": "Ocean",
    //      "Timestamp": 1682858850914,
    //      "Date": "4-30-2023",
    //      "No": 3
    //     },
    //     {
    //      "UserName": "Dhanush",
    //      "Score": 30,
    //      "Time": 95,
    //      "Puzzle": "Ocean",
    //      "Timestamp": 1682858850985,
    //      "Date": "4-30-2023",
    //      "No": 3
    //     },
    //     {
    //      "UserName": "Yash",
    //      "Score": 75,
    //      "Time": 1,
    //      "Puzzle": "Football",
    //      "Timestamp": 1682772621992,
    //      "Date": "4-29-2023",
    //      "No": 9
    //     },
    //     {
    //      "UserName": "Yash",
    //      "Score": 55,
    //      "Time": 12,
    //      "Puzzle": "Football",
    //      "Timestamp": 1682772621974,
    //      "Date": "4-29-2023",
    //      "No": 9
    //     },
    //     {
    //      "UserName": "Yash",
    //      "Score": 0,
    //      "Time": 4,
    //      "Puzzle": "Football",
    //      "Timestamp": 1682772621978,
    //      "Date": "4-29-2023",
    //      "No": 9
    //     },
    //     {
    //      "UserName": "Dhanush",
    //      "Score": 100,
    //      "Time": 29,
    //      "Puzzle": "Guitar",
    //      "Timestamp": 1682945239204,
    //      "Date": "5-01-2023",
    //      "No": 2
    //     },
    //     {
    //      "UserName": "Dhanush",
    //      "Score": 0,
    //      "Time": 74,
    //      "Puzzle": "Guitar",
    //      "Timestamp": 1682945239252,
    //      "Date": "5-01-2023",
    //      "No": 2
    //     },
    //     {
    //      "UserName": "Dhanush",
    //      "Score": 30,
    //      "Time": 58,
    //      "Puzzle": "Guitar",
    //      "Timestamp": 1682945239207,
    //      "Date": "5-01-2023",
    //      "No": 2
    //     }
    //    ]

  
  return (
    <div className="LeadBoard">
    <h2 className="myHeading mt-4">LEADER BOARD</h2>
    <div class="table-responsive mt-2 mb-5 ms-5 me-5 text-center">
  <table class="table table table-striped table-dark">
  <thead>
  <tr className="table-light">
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
    </div>
  );
}

export default LeaderBord;
