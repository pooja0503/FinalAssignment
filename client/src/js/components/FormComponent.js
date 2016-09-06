var React=require('react');
var DataTable=require('./DataTable');

var FormComponent=React.createClass({
  getInitialState:function()
  {
    return({empData:[]});
  },
  getData:function()
  {
    $.ajax({
      url:'http://localhost:8080/view',
      type:'GET',
      dataType:'json',
      success:function(response)
      {
        this.setState({empData:response});
        console.log(this.state.empData);
      }.bind(this),
      error:function(xhr,status,err)
      {
        console.log(err.toString());
      }.bind(this)
    });
  },
  render:function()
  {
    if(this.state.empData.length!=0)
    {
      console.log("Inside if...");
      console.log(this.state.empData);
      var dataTable=<DataTable empData={this.state.empData} />
    }
    return(
      <div className="container">
        <form method="post" action="http://localhost:8080/manage">
          <div className="container">

            {/* Field for Wave Ids */}
            <div className="row">
              <div className="col-lg-5">
                Wave:
              </div>
              <div className="col-lg-7">
                <select className="form-control" name="selWave">
                  <option value="wave01">Wave 01</option>
                  <option value="wave02">Wave 02</option>
                  <option value="wave03">Wave 03</option>
                  <option value="wave04">Wave 04</option>
                  <option value="wave05">Wave 05</option>
                </select>
              </div>
             </div>
             <br />
              {/* Field for Name */}
              <div className="row">
                <div className="col-lg-5">
                  Name:
                </div>
                <div className="col-lg-7">
                  <input type="text" className="form-control" name="txtName" />
                </div>
              </div>
              <br />
              {/* Field for Email */}
              <div className="row">
                <div className="col-lg-5">
                  Email:
                </div>
                <div className="col-lg-7">
                  <input type="text" className="form-control" name="txtEmail" />
                </div>
              </div>
              <br />
              {/* Field for Phone */}
              <div className="row">
                <div className="col-lg-5">
                  Phone:
                </div>
                <div className="col-lg-7">
                  <input type="text" className="form-control" name="txtPhone" />
                </div>
              </div>
              <br />
              {/* Field for GitURL */}
              <div className="row">
                <div className="col-lg-5">
                  Git URL:
                </div>
                <div className="col-lg-7">
                  <input type="text" className="form-control" name="txtGitUrl" />
                </div>
              </div>
              <br />
              {/* Field for EmpCode */}
              <div className="row">
                <div className="col-lg-5">
                  Employee Code:
                </div>
                <div className="col-lg-7">
                  <input type="text" className="form-control" name="txtEmpCode" />
                </div>
              </div>
              <br />
              {/* Field for EmpDep */}
              <div className="row">
                <div className="col-lg-5">
                  Employee Department:
                </div>
                <div className="col-lg-7">
                  <input type="text" className="form-control" name="txtEmpDep" />
                </div>
              </div>
              <br />
              {/* Field for EmpDes */}
              <div className="row">
                <div className="col-lg-5">
                  Employee Designation:
                </div>
                <div className="col-lg-7">
                  <input type="text" className="form-control" name="txtempDes" />
                </div>
              </div>
              <br />
              {/* Field for Skills */}
              <div className="row">
                <div className="col-lg-5">
                  Skills:
                </div>
                <div className="col-lg-7">
                  <input type="text" className="form-control" name="txtSkill" />
                </div>
              </div>
              <br />
              {/* Field for EmpExperience */}
              <div className="row">
                <div className="col-lg-5">
                  Experience:
                </div>
                <div className="col-lg-7">
                  <input type="text" className="form-control" name="txtEmpExp" />
                </div>
              </div>
              <br />
              {/* Including Button */}
              <div className="row">
                <input type="submit" value="Submit" className="btn btn-primary" onClick={this.getData}/>
              </div>
          </div>
        </form>
        <div>
          {dataTable}
        </div>
      </div>
    );
  }
});

module.exports=FormComponent
