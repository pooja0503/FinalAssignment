var mongoose=require('mongoose');

var Schema = mongoose.Schema;

var empdata= new Schema({
  waveId:String,
  name: String,
  email: String,
  phone:String,
  giturl: String,
  empcode:String,
  empdep:String,
  empdes:String,
  skill:String,
  exp:String
});

module.exports=mongoose.model("EmpData",empdata);
