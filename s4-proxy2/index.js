const express = require('express')
const app = express()
var cors = require('cors');

app.use(express.json()) 
app.use(cors());

const multer = require('multer');
const upload = multer();

const {postDocumentJobs} = require("./modules/Die");

app.post('/docPost', upload.single('file'), async function (req, res) {
  let oData = {
    file    : req.file,
    options : req.body.options,
    token   : req.body.token
  }

  console.log('req.body.options=', oData.options);
  console.log('req.file=', oData.file);

  let response = await postDocumentJobs(oData.file,oData.options,oData.token);
  console.log("response no index.js="+response);

  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ response: "OK!" }));
})

app.listen(8080)
console.log('Listening on port 8080')