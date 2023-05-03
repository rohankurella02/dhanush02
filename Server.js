const exp=require("express");
const Scoreapp=require("./API/Score");
const app=exp()
require('dotenv').config()


const path=require('path');
app.use(exp.static(path.join(__dirname,"./build")))
const Userapp=require("./API/user")
const Dburl=process.env.DATA_BASE_CONNECTION_URL;
const mclient=require("mongodb").MongoClient;
app.use('/user-api',Userapp)
app.use('/Score-api',Scoreapp)

// ---------------deployment--------------- 
// if (process.env.NODE_ENV==="production"){
//     app.use(exp.static(path.join(__dirname,"./build")))
//     app.get(/^\/(?!api).*/, (req, res) => { // don't serve api routes to react app
//       res.sendFile(path.join(__dirname, './build/index.html'));
//     });
//     app.get('*',(request,response)=>{
//       response.sendFile(path.resolve(__dirname,'build','index.html'))
//     })
//   }
  
  
  // ---------------deployment----------------



mclient.connect(Dburl)
.then((client)=>{
    let dbObj=client.db("Puzzle2023");
    let userCollectionObject=dbObj.collection("User");
    let ScoreCollectionObject=dbObj.collection("Scores");
    app.set('userCollectionObject',userCollectionObject);
    app.set('ScoreCollectionObject',ScoreCollectionObject);
    console.log("DB connection is successful")
})
.catch(err=>console.log("Error occured in connection to DB is ",err))

app.use('*',(request,response)=>{
    response.sendFile(path.join(__dirname,'./build/index.html'))
})

app.use((request,response,next)=>{
    response.send({message:"Invalid path",reason:`${request.url}`})
})

app.use((error,request,response,next)=>{
    response.send({message:'Error',payload:`Error is ${error.message}`})
})

app.listen(process.env.PORT || 4000,()=>console.log("Server is listening at port number 4000"))