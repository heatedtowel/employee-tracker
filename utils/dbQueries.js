const inquirer = require('inquirer');


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

      return db.query(`INSERT INTO roles (title , salary , department_id) VALUES ('${title}' , ${salary} , ${id});`)
    })
};

function addAnEmployee() {

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
        message: 'What is their name',
        name: 'name',
      },
    ])
    .then((answers) => {
      const {title , salary , name} = answers;

      db.query(`INSERT INTO produce (title , salary , name) VALUES (${title} , ${salary} , ${name});`)
      
    })
};

function viewAllQuery(response) {
  console.log(db.query(`SELECT * FROM ${response}`))
};

module.exports = {viewAllQuery , addARole}