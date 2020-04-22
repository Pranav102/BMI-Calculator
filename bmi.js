const express=require("Express");
const app=express();

const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

app.listen(3000,function(){
  console.log("server started in 3000");
});

app.post("/bmicalculator",function(req,res){
  var we=Number(req.body.w);
  var he=Number(req.body.h);
  var bmi=(we/(he*he));

  res.send("the result is "+bmi);
});

app.get("/bmicalculator",function(req,res){
  res.sendFile(__dirname+"/bmi.html");
});
