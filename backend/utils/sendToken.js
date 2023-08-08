const sendToken =(user,statusCode,res)=>{

const token = user.getJWTToken();

const options = {
  expires: new Date(
    Date.now() + Number(50 * 24 * 60 * 60 * 1000)
  ),

  httpOnly: true,
};

console.log(token)
res.status(statusCode).cookie("token",token,options).json({
  user,
  success:true,
  token
})
}

module.exports = sendToken