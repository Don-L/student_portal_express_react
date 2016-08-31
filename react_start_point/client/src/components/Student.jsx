var React = require('react');

var Student = React.createClass({

  render: function(){
    return (
      <div>
        <h2>{this.props.surname}, {this.props.first_names}</h2>
        <h3>cohort {this.props.cohort}</h3>
        <Tasklist student_id={this.props.id}
                  all_tasks={this.props.all_tasks}/>
      </div>
    );
  }

});

module.exports = Student;
