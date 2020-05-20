var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const dotenv = require('dotenv');
const AYLIENTextAPI = require('aylien_textapi');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express()

dotenv.config();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('dist'))
console.log(__dirname)

const API_ID = process.env.API_ID;
const API_KEY = process.env.API_KEY;


const textapi = new AYLIENTextAPI({
    application_id: API_ID,
    application_key: API_KEY
});
//console.log(`${ process.env.API_KEY }`);

app.get('/', function(req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function() {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function(req, res) {
    res.send(mockAPIResponse)
})

app.post("/sentiment", (req, res) => {
    console.log(req.body.formText);
    textapi.sentiment({ url: req.body.formText, mode: 'document' }, (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        res.json(data);
    });
});


module.exports = app;