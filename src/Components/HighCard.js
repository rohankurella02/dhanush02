import Barchart from "./Barchart";
import Piechart from "./Piechart";
import axios from "axios";
import { useState } from "react";
import GaugeChart from 'react-gauge-chart'
function HighCard(props) {


console.log(props)
 
  return (
<div className=" mygauge border border-1  d-block text-center">
<GaugeChart id="gauge-chart3" className="w-100"
animate={false} 
  nrOfLevels={30} 
  colors={['#ff0000', '#ffff00', '#00cc00' ]} 
  arcWidth={0.3} 
  percent={props.item.Score/100} 
  textColor='#555'
/>
<div className="gagtext">
<h6>Highest Soft skill Percentage of User</h6>
<h4>{props.item.UserName}</h4>
</div>

</div>
  );
}

export default HighCard;
