const express = require('express')
const app = express()
var cors = require('cors');

app.use(express.json()) 
app.use(cors());

const multer = require('multer');
const upload = multer();

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.post('/docPost_json', async function (req, res) {
    console.log(req.body)
    let params = {
        token: req.body.token,
        content1: req.body.content1,
        content2: req.body.content2
    }

    console.log(params);

    res.send(req.body);
})

app.post('/docPost', upload.single('file'), async function (req, res) {
  const formData = req.body;
  console.log('form data', formData);
  console.log("req.file= "+req.file);
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ response: "OK!" }));
  res.sendStatus(200);
})

app.listen(8080)
console.log('Listening on port 8080')