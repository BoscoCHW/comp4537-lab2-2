const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
var cors = require('cors');

const app = express();
app.use(cors());
const PORT = 3000;
app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log(`server is listening to port {PORT} `);
})

var jsonParser = bodyParser.json();

var urlendocedParser = bodyParser.urlencoded({extended:false})
app.use(urlendocedParser);
app.use(jsonParser);

function getNumberInfo(number) {
	const API_URL = `http://numbersapi.com/${number}`;
	axios.get(API_URL).then(data => console.log(data))
    .catch(error => {
		console.log(error);
	});
}

app.post('/chatbot', (req, res) => {
    getNumberInfo(42);

})
 