// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
    // Get user input to create and return an array of employee objects

  const employees = [];
  let addMore = true;

  while (addMore) {
    const firstName = prompt("Enter the employee's First name:");
    const lastName = prompt("Enter the employee's Last name:");
    const salary = parseFloat(prompt("Enter the employee's salary:"));
    
    employees.push({ firstName, lastName, salary });
    addMore = confirm("Do you want to add another employee?");
      // Sort employees alphabetically by last name
    employees.sort((a, b) => a.lastName.localeCompare(b.lastName));
  }
  return employees;
}
// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // Calculate and display the average salary

    const totalSalary = employeesArray.reduce((acc, employee) => acc + employee.salary, 0);
    const averageSalary = totalSalary / employeesArray.length;

    console.log(`The average employee salary between our ${employeesArray.length} employee(s) is ${averageSalary.toLocaleString("en-US", { style: "currency", currency: "USD" })}.`);
  }
  

// Select a random employee
const getRandomEmployee = function(employeesArray) {
      // Select and display a random employee
  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray[randomIndex];
  console.log(`Congratulations to: ${randomEmployee.firstName} ${randomEmployee.lastName} on winning our random employee drawingdrawing🎉!`);
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
