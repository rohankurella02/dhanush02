const exp=require("express");
const Scoreapp=require("./API/Score");
const app=exp()
require('dotenv').config()


const path=require('path');
app.use(exp.static(path.join(__dirname,"build")))
app.use(exp.static(path.join(__dirname, 'public')));
const Userapp=require("./API/user")
const Dburl= 'mongodb+srv://ldhanush02:Dhanush*123@databasecluster.xldj4.mongodb.net/Puzzle2023?retryWrites=true&w=majority;
const mclient=require("mongodb").MongoClient;
app.use('/user-api',Userapp)
app.use('/Score-api',Scoreapp)

// // ---------------deployment--------------- 
// if (true){
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

//get request for home page
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
})

app.use('*',(request,response)=>{
    app.use(exp.static(path.resolve(__dirname, 'build')));
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
})

app.use((request,response,next)=>{
    response.send({message:"Invalid path",reason:`${request.url}`})
})

app.use((error,request,response,next)=>{
    response.send({message:'Error',payload:`Errorr is ${error.message}`})
})

app.listen(4000,()=>console.log("Server is listening at port number 4000"))

module.exports = app
