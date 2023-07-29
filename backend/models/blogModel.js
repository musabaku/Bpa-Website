const mongoose = require("mongoose")

const blogSchema = new mongoose.Schema({
title:{
  type:String,
  required:true
},
image:{
  url:{
    type:String,
    required:true
  }
},
description:{
  type:String,
  required:true
},
})

module.exports = mongoose.model("Blog",blogSchema)

{/* <a href="https://ibb.co/9pj3cpv"><img src="https://i.ibb.co/wd1rBdL/1.jpg" alt="1" border="0"></a>
<a href="https://ibb.co/x77Pv4B"><img src="https://i.ibb.co/3CCGXJj/2.jpg" alt="2" border="0"></a>
<a href="https://ibb.co/M1hjhYJ"><img src="https://i.ibb.co/wQLbL92/3.jpg" alt="3" border="0"></a> */}