var React = require('react');

var StudentsBox = React.createClass({

  loadResourcesFromServer: function() {
    var url = this.props.url;
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.setRequestHeader("Content-Type", "application/json");
    request.onload = function() {
      if(request.status === 200) {
        var data = JSON.parse(request.responseText);
        this.setState({data: data.data});
      }
    }.bind(this);
    request.send(null);
  },

  componentDidMount: function() {
    this.loadResourcesFromServer();
  },

  getInitialState: function () {
    return {
      data: []
    };
  },

  render: function(){
    console.log("hello", this.state.data);

    const nodes = this.state.data.map(function(student) {
        return (
          <Student key={student.id}
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
