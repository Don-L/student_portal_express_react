var React = require('react');

var Student = React.createClass({

  render: function(){
    return (
      <div onClick={this.onClick}>
        <h2>{this.props.surname}, {this.props.first_names}</h2>
        <h3>cohort {this.props.cohort}</h3>

      </div>
    );
  },

  onClick: function(e) {
    console.log('click!')
    e.preventDefault()
    this.props.onStudentClick(this.props.id);
  }

});

module.exports = Student;
