const exp=require('express')
const Favoriteapp=exp.Router()
const expressAsyncHandler=require('express-async-handler');
Favoriteapp.use(exp.json())
const verifyToken=require('./Middlewares/verifyToken')
require('dotenv').config()

// Cloudinary
var cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");

//configure cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME ,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
    secure: true,
  });
  
  //config cloudinary storage
  const cloudinaryStorage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: async (req, file) => {
      return {
        folder: "Places",
        public_id: file.fieldname + "-" + Date.now(),
      };
    },
  });

  
  //configure multer
  var upload = multer({ storage: cloudinaryStorage });

  Favoriteapp.use(exp.urlencoded());

Favoriteapp.get('/get-fav/:username',expressAsyncHandler(async(request,response)=>{
  let userName=request.params.username
  let favoriteCollectionObject=request.app.get('favoriteCollectionObject');
   let product= await favoriteCollectionObject.find({Name:userName}).toArray();
    response.send({message:'This is user info',payload: product })
}))

Favoriteapp.post('/put-fav',verifyToken,expressAsyncHandler(async(request,response)=>{

    let newfav=request.body
    let favoriteCollectionObject=request.app.get('favoriteCollectionObject');
    let resultexist= await favoriteCollectionObject.findOne({$and:[{heading:newfav.heading},{Name:newfav.Name}]})
    if(resultexist==null){
      let result= await  favoriteCollectionObject.insertOne(newfav)
      response.send({message:'Added to Favorite'})
    }
    else{
      response.send({message:'Already you selected this card'})
    }

}))

Favoriteapp.delete('/delete-fav/:name/:place',expressAsyncHandler(async(request,response)=>{
    let deletename=request.params.name;
    let deleteplace=request.params.place;
    let favoriteCollectionObject=request.app.get('favoriteCollectionObject')
     let result=await favoriteCollectionObject.deleteOne({$and:[{Name:deletename},{heading:deleteplace}]});
    response.send({message:"Product is deleted",payload: deleteobj})

}))

module.exports=Favoriteapp