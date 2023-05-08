const exp=require('express')
const Scoreapp=exp.Router()
const expressAsyncHandler=require('express-async-handler');
Scoreapp.use(exp.json())
// const verifyToken=require('./Middlewares/verifyToken')
require('dotenv').config()
const natural = require('natural');
const tokenizer = new natural.WordTokenizer();
const stopWords = new Set(natural.stopwords);
const spacy = require('spacy');

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
function summarizeText(text, summaryLength) {
  // Clean the text
  console.log("Inside function")
  const tokens = tokenizer.tokenize(text);

  // Remove stop words and punctuation
  const cleanedTokens = tokens.filter(token => {
    return !stopWords.has(token.toLowerCase()) && token.match(/\w+/);
  });

  const cleanedText = cleanedTokens.join(' ');

  // Tokenize the cleaned text into sentences
  const sentenceTokenizer = new natural.SentenceTokenizer();
  const sentences = sentenceTokenizer.tokenize(cleanedText);

  // Create a TF-IDF vector space model for the sentences
  const tfidf = new natural.TfIdf();
  sentences.forEach(sentence => {
    tfidf.addDocument(sentence);
  });

  // Calculate the TextRank score for each sentence
  const scores = {};
  for (let i = 0; i < sentences.length; i++) {
    let score = 0;
    tfidf.listTerms(i).forEach(term => {
      score += term.tfidf;
    });
    scores[sentences[i]] = score;
  }

  // Sort the sentences by TextRank score and select the top ones
  const summarySentences = Object.keys(scores)
    .sort((a, b) => scores[b] - scores[a])
    .slice(0, summaryLength);


  // Join the summary sentences into a string and return
  return summarySentences.join(' ');
}

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

Scoreapp.get('/summarize/:Text', expressAsyncHandler(async (request, response) => {
  let Text = request.params.Text
  // const summary = summarizeText(Text);
  const summary = summarizeText(Text, 2);
  // console.log(Text); // Outputs "This is some example text."
  response.send({ message: 'Score Added', text: Text, summaryText: summary })

}))
// Favoriteapp.delete('/delete-fav/:name/:place',expressAsyncHandler(async(request,response)=>{
//     let deletename=request.params.name;
//     let deleteplace=request.params.place;
//     let favoriteCollectionObject=request.app.get('favoriteCollectionObject')
//      let result=await favoriteCollectionObject.deleteOne({$and:[{Name:deletename},{heading:deleteplace}]});
//     response.send({message:"Product is deleted",payload: deleteobj})

// }))

module.exports=Scoreapp