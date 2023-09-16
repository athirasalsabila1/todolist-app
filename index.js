// 1.  reference html element form in js
const formTask = document.querySelector(".form-task");

// 2. menambahkan event listener di elemen form
formTask.addEventListener("submit",(event)=> {
event.preventDefault();
    
// 3. reference html element input
const inputForm = document.querySelector(".input-form");

// 4. reference html element ul / wrapper list
const wrapperList= document.querySelector(".task-list-wrapper")

// 5. create document <li> using js
const taskList = document.createElement("li");

// 6. masukkan input value ke <li>
taskList.innerHTML = inputForm.value;

// 7. append <li> ke <ul>
wrapperList.append(taskList);
});


