
function caseSwitcher(answer, db) {
  switch (answer) {
    case 'View all departments':
      db.query('SELECT * FROM department')
      break;
    case 'Add a role':
      db.query('SELECT * FROM department')
      break;

    default:
      break;
  }
};

module.exports = caseSwitcher;




/* SELECT 
CONCAT(e.first_name," ",e.last_name) AS employee_name,
CONCAT(m.first_name," ",m.last_name) AS manager_name,
r.title AS role
FROM employee m
RIGHT JOIN employee e
ON m.id = e.manager_id
INNER JOIN role r
ON r.id = e.role_id; */