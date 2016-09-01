var promise = require('bluebird');

var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://localhost:5432/students_express_react_database';
var db = pgp(connectionString);

function getAllStudents(req, res, next) {
  db.any('select * from students order by surname asc')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved all students'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getAllTasks(req, res, next) {
  db.any('select * from all_tasks')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved all tasks'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getAllCompletedTasks(req, res, next) {
  db.any('select * from completed_tasks')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved all completed tasks'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}


// function getSinglePuppy(req, res, next) {
//   var pupID = parseInt(req.params.id);
//   db.one('select * from pups where id = $1', pupID)
//     .then(function (data) {
//       res.status(200)
//         .json({
//           status: 'success',
//           data: data,
//           message: 'Retrieved ONE puppy'
//         });
//     })
//     .catch(function (err) {
//       return next(err);
//     });
// }
//
function createCompletedTask(req, res, next) {
  console.log('function called');
  req.body.student_id = parseInt(req.body.student_id);
  console.log(req.body.student_id);
  req.body.task_id = parseInt(req.body.task_id);
  db.none('insert into completed_tasks(student_id, task_id)' +
      `values(${req.body.student_id}, ${req.body.task_id})`,
    req.body)
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Inserted completed task'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

// function removePuppy(req, res, next) {
//   var pupID = parseInt(req.params.id);
//   db.result('delete from pups where id = $1', pupID)
//     .then(function (result) {
//       /* jshint ignore:start */
//       res.status(200)
//         .json({
//           status: 'success',
//           message: `Removed ${result.rowCount} puppy`
//         });
//       /* jshint ignore:end */
//     })
//     .catch(function (err) {
//       return next(err);
//     });
// }
//
// function updatePuppy(req, res, next) {
//   db.none('update pups set name=$1, breed=$2, age=$3, sex=$4 where id=$5',
//     [req.body.name, req.body.breed, parseInt(req.body.age),
//       req.body.sex, parseInt(req.params.id)])
//     .then(function () {
//       res.status(200)
//         .json({
//           status: 'success',
//           message: 'Updated puppy'
//         });
//     })
//     .catch(function (err) {
//       return next(err);
//     });
// }
//


module.exports = {
  getAllStudents: getAllStudents,
  getAllTasks: getAllTasks,
  getAllCompletedTasks: getAllCompletedTasks,
  // getSinglePuppy: getSinglePuppy,
  createCompletedTask: createCompletedTask
  // updatePuppy: updatePuppy,
  // removePuppy: removePuppy
};
