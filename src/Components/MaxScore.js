import HighCard from "./HighCard";
import Piechart from "./Piechart";
import axios from "axios";
import { useState } from "react";
function MaxScore(props) {
   let arr= props.item
     var obj={
      UserName:"",
      Percentage:0
   }
   let HighPercent=[]
   let chfun=(idno)=>{
  let maxValue1 = arr.reduce((acc, value) => {
          return (acc = value.UserName==idno ? (acc.Percentage > value.Percentage ? acc : value):acc);
        },obj);
        HighPercent.push(maxValue1)
      }

const funcall=(x)=>{
  //   chfun("My props",props.idno)
  chfun(x)
    
}
// console.log("Time",time)
var no = [...new Set(arr.map((item) => item.UserName))];
// var no=["Dhanush","Uday","Ram"]
for(var i of no){
  funcall(i)
}

  return (
    <div className="MaxCard">
    {
        HighPercent.map((x)=>
        <HighCard item={x} />
        // console.log(x)

        )
    }

    </div>
  );
}

export default MaxScore;
