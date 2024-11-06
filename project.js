const employees=[
    {
        name: "Adnan",
        role: "SDE",
        salary: "42000",
        phoneNumber: "7668533387",
        Email: "farooqui.adnan76685@gmail.com",
        companyName: "Apple"
    },
    {
        name: "Hasir",
        role: "Analyst",
        salary: "17000",
        phoneNumber: "7663245034",
        Email: "hasira007@gmail.com",
        companyName: "HCL"
    },
    {
        name: "Anas",
        role: "CTO",
        salary: "142000",
        phoneNumber: "9256736523",
        Email: "siddiqui11@gmail.com",
        companyName: "WFH"
    }
]

const tbody = document.getElementById("tbody");
let employeeId=1000;

function addEmployee(employeeObj){
    const tr=document.createElement("tr");
    const employeeIdCell=document.createElement("td")
    employeeIdCell.innerText=employeeId++;
    tr.appendChild(employeeIdCell);

    for(let key in employeeObj){
        const td=document.createElement("td");
        td.innerText=employeeObj[key];
        tr.appendChild(td);
    }
    const actionsCell=document.createElement("td");
    const deleteButton=document.createElement("button");
    deleteButton.innerText="Delete";
    const editButton=document.createElement("button");
    editButton.innerText="Edit";

    deleteButton.addEventListener("click", deleteRecord);
    editButton.addEventListener("click",editRecord);

    actionsCell.append(deleteButton,editButton);
    tr.appendChild(actionsCell);
    tbody.appendChild(tr);
}

employees.forEach((emp) => {
    addEmployee(emp)
})

const popup=document.querySelector(".popup");
function togglepopup(){
    if(popup.style.display==="none"){
        popup.style.display="flex";
    }
    else{
        popup.style.display="none";
    }
}

const form= document.getElementById("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let employee={
        name: form.name.value,
        role: form.role.value,
        salary: form.salary.value ,
        phoneNumber:form.phoneNumber.value,
        Email:form.email.value ,
        companyName:form.companyName.value 
    }
    addEmployee(employee);
    form.reset();
    togglepopup();
})

function deleteRecord(e){
    let tr=e.target.parentNode.parentNode;
    tr.remove();
}

function editRecord(e){
    let tr=e.target.parentNode.parentNode;
    
}