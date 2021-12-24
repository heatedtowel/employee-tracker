INSERT INTO
  departments (name)
VALUES
  ("Engineering"),
  ("Finance"),
  ("Legal"),
  ("Sales");
INSERT INTO
  roles (title, salary, department_id)
VALUES
  ('Software Engineer', 75000, 1),
  ('Accountant', 55000, 2),
  ('Account Manager', 60000, 4),
  ('Lawyer', 105000, 3),
  ('Legal Team Lead', 120000, 3);
INSERT INTO
  employees (first_name, last_name, role_id, manager_id)
VALUES
  ('John', 'Doe', 1, null),
  ('Henry', 'Hugo', 2, 1),
  ('Fred', 'Frankly', 3, null),
  ('Maria', 'Mustafo', 4, 2);