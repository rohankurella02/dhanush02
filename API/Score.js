const exp=require('express')
const Scoreapp=exp.Router()
const expressAsyncHandler=require('express-async-handler');
Scoreapp.use(exp.json())
// const verifyToken=require('./Middlewares/verifyToken')
require('dotenv').config()

// Cloudinary
// var cloudinary = require("cloudinary").v2;
// const { CloudinaryStorage } = require("multer-storage-cloudinary");
// const multer = require("multer");

// //configure cloudinary
// cloudinary.config({
//     cloud_name: process.env.CLOUD_NAME ,
//     api_key: process.env.API_KEY,
//     api_secret: process.env.API_SECRET,
//     secure: true,
//   });
  
//   //config cloudinary storage
//   const cloudinaryStorage = new CloudinaryStorage({
//     cloudinary: cloudinary,
//     params: async (req, file) => {
//       return {
//         folder: "Places",
//         public_id: file.fieldname + "-" + Date.now(),
//       };
//     },
//   });

  
//   //configure multer
//   var upload = multer({ storage: cloudinaryStorage });

Scoreapp.use(exp.urlencoded({ extended: true }));

Scoreapp.get('/get-Score/:username',expressAsyncHandler(async(request,response)=>{
  let userName=request.params.username
  let ScoreCollectionObject=request.app.get('ScoreCollectionObject');
   let product= await ScoreCollectionObject.find({UserName:userName}).toArray();
    response.send({message:'This is user info',payload: product })
}))

Scoreapp.get('/get-Scores',expressAsyncHandler(async(request,response)=>{
  let userName=request.params.username
  let ScoreCollectionObject=request.app.get('ScoreCollectionObject');
   let product= await ScoreCollectionObject.find().toArray();
    response.send({message:'This is user info',payload: product })
}))

Scoreapp.post('/create-Score',expressAsyncHandler(async(request,response)=>{
    let newfav=request.body
    let ScoreCollectionObject=request.app.get('ScoreCollectionObject');
     let product= await ScoreCollectionObject.insertOne(newfav) ;
      response.send({message:'Score Added'})

}))

// Favoriteapp.delete('/delete-fav/:name/:place',expressAsyncHandler(async(request,response)=>{
//     let deletename=request.params.name;
//     let deleteplace=request.params.place;
//     let favoriteCollectionObject=request.app.get('favoriteCollectionObject')
//      let result=await favoriteCollectionObject.deleteOne({$and:[{Name:deletename},{heading:deleteplace}]});
//     response.send({message:"Product is deleted",payload: deleteobj})

// }))

module.exports=Scoreapp