const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
var cors = require('cors');

const app = express();
app.use(cors());
const PORT = 3000;
app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log(`server is listening to port ${PORT} `);
})

var jsonParser = bodyParser.json();

var urlendocedParser = bodyParser.urlencoded({extended:false})
app.use(urlendocedParser);
app.use(jsonParser);



app.post('/chatbot', (req, res) => {

    const message = req.body.message;
    const number = message.match(/\d+/);
    if (number){
        axios.get(`http://numbersapi.com/${number}?type=trivia`).then(response => {
            res.json({
                text: response.data
            })

        })
        .catch(error => {
            res.json({
                text: "something is wrong"
            })
        })
        
    }
    else {
        res.json({
            text: "don't have information about this number, try another."
        })
    }

})
 