const React = require('react');
const TaskCheck = require('./TaskCheck.jsx');

const TaskList = React.createClass({

  render: function(){
    return (
      <div>
        <TaskCheck description={'Learn to use a computer'}
              task_number={1}
              onTaskClick={this.props.onTaskClick}
        />
      <TaskCheck description={'Type without looking'}
              task_number={2}
              onTaskClick={this.props.onTaskClick}
        />
      </div>
    )
  }

  // getTask: function(id) {
  //   let all_tasks = this.props.all_tasks;
  //   let task = all_tasks.filter(function(item) {
  //     return item.id === id;
  //   });
  //   task = task[0];
  //   return task;
  // }

});

module.exports = TaskList;
