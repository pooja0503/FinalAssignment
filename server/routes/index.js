var express = require('express');
var router = express.Router();
var EmpData = require('../model/empdata');

/* GET home page. */
router.get('/view',function(req,res,next)
  {
    EmpData.find(function(err,data)
    {
      if(data)
      {
        res.json(data);
      }
      else
      {
        console.log(err);
      }
    });
  });
router.post('/manage', function(req, res, next) {
  console.log(req.body);
  if(req.body)
  {
    var data = new EmpData();
    data.waveId=req.body.selWave;
    data.name=req.body.txtName;
    data.email=req.body.txtEmail;
    data.phone=req.body.txtPhone;
    data.giturl=req.body.txtGitUrl;
    data.empcode=req.body.txtEmpCode;
    data.empdep=req.body.txtEmpDep;
    data.empdes=req.body.txtempDes;
    data.skill=req.body.txtSkill;
    data.exp=req.body.txtEmpExp;
    data.save(function(err,data)
    {
      if(err)
      {
        return(console.log(err));
      }
      else
      {
        return(console.log("saved"));
      }
    });
  }
});

module.exports = router;
