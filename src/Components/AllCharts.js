import Piechart from "./Piechart";

function AllCharts(props) {
    // console.log(props)
   let arr= props.item
let no=[1,2,3,4,5,6,7,8,9,10]
  return (
    <div className="AllPie">
    {
        no.map((x)=>
        <Piechart item={arr} idno={x}/>
        // console.log(x)
        )
    }

    </div>
  );
}

export default AllCharts;
