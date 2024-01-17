const express = require('express')
const app = express()
app.use(express.json()) 
const multer = require('multer');
const upload = multer();

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.post('/docPost_json', async function (req, res) {
    console.log(req.body)
    let params = {
        param1: req.body.param1,
        param2: req.body.param2
    }

    console.log(params);

    res.send(req.body);
})

app.post('/docPost', upload.single('file'), async function (req, res) {
  const formData = req.body;
  console.log('form data', formData);
  console.log(req.file)
  res.sendStatus(200);
})

app.listen(8080)
console.log('Listening on port 8080')