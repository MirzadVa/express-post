const express = require('express');
const app = express();
const bodyParser = require('body-parser')

const port = 9000;

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.post('/insert', (req, res)=>{
    res.send("request sent")
    res.end();
})


app.listen(port, () => console.log(`App listen on port ${port}` ))