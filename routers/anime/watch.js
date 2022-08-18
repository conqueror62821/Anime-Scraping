
const ex = require('express');
const axios = require("axios");
const app = ex.Router();
let api_url = global.api_url;
app.get("/:id", async(req, res) => {
 try { 
  if(!req.params.id) {
    return res.redirect("/");
  }
  let chek = req.params.id.split("-episode-");

let resx = await axios.get(api_url +"api/watching/" + chek[0] + "/" + chek[1]);
  
  let info = await resx.data;
  return res.render("watch.ejs", {info:info, chek: chek});
     } catch(e) {
    console.log(e);
    return res.send("<h1> 404 </h1>")
  }
 })

module.exports = app;