DROP DATABASE IF EXISTS students_express_react_database;
CREATE DATABASE students_express_react_database;

\c students_express_react_database;

CREATE TABLE students (
  ID SERIAL4 PRIMARY KEY,
  surname VARCHAR,
  first_names VARCHAR,
  cohort INT4
);

CREATE TABLE all_tasks (
  id SERIAL4 PRIMARY KEY,
  descriptor VARCHAR,
  task_group_id INT4
);

CREATE TABLE completed_tasks (
  id SERIAL4 PRIMARY KEY,
  student_id INT4 REFERENCES students(id) ON DELETE CASCADE,
  task_id INT4 REFERENCES all_tasks(id) ON DELETE CASCADE
);

ALTER TABLE completed_tasks ADD UNIQUE (student_id, task_id);

INSERT INTO students (surname, first_names, cohort)
  VALUES ('Tyler', 'Mary Retriever', 3);

INSERT INTO students (surname, first_names, cohort)
  VALUES ('Goulden', 'Jimmy Spaniel', 3);

INSERT INTO students (surname, first_names, cohort)
  VALUES ('McFadden', 'Alison Labrador', 7);


INSERT INTO all_tasks (descriptor, task_group_id)
  VALUES ('A', 1);

INSERT INTO all_tasks (descriptor, task_group_id)
  VALUES ('B', 1);

INSERT INTO all_tasks (descriptor, task_group_id)
  VALUES ('C', 2);

INSERT INTO all_tasks (descriptor, task_group_id)
  VALUES ('D', 2);


-- INSERT INTO completed_tasks (student_id, task_id)
--   VALUES (1, 1);
--
-- INSERT INTO completed_tasks (student_id, task_id)
--   VALUES (1, 2);
--
-- INSERT INTO completed_tasks (student_id, task_id)
--   VALUES (2, 1);
--
-- INSERT INTO completed_tasks (student_id, task_id)
--   VALUES (2, 4);
--
-- INSERT INTO completed_tasks (student_id, task_id)
--   VALUES (3, 2);
--
-- INSERT INTO completed_tasks (student_id, task_id)
--   VALUES (3, 3);
