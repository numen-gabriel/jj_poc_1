const express = require('express')
const app = express()
var cors = require('cors');

app.use(express.json()) 
app.use(cors());
/*
const multer = require('multer');
const upload = multer();
upload.single('file'),
*/
const {postDocumentJobs} = require("./modules/Die");

app.post('/docPost', async function (req, res) {
  let oData = {
    filepath    : req.body.filepath,
    filename    : req.body.filename,
    options : req.body.options,
    token   : req.body.token
  }

  const response = await postDocumentJobs(oData.filepath,oData.filename,oData.options,oData.token).then(responseDie => {

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(responseDie));

  });
  
})

app.listen(8080)