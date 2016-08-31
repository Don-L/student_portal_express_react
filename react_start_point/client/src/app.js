var React = require('react');
var ReactDOM = require('react-dom');
var PuppiesBox = require('./components/PuppiesBox.jsx');

window.onload = function(){
  ReactDOM.render(
    <PuppiesBox url="http://localhost:3000/api/puppies" />,
    document.getElementById('app')
  );
}
