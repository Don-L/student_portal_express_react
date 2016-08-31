const React = require('react');
const TaskList = require('./TaskList.jsx');

const Student = React.createClass({

  render: function(){
    return (
      <div onClick={this.onClick}>
        <h2>{this.props.surname}, {this.props.first_names}</h2>
        <h3>cohort {this.props.cohort}</h3>
        <TaskList all_tasks={this.props.all_tasks}
                  onTaskClick={this.props.onTaskClick}
        />
      </div>
    );
  },

  onClick: function(e) {
    e.preventDefault();
    this.props.onStudentClick(this.props.id);
  }

});

module.exports = Student;
