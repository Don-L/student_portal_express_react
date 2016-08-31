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
      allTasksData: [],
      viewer: 'admin'
    };
  },

  render: function(){

    const nodes = this.state.studentData.map(function(student) {
        return (
          <Student key={student.id}
                   all_tasks={this.state.allTasksData}
                   id={student.id}
                   surname={student.surname}
                   first_names={student.first_names}
                   cohort={student.cohort}
                   onStudentClick={this.onStudentClick}
                   onTaskClick={this.onTaskClick}
          />
        );
      }.bind(this));

    if (this.state.viewer === 'admin') {
      return (
        <div>
          {nodes}
        </div>
      );
    } else {
      let student = this.getStudentById(this.state.viewer);
      return (
        <Student key={student.id}
                 all_tasks={this.state.allTasksData}
                 id={student.id}
                 surname={student.surname}
                 first_names={student.first_names}
                 cohort={student.cohort}
                 onStudentClick={this.onStudentClick}
                 onTaskClick={this.onTaskClick}
        />
    )
    }

  },

//returns array
  getStudentById: function(id) {
    let allStudents = this.state.studentData;
    let student = allStudents.filter(function(stud) {
      return stud.id === id;
    });
    return student[0];
  },

  onStudentClick: function(id) {
    this.setState({viewer: id});
  },

  onTaskClick: function(id) {
    console.log('now update the database!');
  }

});

module.exports = StudentsBox;
