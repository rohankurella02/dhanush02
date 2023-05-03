import { Chart as ChartJS, BarElement,CategoryScale,LinearScale ,ArcElement, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
import { useState } from "react";
import axios from "axios";
ChartJS.register(ArcElement, BarElement,CategoryScale,LinearScale, Tooltip, Legend);
function BarPercent(props) {
    console.log(props)
    let arr= props.item
     let mx=[]
     let mn=[]
     let chfun=(x)=>{
     let maxValue1 = arr?.reduce((acc, value) => {
      return (acc = value.No==x ? (acc > value.Percentage ? acc : value.Percentage):acc);
    }, 0);
    let minValue1 = arr?.reduce((acc, value) => {
      return (acc = value.No==x && value.Percentage!=0 ? (acc < value.Percentage ? acc : value.Percentage):acc);
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
            label:'Maximum Soft skill Percentage',
            data:mx,
            backgroundColor:'rgba(255, 99, 132, 0.5)',
            borderColor:'black',
            borderWidth:1
        },
        {
          label:'Minimum Soft skill Percentage',
          data:mn,
          backgroundColor:'rgba(255, 159, 64, 0.5)',
          borderColor:'black',
          borderWidth:1
      }
      ]
     }
     let options={
      maintainAspectRatio:false,
     }
  return (
    <div className="BarPercent">
    <div className="bar"
    style={
      {height:'300px'}
    }
    >
    <Bar
  data={data}
  options={options}
  
/>
    </div>
    </div>
  );
}

export default BarPercent;
