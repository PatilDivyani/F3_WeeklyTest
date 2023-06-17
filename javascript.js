let userList = [];
//  [
//     {id:1, name:"jack", profession:"developer", age:20}, 
//     {id:2, name:"john", profession:"admin", age:28}
// ]
// let idCounter = 1;
// function generateId() {
//     return idCounter++;
// }
const addUser = document.querySelector('button');
const msgDisplay = document.querySelector(".msg");
console.log(msgDisplay);


addUser.addEventListener('click', ()=>{
    const nameInput = document.getElementById('name');
    const professionInput = document.getElementById('profession');
    const ageInput = document.getElementById('age');

    // const msgDisplay = document.getElementsByClassName("msg");
    console.log(msgDisplay);
    msgDisplay.innerHTML = "";

    if(nameInput.value=='' || professionInput.value=='' || ageInput.value==''){
        msgDisplay.innerHTML = "Error : Please Make sure All fields are filled before adding in an employee !";
        msgDisplay.style.color = 'red';
        return;
    }
    msgDisplay.innerHTML = "Success : Employee Added!"
    msgDisplay.style.color = 'green';
    
    //adding input values in userlist array
    const employee = {
        id: userList.length+1,
        name: nameInput.value,
        profession: professionInput.value,
        age: ageInput.value
    };
    
    userList.push(employee);
    console.log(userList);
    displayEmployees();    

    nameInput.value = '';
    professionInput.value = '';
    ageInput.value = '';

 })

function displayEmployees() {
    const displayInfo = document.querySelector('.displayInfo');
    const p = document.getElementsByClassName('noEmployee')
    displayInfo.innerHTML ='';
    userList.forEach((user)=>{
        let employeeData = document.createElement('div');
        employeeData.className = 'employeeData';
       
        employeeData.innerHTML = `
            <div class="employeeList">
                <div>${user.id}</div>
                <div>Name : ${user.name}</div>
                <div>Profession: ${user.profession}</div>
                <div>Age:${user.age}</div>
            </div>
            <button type="submit" onclick="deleteEmployee(${user.id})">Delete User</button>` ;
        displayInfo.appendChild(employeeData)
    })

    console.log(displayInfo);
}

function deleteEmployee(employeeId){
    console.log(employeeId);
    userList = userList.filter((user)=>{
        return user.id!==employeeId;
    })
    console.log(userList);
    displayEmployees();
}