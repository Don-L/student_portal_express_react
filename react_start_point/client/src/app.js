var React = require('react');
var ReactDOM = require('react-dom');
var StudentsBox = require('./components/StudentsBox.jsx');

window.onload = function(){
  ReactDOM.render(
    <StudentsBox url="http://localhost:3000/students" />,
    document.getElementById('app')
  );
}
