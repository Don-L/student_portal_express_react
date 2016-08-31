var React = require('react');
var ReactDOM = require('react-dom');
var StudentsBox = require('./components/StudentsBox.jsx');

window.onload = function(){
  ReactDOM.render(
    <StudentsBox studentsURL="http://localhost:3000/students"
                 allTasksURL="http://localhost:3000/all_tasks"
    />,
    document.getElementById('app')
  );
}
