const express = require("express");
const users = require("./data.js");
const getemail = require("./getemail.js");
const app = express();

app.use(express.static("public"));
app.get("/getemail", (req, res)=>{
  const name = req.query.name;
  const email = getemail(users, name);
  if (email){
    res.send("Your email is: " + email);
  }else{
    res.send("User does not exist");
  }
  
});

const port = process.env.PORT;
app.listen(port, ()=>console.log(`Server listening on port ${port}`));
