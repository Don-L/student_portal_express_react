var React = require('react');
var Student = require('./Student.jsx');

var StudentsBox = React.createClass({

  loadResourcesFromServer: function() {
    var studentsURL = this.props.studentsURL;
    var studentsRequest = new XMLHttpRequest();
    studentsRequest.open("GET", studentsURL);
    studentsRequest.setRequestHeader("Content-Type", "application/json");
    studentsRequest.onload = function() {
      if(studentsRequest.status === 200) {
        var data = JSON.parse(studentsRequest.responseText);
        this.setState({studentData: data.data});
      }
    }.bind(this);
    studentsRequest.send(null);

    var allTasksURL = this.props.allTasksURL;
    var allTasksRequest = new XMLHttpRequest();
    allTasksRequest.open("GET", allTasksURL);
    allTasksRequest.setRequestHeader("Content-Type", "application/json");
    allTasksRequest.onload = function() {
      if(allTasksRequest.status === 200) {
        var data = JSON.parse(allTasksRequest.responseText);
        this.setState({allTasksData: data.data});
      }
    }.bind(this);
    allTasksRequest.send(null);
  },

  componentDidMount: function() {
    this.loadResourcesFromServer();
  },

  getInitialState: function () {
    return {
      studentData: [],
      allTasksData: []
    };
  },

  render: function(){
    console.log("hello", this.state.studentData);
    console.log("hello again", this.state.allTasksData);
    console.log("hello for a final time", this.state.allTasksData[1]);

    const nodes = this.state.studentData.map(function(student) {
        return (
          <Student key={student.id}
                   all_tasks={this.state.allTasksData}
                   surname={student.surname}
                   first_names={student.first_names}
                   cohort={student.cohort}
                   onClick={this.onStudentClick}
          />
        );
      }.bind(this));

    return (
      <div>
        {nodes}
      </div>
    );
  }

});

module.exports = StudentsBox;
