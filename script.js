
let myTotal = 0;

// REQUIRES ALL INPUTS ARE ENTERED IN BEFORE SUBMIT BUTTON //
function submitEmployeeInfo(event) {
    let message = [];
    
    if (firstName.value === '' || firstName.value == null) {
      message.push('Required')
    }
    if (lastName.value === '' || lastName.value == null) {
      message.push('Required')
    }
    if (idNumber.value === '' || idNumber.value == null) {
      message.push('Required')
    }
    if (jobTitle.value === '' || jobTitle.value == null) {
      message.push('Required')
    }
    if (annualSalary.value === '' || annualSalary.value == null) {
      message.push('Required')
    }
    if (message.length > 0) {
      e.preventDefault()
      errorElement.innerText = message.join(', ')
    }
    
    event.preventDefault(); 
    let firstNameInput = document.getElementById('firstName').value;
    let lastNameInput = document.getElementById('lastName').value;
    let idNumberInput = document.getElementById('idNumber').value;
    let jobTitleInput = document.getElementById('jobTitle').value;
    let annualSalaryInput = parseInt(document.getElementById('annualSalary').value);
    let newTableRow = document.getElementById('salary-table');

    updateTable(firstNameInput, lastNameInput, idNumberInput, jobTitleInput, annualSalaryInput, newTableRow);
    addSalary(annualSalaryInput);
    resetForm();
}

// I DON'T REMEMBER WHAT THIS DOES BUT I KNOW IT'S SUPER IMPORTANT //
function addSalary(salary) {
  myTotal += Math.round(salary/12);
  myDollarTotal = myTotal.toLocaleString();
  
  document.getElementById('totalMonthly').innerHTML = `$${myDollarTotal}`;
  overBudget(myTotal)
}

// ADDS FROM MONTHLY TOTALS WHEN ENTRIES ARE ADDED //
function updateTable(firstNameInput, lastNameInput, idNumberInput, jobTitleInput, annualSalaryInput, newTableRow) {
        newTableRow.innerHTML += `
      <tr>
      <td>${firstNameInput}</td>
      <td>${lastNameInput}</td>
      <td>${idNumberInput}</td>
      <td>${jobTitleInput}</td>
      <td id="salary">$ ${annualSalaryInput.toLocaleString()}</td>
      <td><button onclick="removeItem(event, ${annualSalaryInput})">❌</button>
      </td>
      </tr> 
      `
}

// UPDATES TABLE WHEN ENTRIES ARE ENTERED IN INPUTS ABOVE //
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

 // UPDATES TABLE WHEN ENTRIES ARE REMOVED FROM TABLE //
 function removeSalary(salary) {
    myTotal -= Math.round(salary/12);
    myDollarTotal = myTotal.toLocaleString();
    if (isNaN(myTotal)) {
      myTotal = 0;
      document.getElementById('totalMonthly').innerHTML = ` `;
    } else {
      document.getElementById('totalMonthly').innerHTML = `$${myDollarTotal}`;
    }

    overBudget(myTotal)
  }

  // RESET INPUT FORM WITHOUT REFRESHING PAGE ---- REMOVES PREVIOUSLY ENTERED DATA //
function resetForm() {
  let inputs = document.querySelectorAll("input");
  inputs.forEach((input) => (input.value = ""));
}

// let footer = document.getElementById("footer");
// footer.style.color = '#ff0000';


// CHANGE COLOR OF MONTHLY TOTAL WHEN OVER BUDGET OF $20,000 //
function overBudget(numberToCheck)//(event, totalExceeded)// 
{
  console.log('here');
  let footer = document.getElementById("totalMonthly");
  if (numberToCheck > 20000) {
  console.log('if here');

    // document.querySelector(`footer`).classList = `over-budget`;
    footer.classList.add('over-budget');
   } else {
  console.log('there');

    // document.querySelector(`footer)`).classList = `under-budget`;
    footer.classList.remove('over-budget');
   }
   console.log(numberToCheck)
  

}




// overBudget()

// document.getElementById('totalMonthly').innerHTML 

// let colorMatch = {
//   '0-19'     : 'red',
//   '20-59'    : 'orange',
//   '60-100'   : 'green'
// };

// let content = $(".footer p").text();

//     if (content == "high") {

//         $(this).css("color", "#ffffff");
//     }
//    if (content == "low") {

//         $(this).css("color", "#ccc");
//     }
//    if (content == "critical") {

//         $(this).css("color", "#000");
//     }

// let Name = 'Red'
// if (Name == 'Red') {
//     //Code to set .bg-box-1 background color on style.css to #ee0000
//     let div = document.getElementsByClassName('totalMonthly')[0];
//     div.style.backgroundColor = '#ee0000';
// }



