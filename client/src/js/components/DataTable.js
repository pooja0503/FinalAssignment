var React=require('react');
var count=0;
//var empData=[];

var DataTable=React.createClass({
  render:function()
  {
    console.log(typeof this.props.empData);
    var a=this.props.empData.map(function(data){
      count++;
      console.log("Inside render");
      return(
        <tr>
          <td>{count}</td>
          <td>{data.waveId}</td>
          <td>{data.name}</td>
          <td>{data.email}</td>
          <td>{data.giturl}</td>
          <td>{data.empcode}</td>
          <td>{data.empdep}</td>
          <td>{data.empdes}</td>
          <td>{data.skill}</td>
          <td>{data.exp}</td>
        </tr>
      );
    });
    return(
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Wave Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Git URL</th>
            <th>Emp Code</th>
            <th>Emp Dep</th>
            <th>Emp Des</th>
            <th>Skills</th>
            <th>Experience</th>
          </tr>
        </thead>
        <tbody>
          {a}
        </tbody>
      </table>
    );
  }
});

module.exports=DataTable
