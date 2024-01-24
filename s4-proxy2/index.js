const express = require('express')
const app = express()
var cors = require('cors');

app.use(express.json()) 
app.use(cors());

const multer = require('multer');
const upload = multer();

const {postDocumentJobs} = require("./modules/Die");

app.post('/docPost', upload.any(), async function (req, res) {
  let oData = {
    file    : req.files[0],
    options : req.body.options
  }

  const response = await postDocumentJobs(oData.file,oData.options).then(responseDie => {

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(responseDie));

  });
  
})

app.listen(8080)