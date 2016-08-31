const React = require('react');

const TaskCheck = React.createClass({

  render: function(){
    return (
        <label onClick={this.onTaskClick}><input type="checkbox" id={this.props.task_number} value="first_checkbox"/> {this.props.description}</label>
    );
  },

  onTaskClick: function() {
    this.props.onTaskClick(this.props.task_number);
  }

});

module.exports = TaskCheck;
