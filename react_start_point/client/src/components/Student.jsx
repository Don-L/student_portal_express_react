var React = require('react');
var StudentsBox = require('./StudentsBox.jsx');

var Student = React.createClass({

  render: function(){
    return (
      <div>
        <h2>{this.props.surname}, {this.props.first_names}</h2>
        <h3>cohort {this.props.cohort}</h3>
      </div>
    );
  }

});

module.exports = Student;
