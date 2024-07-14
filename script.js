let myTotal = 0;

function submitEmployeeInfo(event) {
    event.preventDefault(); 
    let firstNameInput = document.getElementById('firstName').value;
    let lastNameInput = document.getElementById('lastName').value;
    let idNumberInput = document.getElementById('idNumber').value;
    let jobTitleInput = document.getElementById('jobTitle').value;
    let annualSalaryInput = parseInt(document.getElementById('annualSalary').value);
    let newTableRow = document.getElementById('salary-table');

    updateTable(firstNameInput, lastNameInput, idNumberInput, jobTitleInput, annualSalaryInput, newTableRow);
    // console.log(firstNameInput, idNumberInput, jobTitleInput, annualSalaryInput)
        
    addSalary(annualSalaryInput);
    resetForm();
}

function addSalary(salary) {
  myTotal += (salary/12);
  document.getElementById('totalMonthly').innerHTML = `$${myTotal}`;
}


function updateTable(firstNameInput, lastNameInput, idNumberInput, jobTitleInput, annualSalaryInput, newTableRow) {
        newTableRow.innerHTML += `
      <tr>
      <td>${firstNameInput}</td>
      <td>${lastNameInput}</td>
      <td>${idNumberInput}</td>
      <td>${jobTitleInput}</td>
      <td id="salary">$ ${annualSalaryInput}</td>
      <td><button onclick="removeItem(event, ${annualSalaryInput})">❌</button>
      </td>
      </tr> 
      `
}

function removeItem(event, deleteSalary) {
    document.querySelector(`#Warning`).innerHTML = ``
   if (event) {
    // Grab the Parent's salary element.
    // let deleteSalary = parseInt(event.target.parentElement.parentElement.querySelector('#salary').innerHTML);
    // let deleteSalary = parseInt(event.target.parentElement.parentElement.getElementById('salary').value);

    // Remove the salary element from myTotal
    removeSalary(deleteSalary);
     event.target.parentElement.parentElement.remove()
     document.querySelector('#Warning').innerHTML += ` `
   }
 }

 function removeSalary(salary) {
    myTotal -= salary/12;
    if (isNaN(myTotal)) {
      myTotal = 0;
      document.getElementById('totalMonthly').innerHTML = ` `;
    } else {
      document.getElementById('totalMonthly').innerHTML = `$${myTotal}`;
    }
  }

function resetForm() {
  let inputs = document.querySelectorAll("input");
  inputs.forEach((input) => (input.value = ""));
}
