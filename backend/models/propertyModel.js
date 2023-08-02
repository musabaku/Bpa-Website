const mongoose = require("mongoose")

const propertySchema = new mongoose.Schema({
  name:{
    type:String,
    required:true,
  },
  description:{
    type:String
    // required:true,
  },
  image:{
    url:{
    type:String,
    required:true,
    }
  },
  price:{
    type:Number,
    required:true,
  },
  location:{
    type:String,
    required:true,
  },
  beds:{
    type:Number,
    required:true,
  },
  area:{
    type:Number,
    required:true,
  },
  baths:{
    type:Number,
    required:true,
  },
}

)

module.exports = mongoose.model("Property",propertySchema)

{/* <img src="https://i.ibb.co/5nrpTm0/big1.jpg" alt="big1" border="0"></a>
<img src="https://i.ibb.co/XxXMLs3/big2.jpg" alt="big2" border="0"></a>
<img src="https://i.ibb.co/N2hv2QN/big3.jpg" alt="big3" border="0"></a>
<img src="https://i.ibb.co/YtwyWkM/big4.jpg" alt="big4" border="0"></a>
<img src="https://i.ibb.co/N13xKHs/big5.jpg" alt="big5" border="0"></a>
<img src="https://i.ibb.co/gWHyxcg/big6.jpg" alt="big6" border="0"></a>
<img src="https://i.ibb.co/PDCmRf8/big7.jpg" alt="big7" border="0"></a>
<img src="https://i.ibb.co/37CYdbH/big8.jpg" alt="big8" border="0"></a> */}