import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useForm } from "react-hook-form";
import Form from 'react-bootstrap/Form';
import HintList from './Barchart';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import { FcLock } from "react-icons/fc";
import { FcApproval, FcUnlock ,FcAbout ,FcSms} from "react-icons/fc";
import { useStopwatch } from 'react-timer-hook';
import swal from 'sweetalert';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function CardOne() {
  let [ Answer,setAnswer]=useState('')
  let [ansBool,setAnsBool]=useState(false)
  let [selWord,setSelWord]=useState('')
  let [selObj,setSelObj]=useState([]);
  let [score,setScore]=useState(100);
  let [boolH1,setBoolH1]=useState(false);
  let [boolH2,setBoolH2]=useState(false);
  let [boolH3,setBoolH3]=useState(false);
  let [boolH4,setBoolH4]=useState(false);
  let [boolH5,setBoolH5]=useState(false);
  let [len,setLen]=useState(0);
  let [userObj,setUserObj]=useState({UserName:"",Password:""});
  let [secTime,setSecTime]=useState(0);
  let visit=false
  let navigate=useNavigate();
  // Answer,ansBool,selWord,selObj,score,boolH1,boolH2,boolH3,boolH4,boolH5,len

  // var seconds,minutes,hours,days,isRunning,start,pause,reset

  const { register,resetField, handleSubmit, formState:{errors} } = useForm();
  let arr1 = [
    {
      id:1,
      word: "Elephant",
      hint1: "Largest land animal on Earth",
      hint2: "Has a long, flexible trunk",
      hint3: "Gray in color",
      hint4: "Native to Africa and Asia",
      hint5: "Highly intelligent and social animals"
    },
    {
      id:2,
      word: "Guitar",
      hint1: "Musical instrument",
      hint2: "Has strings",
      hint3: "Played with fingers or a pick",
      hint4: "Can be acoustic or electric",
      hint5: "Popular in many genres of music"
    },
    {
      id:3,
      word: "Ocean",
      hint1: "Large body of saltwater",
      hint2: "Covers over 70% of the Earth's surface",
      hint3: "Home to diverse marine life",
      hint4: "Has different zones based on depth and light",
      hint5: "Influences weather and climate patterns"
    },
    {
      id:4,
      word: "Pizza",
      hint1: "Italian dish",
      hint2: "Typically round and flat",
      hint3: "Made with dough, tomato sauce, and cheese",
      hint4: "Toppings can vary widely",
      hint5: "Popular food around the world"
    },
    {
      id:5,
      word: "Technology",
      hint1: "The application of scientific knowledge for practical purposes",
      hint2: "Includes tools and systems used to communicate, create, and innovate",
      hint3: "Rapidly evolving and changing field",
      hint4: "Can have both positive and negative impacts on society",
      hint5: "Affects almost every aspect of modern life"
    },
    {
      id:6,
      word: "Sunflower",
      hint1: "A type of plant",
      hint2: "Has large yellow petals",
      hint3: "Native to North and South America",
      hint4: "Produces edible seeds",
      hint5: "Symbolizes happiness and loyalty"
    },
    {
      id:7,
      word: "Mountains",
      hint1: "Landform that rises steeply above the surrounding area",
      hint2: "Can be formed by tectonic or volcanic activity",
      hint3: "Home to diverse ecosystems",
      hint4: "Popular destination for outdoor recreation",
      hint5: "Can influence weather patterns in nearby areas"
    },
    {
      id:8,
      word: "Dragonfly",
      hint1: "A type of insect",
      hint2: "Has large, transparent wings",
      hint3: "Feeds on other insects",
      hint4: "Can fly in all directions",
      hint5: "Symbolizes change and transformation"
    },
    {
      id:9,
      word: "Football",
      hint1: "A sport played with a ball and two teams",
      hint2: "Most popular sport in the world",
      hint3: "Can be played on grass or artificial turf",
      hint4: "Involves kicking, passing, and scoring goals",
      hint5: "Can be played at amateur and professional levels"
    },
    {
      id:10,
      word: "Rainforest",
      hint1: "A type of forest characterized by high rainfall",
      hint2: "Home to a vast array of plant and animal species",
      hint3: "Located near the equator",
      hint4: "Helps regulate the global climate",
      hint5: "Threatened by deforestation and other human activities"
    }
  ];
  // Refresh user
  useEffect(()=>{
    var obj=JSON.parse(localStorage.getItem("Key1"))
    if(userObj.UserName=='' || userObj.Password==''){
      setUserObj({UserName:obj.UserName,Password:obj.Password})
    }
    var obj=JSON.parse(localStorage.getItem("Key2"))
    // Answer=='' || ansBool==false || selWord=='' || selObj==[] || boolH1==false || boolH5==false||
    // boolH2==false || score==100 || boolH3==false || boolH4==false || len==0
    if(obj){
      // console.log(JSON.parse(localStorage.getItem("Key2")))
        // console.log("Hai")
        setAnswer(obj.Answer)
        setAnsBool(obj.ansBool)
        setSelWord(obj.selWord)
        setSelObj(obj.selObj)
        setScore(obj.score)
        setBoolH1(obj.boolH1)
        setBoolH2(obj.boolH2)
        setBoolH3(obj.boolH3)
        setBoolH4(obj.boolH4)
        setBoolH5(obj.boolH5)
        setLen(obj.len)
        if(obj.selWord!=''){
        visit=true
        // console.log("Visit",obj.selWord)
        setSecTime(obj.time)
        // console.log("Time",obj.time)
        var stopwatchOffset = new Date(); 
        stopwatchOffset.setSeconds(stopwatchOffset.getSeconds() + obj.time)
        reset(stopwatchOffset)


        }
    }
  },[])

  // Update Key2 puzzle Info
useEffect(()=>{
  let obj={
    Answer:Answer,
    ansBool:ansBool,
    selWord:selWord,
    selObj:selObj,
    score:score,
    boolH1:boolH1,
    boolH2:boolH2,
    boolH3:boolH3,
    boolH4:boolH4,
    boolH5:boolH5,
    time: secTime
  }
  if(!visit){
    localStorage.setItem("Key2",JSON.stringify(obj))
    // console.log("Hai1")
    // console.log(JSON.parse(localStorage.getItem("Key2")))
  }
  setSecTime((days*24*60*60)+(hours*60*60)+(minutes*60)+(seconds))
})
  // Select randomly from array
  let selectedObj
  let wordarrayJoin,wordarray
  useEffect(()=>{
    
    if(!visit){
      // console.log("Hai2")
    do{
  selectedObj=arr1[Math.floor(Math.random()*arr1.length)]
  wordarray=selectedObj.word.split("")
    }while(selWord.toLowerCase()==selectedObj.word.toLowerCase())
  setSelWord(selectedObj.word)
  setSelObj(selectedObj)
  // console.log(selObj);
  // console.log("WordArray",wordarray,"selecObj",selectedObj)
  // console.log("Selected Word",selWord,"selObjs",selObj)
  // setlen(wordarray.length)
  // console.log("length",len,wordarray.length)
  setLen(selectedObj.word.length)
  for(let i=wordarray.length-1;i>0;i--){
    let j=Math.floor(Math.random()*(wordarray.length))
    // console.log(i,j)
    let temp=wordarray[j]
    wordarray[j]=wordarray[i]
    wordarray[i]=temp
    // console.log(wordarray)
  }
  wordarrayJoin=wordarray.join(" ")
  setAnswer(wordarrayJoin);
  setAnsBool(false)
}
},[ansBool]);
  const onSubmit = data =>{ 
    // console.log(data)
    let Mytime=(days*24*60*60)+(hours*60*60)+(minutes*60)+(seconds)
    const current = new Date();
    String("0" + current.getDate()).slice(-2)
    var date = `${String("0" + current.getDate()).slice(-2)}-${String("0" + (current.getMonth()+1)).slice(-2)}-${String(current.getFullYear())}`;
    data.Date=date
    var date=new Date();
    data.No=selObj.id
    data.Time=Mytime
    let userinfo=JSON.parse(localStorage.getItem("Key1"))
    data.UserName=userinfo.UserName
    data.Puzzle=selObj.word
    data.Timestamp=date.getTime()
    if(selWord.toLowerCase()==data.SearchName.toLowerCase()){
      // alert("Answer is correct");
      
      // console.log(userinfo)

    data.Score=score
      // console.log(Mytime)
      // console.log(data)
    let per=Math.ceil(((score)*50)/100)
    if(Mytime<=10){
      per=per+50
    }
    else if(Mytime>10 && Mytime<=20){
      per=per+40
    }
    else if(Mytime>20 && Mytime<=60){
      per=per+30
    }
    else{
      per=per+20
    }
      setAnsBool(true)
      resetField("SearchName")
      reset()
      setBoolH1(false)
      setBoolH2(false)
      setBoolH3(false)
      setBoolH4(false)
      setBoolH5(false)
      setScore(100)
      data.Percentage=per
      var stm="Cognitive flexibility (Soft skill) Percentage : "+per+" %"
      swal("Correct", stm, "success");
    }
    else{
      data.Score=0
      data.Percentage=0
      // alert("Wrong Answer")
      var stm="Cognitive flexibility (Soft skill) Percentage : "+0+" %"
      swal("Wrong", stm, "error");
    }
    axios.post("/Score-api/create-Score",data)
        .then((response)=>{
            if(response.data.message==="Score Added"){
            }
        })
        .catch((error)=>{
            console.log(error)
            alert("Error in score adding")
        }) 
    console.log(data)

  }
  const funreset=()=>{
      setAnsBool(true)
      reset()
      setBoolH1(false)
      setBoolH2(false)
      setBoolH3(false)
      setBoolH4(false)
      setBoolH5(false)
      resetField("SearchName")
      setScore(100)
  }
  var {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    reset } = useStopwatch({ autoStart: true });
    return (
      <div className="CardOne">
      <div className='text-center m-3 mb-5 .myHeading'>
      <h2>Max Score : <span className='score'>{score}</span> </h2>
      </div>
      <div className='watchTime text-center d-block mb-5'>
        <span className='divTime shadow'>{days} </span><span className="timetext">Days</span>:
        <span className='divTime shadow'>{hours} </span><span className="timetext">Hr</span>:
        <span className='divTime shadow'>{minutes} </span><span className="timetext">Min</span>:
        <span className='divTime shadow'>{seconds} </span><span className="timetext">Sec</span>
        </div>
  
      <div className='PuzzleContainer'>
      <div className='HAList'>
      {
        (boolH1==false && boolH2==false && boolH3==false && boolH4==false && boolH5==false)?
        <>
        <ListGroup as="ul" numbered className='shadow'>
        <ListGroup.Item action variant="success"
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="fw-bold ms-1">  No Hints Used </div>
          <Badge bg="light" pill className='ms-2'>
           <FcSms/>
          </Badge>
         </ListGroup.Item>
         </ListGroup>
        </>:
        <>
        <ListGroup as="ol" numbered className="shadow" >
        {boolH1==true &&<ListGroup.Item action variant="success"
          as="li"
          onClick={()=>setBoolH1(true)}
          className="d-flex justify-content-between align-items-start"
        >
          <div className="fw-bold ms-1">  {selObj.hint1} </div>
          <Badge bg="light" pill className='ms-2'>
           <FcSms/>
          </Badge>
       
         </ListGroup.Item>}
        { boolH2==true &&<ListGroup.Item action variant="success"
        as="li"
        onClick={()=>setBoolH2(true)}
        className="d-flex justify-content-between align-items-start"
      >
        <div className="fw-bold ms-1"> {selObj.hint2}</div>
        <Badge bg="light" pill className='ms-2'>
         <FcSms/>
        </Badge>
       </ListGroup.Item>
      }
      { boolH3==true &&<ListGroup.Item action variant="success"
      as="li"
      onClick={()=>setBoolH3(true)}
      className="d-flex justify-content-between align-items-start"
    >
      <div className="fw-bold ms-1"> {selObj.hint3} </div>
      <Badge bg="light" pill className='ms-2'>
       <FcSms/>
      </Badge>
       </ListGroup.Item>
       }
      { boolH4==true &&<ListGroup.Item action variant="success"
    as="li"
    onClick={()=>setBoolH4(true)}
    className="d-flex justify-content-between align-items-start"
  >
    <div className="fw-bold ms-1"> {selObj.hint4} </div>
    <Badge bg="light" pill className='ms-2'>
     <FcSms/>
    </Badge>
        </ListGroup.Item>
      }
      { boolH5==true &&<ListGroup.Item action variant="success"
  as="li"
  onClick={()=>setBoolH5(true)}
  className="d-flex justify-content-between align-items-start"
  >
  <div className="fw-bold ms-1"> {selObj.hint5} </div>
  <Badge bg="light" pill className='ms-2'>
   <FcSms/>
  </Badge>
      </ListGroup.Item>
      }
      </ListGroup>
        </>

    }
      </div>
      <div className='puzzleForm'>
      <Card  className='card1 shadow'>
      <Card.Body>
        <Card.Title>Puzzle {selObj.id} : WORD SCRAMBLE</Card.Title>
        <hr/>
        <h4 className='wordsplit'>{Answer.toUpperCase()}</h4>
        <Card.Text>
          Rearrange the the above letters to form a valid word
        </Card.Text>
        <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            type="text"
            placeholder="Make A Guess"
            autoFocus {...register("SearchName",{required: true, maxLength: Answer.split(' ').length, minLength:Answer.split(' ').length})} 
          />
           {errors.SearchName?.type==='required' && <p className='text-danger text-start '>*This field is required</p> ||
           (errors.SearchName?.type==='maxLength' || errors.SearchName?.type==='minLength') && <p className='text-danger text-start '>*Len of word is {len}</p>}
            <div className='buttons2 mt-3 mb-3'>
           <Button variant="danger" className='mt-2 mb-2' onClick={funreset}>Reset</Button>
           <Button variant="success" type='submit' className='mt-2 mb-2' >Submit</Button>
           </div> 
        </Form.Group>
    </Form> 
         
      </Card.Body>
      </Card>
      </div>
      <div className="HList5">
      {(boolH1==true && boolH2==true && boolH3==true && boolH4==true && boolH5==true)?
        <>
          <ListGroup as="ul" numbered className="shadow" >
          <ListGroup.Item action variant="warning"
            as="li"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="fw-bold"> <FcLock/> All Hints used </div>
            <Badge bg="primary" className='ms-2' pill>
             <FcApproval/>
            </Badge>
         
           </ListGroup.Item>
           </ListGroup>

        </>:
        <>
          <ListGroup as="ol" numbered className='shadow' >
          {boolH1==false &&<ListGroup.Item action variant="warning"
            as="li"
            onClick={()=>{setBoolH1(true)
               setScore(score-5)
            }}
            className="d-flex justify-content-between align-items-start"
          >
            <div className="fw-bold"> <FcLock/> Hint </div>
            <Badge bg="primary" className='ms-2' pill>
            - 5 points 
             <FcApproval/>
            </Badge>
         
           </ListGroup.Item>}
          { boolH2==false &&<ListGroup.Item action variant="warning"
          as="li"
          onClick={()=>{setBoolH2(true) ; setScore(score-10)}}
          className="d-flex justify-content-between align-items-start"
        >
          <div className="fw-bold"> <FcLock/> Hint </div>
          <Badge bg="primary" className='ms-2' pill>
          - 10 points 
           <FcApproval/>
          </Badge>
         </ListGroup.Item>
        }
        { boolH3==false &&<ListGroup.Item action variant="warning"
        as="li"
        onClick={()=>{setBoolH3(true);  setScore(score-15)}}
        className="d-flex justify-content-between align-items-start"
      >
        <div className="fw-bold"> <FcLock/> Hint </div>
        <Badge bg="primary" className='ms-2' pill>
        - 15 points 
         <FcApproval/>
        </Badge>
         </ListGroup.Item>
         }
        { boolH4==false &&<ListGroup.Item action variant="warning"
      as="li"
      onClick={()=>{setBoolH4(true);  setScore(score-20)}}
      className="d-flex justify-content-between align-items-start"
    >
      <div className="fw-bold"> <FcLock/> Hint </div>
      <Badge bg="primary" className='ms-2' pill>
      -20 points 
       <FcApproval/>
      </Badge>
          </ListGroup.Item>
        }
        { boolH5==false &&<ListGroup.Item action variant="warning"
    as="li"
    onClick={()=>{setBoolH5(true); setScore(score-25)}}
    className="d-flex justify-content-between align-items-start"
    >
    <div className="fw-bold"> <FcLock/> Hint </div>
    <Badge bg="primary" className='ms-2' pill>
    - 25 points 
     <FcApproval/>
    </Badge>
        </ListGroup.Item>
        }
        </ListGroup>
        </>

  }

      </div>
      </div>
      </div>
    );
  }
  
  export default CardOne;
  