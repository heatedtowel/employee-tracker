const inquirer = require('inquirer');
const mysql = require('mysql2');

const db = mysql.createConnection({
  user: 'root',
  database: 'employee_db'
});

function start() {

  inquirer
    .prompt([
      {
        type: 'list',
        message: 'What would you like to do?',
        choices: ['View', 'Add'],
        name: 'choice',
      },
      {
        type: 'list',
        message: 'What would you like to view?',
        choices: ['departments', 'roles', 'employees'],
        name: 'viewAnswer',
        when: (answers) => answers.choice === 'View'
      },
      {
        type: 'list',
        message: 'What would you like to add?',
        choices: ['department', 'role', 'employee'],
        name: 'addAnswer',
        when: (answers) => answers.choice === 'Add'
      },
      {
        message: 'What is the department name?',
        name: 'departmentName',
        when: (answers) => answers.addAnswer === 'department'
      }
      
    ])
    .then((answers) => {
      const {choice, viewAnswer, addAnswer, departmentName} = answers;
      switch (choice) {
        case 'View':
          db.query(`SELECT * FROM ${viewAnswer};`, (err, results) => {
            console.table(results)
            init()
          });
          break;
        case 'Add':
          if (addAnswer === 'department') addDepartment(addAnswer, departmentName)
          if (addAnswer === 'role') addARole(db);
          if (addAnswer === 'employee') addAEmployee(db)
          break;
        case 'Add a role':
          db.query('INSERT INTO roles (name) VALUES;', (err, results) => {
            console.table(results)
            init()
          });
          break;
        case 'Add an employee':
          db.query('INSERT INTO employees (name) VALUES;', (err, results) => {
            console.table(results)
            init()
          });
          break;
        default:
          break;
      }
    })
};

function addDepartment(table, data) {
  db.query(`INSERT INTO ${table}s (name) VALUES ("${data}")  ;`, (err, results) => {
    console.table(results)
    init()
  })
}

function addARole(db) {
  inquirer
    .prompt([
      {
        message: 'What is their title',
        name: 'title',
      },
      {
        message: 'What is their salary',
        name: 'salary',
      },
      {
        message: 'What is their department id',
        name: 'id',
      },
    ])
    .then((answers) => {
      const {title , salary , id} = answers;

      db.query(`INSERT INTO roles (title , salary , department_id) VALUES ('${title}' , ${salary} , ${id});`, (err, results) => {
        console.table(results);
        init();
      })
    })
};

function addAEmployee() {
    

  inquirer
    .prompt([
      {
        message: 'What is their first name',
        name: 'firstName',
      },
      {
        message: 'What is their last name',
        name: 'lastName',
      },
      {
        type: 'number',
        message: 'What is their role id',
        name: 'roleId',
      },
      {
        type: 'number',
        message: 'What is their managers id',
        name: 'managerId',
      }
    ])
    .then((answers) => {
      const {firstName, lastName, roleId, managerId} = answers;

      db.query(`INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('${firstName}' , '${lastName}' , ${roleId}, ${managerId});`, (err, results) => {
        console.table(results);
        init();
      })
    })
};





function init() {
  start();
}

init();