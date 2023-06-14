const express=require("express");
const http=require("http");
const {v4:uuidv4}=require("uuid");
const cros=require("cors");
const twilio=require("twilio");

const PORT=process.env.PORT || 3000;
const app=express();

const server=http.createServer(app);
app.use(cros());

const io=require('socket.io')(server,{
  cros:{
    origin:'*',
    methods:['GET','POST']
  }
});

server.listen(PORT,()=>{
  console.log(`Server is listening on ${PORT}`);
});