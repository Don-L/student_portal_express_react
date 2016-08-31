DROP DATABASE IF EXISTS studentsExpressReact;
CREATE DATABASE studentsExpressReact;

\c studentsExpressReact;

CREATE TABLE students (
  ID SERIAL4 PRIMARY KEY,
  surname VARCHAR,
  first_names VARCHAR,
  cohort INT4
);

CREATE TABLE allTasks (
  id SERIAL4 PRIMARY KEY,
  descriptor VARCHAR,
  task_group_id INT4
);

CREATE TABLE completedTasks (
  id SERIAL4 PRIMARY KEY,
  student_id REFERENCES students(id) ON DELETE CASCADE,
  task_id REFERENCES allTasks(id) ON DELETE CASCADE
);

ALTER TABLE completedTasks ADD UNIQUE (student_id, task_id);

INSERT INTO students (surname, first_names, cohort)
  VALUES ('Tyler', 'Mary Retriever', 3);

INSERT INTO students (surname, first_names, cohort)
  VALUES ('Goulden', 'Jimmy Spaniel', 3);

INSERT INTO students (surname, first_names, cohort)
  VALUES ('McFadden', 'Alison Labrador', 7);


INSERT INTO allTasks (descriptor, task_group_id)
  VALUES ('A', 1);

INSERT INTO allTasks (descriptor, task_group_id)
  VALUES ('B', 1);

INSERT INTO allTasks (descriptor, task_group_id)
  VALUES ('C', 2);

INSERT INTO allTasks (descriptor, task_group_id)
  VALUES ('D', 2);


INSERT INTO completedTasks (student_id, task_id)
  VALUES (1, 1);

INSERT INTO completedTasks (student_id, task_id)
  VALUES (1, 2);

INSERT INTO completedTasks (student_id, task_id)
  VALUES (2, 1);

INSERT INTO completedTasks (student_id, task_id)
  VALUES (2, 4);

INSERT INTO completedTasks (student_id, task_id)
  VALUES (3, 2);

INSERT INTO completedTasks (student_id, task_id)
  VALUES (3, 3);
