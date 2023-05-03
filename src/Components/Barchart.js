import axios from "axios";
import { Chart as ChartJS, BarElement,CategoryScale,LinearScale ,ArcElement, Tooltip, Legend } from "chart.js";
import { useState } from "react";
import { Bar } from "react-chartjs-2";

ChartJS.register(ArcElement, BarElement,CategoryScale,LinearScale, Tooltip, Legend);
function Barchart(props) {
    console.log("Barchart",props.item)
    let mx=[]
    let mn=[]
    let tem=props.item
    let chfun=(x)=>{
    let maxValue1 = tem.reduce((acc, value) => {
     return (acc = value.No==x ? (acc > value.Score ? acc : value.Score):acc);
   }, 0);
   let minValue1 = tem.reduce((acc, value) => {
     return (acc = value.No==x && value.Score!=0 ? (acc < value.Score ? acc : value.Score):acc);
   }, 101);
   mx.push(maxValue1)
   mn.push(minValue1)
 }
 const funcall=()=>{
   for(var i=1;i<11;i++){
     chfun(i)
   }
 }
 console.log("Max",mx,"Min",mn)
    funcall()

  const data={
    labels:["Elephant", "Guitar", "Ocean", "Pizza", "Technology", "Sunflower", "Mountains", "Dragonfly", "Football", "Rainforest"],
    datasets:[
      {
          label:'Maximum Score',
          data:mx,
          backgroundColor:'rgba(54, 162, 235, 0.5)',
          borderColor:'rgba(54, 162, 235, 1)',
          borderWidth:1
      },
      {
        label:'Minimum Score',
        data:mn,
        backgroundColor:'rgba(255, 99, 132, 0.5)',
        borderColor:'rgba(54, 162, 235, 1)',
        borderWidth:1
    }
    ]
   }
   console.log("OutSide",mx,mn,data)
  return (
    <div className="Barchart">
    <div className="bar"
    style={
      {height:'300px'}
    }
    >
    <Bar
  data={data}
  options={{maintainAspectRatio:false}}
  
/>
    </div>
    </div>
  );
}

export default Barchart;
