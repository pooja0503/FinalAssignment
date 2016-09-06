var React = require('react');
var ReactDOM = require('react-dom');
var Home=require('./components/Home');
var {browserHistory, Route, Router, IndexRoute} = require('react-router');
var Navbar=require('./components/Navbar');
var ManageParticipants=require('./components/ManageParticipants');

var MainComponent = React.createClass({
    render: function(){
        console.log("This is my parent");
        return(
            <div>
                <Navbar/>
                <br/><br/><br/><br/>
                {this.props.children};
            </div>
        );
    }
});

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={MainComponent}>
            <IndexRoute component={Home}/>
            <Route path="/home" component={Home}/>
            <Route path="/manageparticipants" component={ManageParticipants}/>
        </Route>
    </Router>,document.getElementById('app')
)
