
import { Chart as ChartJS, LineElement,CategoryScale,LinearScale ,PointElement, Tooltip, Legend } from "chart.js";
import { Doughnut, Line, Pie } from "react-chartjs-2";
import { useState } from "react";
import axios from "axios";
ChartJS.register(LineElement,CategoryScale,LinearScale, Tooltip, Legend,PointElement);
function TimeLine(props) {
    console.log(props)
   let arr=props.item
const countBy = (arr, prop) => arr?.reduce((prev, curr) => (prev[curr[prop]] = ++prev[curr[prop]] || 1, prev), {});
// console.log("CountBy",countBy(arr,"Date"))
let reducedArray=countBy(arr,'Date')
console.log(reducedArray)
// Dates Array
let ArrayDates=[]
// No od Submissions array
let ArrayValues=[]
for (const key in reducedArray){
    ArrayDates.push(key)
    ArrayValues.push(reducedArray[key])
}
console.log("Dates",ArrayDates,ArrayValues)
const labels = ['1','2','3','4','5','6','7']
const data = {
  labels: ArrayDates,
  datasets: [{
    label: 'Number of Submissions',
    data: ArrayValues,
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
  }]
};


   let options={
    maintainAspectRatio:false,
    animations: {
      tension: {
        duration: 1250,
        easing: 'linear',
        from: 0.6,
        to: 0,
        loop: true
      }
    },
    plugins:{
        legend:true
    },
    scales:{
        y:{
            // min:3,
            // max:6
        }
    }
   }
  return (
    <div className="TimeLine">
    <div className="Timegraph border border-2"
    style={
        {height:'360px',
      }
      }
      >
      <Line
    data={data}
    options={options}
    ></Line>
  </div>
    </div>
  );
}

export default TimeLine;
