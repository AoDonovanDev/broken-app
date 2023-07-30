const express = require('express');
let axios = require('axios');
var app = express();


app.use(express.json()); //For JSON
app.use(express.urlencoded({ extended: true }));

app.post('/', function(req, res, next) {
  let devs = req.body
  let out = []

  async function sendData(){
    for(let dev of devs.developers){
      const goingOut = await getData(dev)
      out.push(goingOut)
    }
    res.json(out)
  }

  async function getData(d){
    try{
      const response = await axios.get(`https://api.github.com/users/${d}`);
      let retrieved = {}
      retrieved.name = response.data.name
      retrieved.bio = response.data.bio
      return retrieved
    } catch(err) {
      next(err);
    }
  }
  
  sendData()
     
});

app.listen(3000, () => {
  console.log("Server running on port 3000")
});
