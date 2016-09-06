var React=require('react');
var FormComponent = require('./FormComponent');


var ManageParticipants=React.createClass({
  render:function()
  {
    return(
        <div className="container">
          <FormComponent />
          <hr />
        </div>
    );
  }
});

module.exports=ManageParticipants
