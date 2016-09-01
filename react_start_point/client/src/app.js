var React = require('react');
var ReactDOM = require('react-dom');
var StudentsBox = require('./components/StudentsBox.jsx');

window.onload = function(){
  ReactDOM.render(
    <StudentsBox studentsURL="http://91.215.184.162:3000/students"
                 allTasksURL="http://91.215.184.162:3000/all_tasks"
                 completedTasksUrl="http://91.215.184.162:3000/completed_tasks"
    />,
    document.getElementById('app')
  );
}
