import { Chart as ChartJS, BarElement,CategoryScale,LinearScale ,ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut, Pie } from "react-chartjs-2";
import { useState } from "react";
import axios from "axios";
ChartJS.register(ArcElement, BarElement,CategoryScale,LinearScale, Tooltip, Legend);
function Piechart(props) {
  // console.log("Hai")
    console.log("Pie chart props",props)
   let arr= props.item
     let time=[0,0,0,0]
     let chfun=(idno)=>{
      arr.map((x) => {
      if(x.No==idno){
        if(x.Time>=0 && x.Time<=10){
          time[0]=time[0]+1;
        }
        else if(x.Time>10 && x.Time<=20){
          time[1]=time[1]+1;
        }
        else if(x.Time>20 && x.Time<=60){
          time[2]=time[2]+1;
        }
        else{
          time[3]=time[3]+1;
        }
      }
    });
  }
  const funcall=()=>{
    let x=props
      chfun(props.idno)
      console.log("X value",x)
  }
  // console.log("Time",time)
  funcall()
     const data={
      labels:["0 - 10secs", "10 - 20 secs", "20 - 60secs", ">60secs"],
      datasets:[
        {
            labels:'Time Taken to Solve',
            data:time,
            backgroundColor:['#0074D9','#2ECC40','#FFDC00','#FF4136'],
            borderColor:'#FFFFFF',
            borderWidth:1
        }
      ]
     }

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
      }
     }
  return (
    <div className="Piechart border border-2 mt-2">
    <h2 className="gagtext text-center">Puzzle {props.idno}</h2>
    <div className="pie "
    style={
      {height:'360px',
    }
    }
    >
    <Doughnut
  data={data}
  options={options}
  
/>
    </div>
    </div>
  );
}

export default Piechart;
