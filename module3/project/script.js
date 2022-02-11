let addBtn = document.querySelector(".addBtn");
let body = document.querySelector("body");
let taskListsBtn = document.querySelector(".taskLists");
let completedBtn = document.querySelector(".completed");
let isBtnPressed = false;
// localStorage.setItem();
// localStorage.getItem();
let todoArr = localStorage.getItem("todoArr");
let completedArr = localStorage.getItem("completedArr");
// console.log(completedArr);
// console.log(todoArr);
if(!completedArr){
    localStorage.setItem("completedArr","[]");
}

if(todoArr){
    // UI is being formed with the help of local storage data
    //something present before refresh or opening
    //[task1,task2,task3,........]
    // todoArr = JSON.parse(localStorage.getItem("todoArr"));
    // for(let i=0;i<todoArr.length;i++){
    //     let divEle = document.createElement("div");
    //             divEle.setAttribute("class","oneTask");
    //             divEle.innerHTML = `<i class="material-icons done">done</i>
    //                                 <p>${todoArr[i]}</p>
    //                                 <i class="material-icons delete">delete</i>`;
    //             let deleteBtn = divEle.querySelector(".delete");
    //             deleteBtn.addEventListener("click",function(e){
    //                                 e.target.parentNode.remove();
    //                                 let allP = document.querySelectorAll(".oneTask p");
    //                                 let newArr = [];
    //                                 for(let i=0;i<allP.length;i++){
    //                                     newArr.push(allP[i].innerHTML);
    //                                 }
    //                                 localStorage.setItem("todoArr",JSON.stringify(newArr));
    //                         })
    //             let doneBtn = divEle.querySelector(".done");
    //             doneBtn.addEventListener("click",function(e){
    //                 let taskValue = e.target.nextElementSibling.innerHTML;
    //                 e.target.parentNode.remove();
    //                 let allP = document.querySelectorAll(".oneTask p");
    //                 let newArr = [];
    //                 for(let i=0;i<allP.length;i++){
    //                     newArr.push(allP[i].innerHTML);
    //                 }
    //                 localStorage.setItem("todoArr",JSON.stringify(newArr));
    //                 //update in completedArr;
    //                 let completedArr =JSON.parse(localStorage.getItem("completedArr"));
    //                 completedArr.push(taskValue);
    //                 localStorage.setItem("completedArr",JSON.stringify(completedArr));
    //             })            
                
    //     let parentDiv = document.querySelector(".tasks");
    //     parentDiv.appendChild(divEle); 
    // }

    // ------------------------------------ or ------------------------

}
else{
    todoArr = [];
    todoArr = JSON.stringify(todoArr);
    localStorage.setItem("todoArr",todoArr);
}

// localStorage -> key-value pair 
document.addEventListener('DOMContentLoaded', function() {
    // console.log('DOM fully loaded and parsed');
    taskListsBtn.click();
});



taskListsBtn.addEventListener("click",function(){
    if(!taskListsBtn.classList.contains("active")){
        taskListsBtn.classList.add("active");
        completedBtn.classList.remove("active");
    }
    let allTaskDiv = document.querySelectorAll(".oneTask");
    for(let i=0;i<allTaskDiv.length;i++){
        allTaskDiv[i].remove();
    }
    todoArr = JSON.parse(localStorage.getItem("todoArr"));
    //[task1,task2,task3,........]
    for(let i=0;i<todoArr.length;i++){
        let divEle = document.createElement("div");
                divEle.setAttribute("class","oneTask");
                divEle.innerHTML = `<i class="material-icons done">done</i>
                                    <p>${todoArr[i]}</p>
                                    <i class="material-icons delete">delete</i>`;
                let deleteBtn = divEle.querySelector(".delete");
                deleteBtn.addEventListener("click",function(e){
                                    e.target.parentNode.remove();
                                    let allP = document.querySelectorAll(".oneTask p");
                                    let newArr = [];
                                    for(let i=0;i<allP.length;i++){
                                        newArr.push(allP[i].innerHTML);
                                    }
                                    localStorage.setItem("todoArr",JSON.stringify(newArr));
                            })
                let doneBtn = divEle.querySelector(".done");
                doneBtn.addEventListener("click",function(e){
                    let taskValue = e.target.nextElementSibling.innerHTML;
                    e.target.parentNode.remove();
                    let allP = document.querySelectorAll(".oneTask p");
                    let newArr = [];
                    for(let i=0;i<allP.length;i++){
                        newArr.push(allP[i].innerHTML);
                    }
                    localStorage.setItem("todoArr",JSON.stringify(newArr));
                    //update in completedArr;
                    let completedArr =JSON.parse(localStorage.getItem("completedArr"));
                    completedArr.push(taskValue);
                    localStorage.setItem("completedArr",JSON.stringify(completedArr));
                })            
                
        let parentDiv = document.querySelector(".tasks");
        parentDiv.appendChild(divEle); 
    }

})

completedBtn.addEventListener("click",function(){
    if(!completedBtn.classList.contains("active")){
        completedBtn.classList.add("active");
        taskListsBtn.classList.remove("active");
    }
    let allTaskDiv = document.querySelectorAll(".oneTask");
    for(let i=0;i<allTaskDiv.length;i++){
        allTaskDiv[i].remove();
    }
    let completedArr = JSON.parse(localStorage.getItem("completedArr"));
    // console.log(completedArr);
    for(let i=0;i<completedArr.length;i++){
        let divEle = document.createElement("div");
                divEle.setAttribute("class","oneTask");
                divEle.innerHTML = `<p>${completedArr[i]}</p>
                                    <i class="material-icons delete">delete</i>`;
                let deleteBtn = divEle.querySelector(".delete");
                deleteBtn.addEventListener("click",function(e){
                                    e.target.parentNode.remove();
                                    let allP = document.querySelectorAll(".oneTask p");
                                    let newArr = [];
                                    for(let i=0;i<allP.length;i++){
                                        newArr.push(allP[i].innerHTML);
                                    }
                                    localStorage.setItem("completedArr",JSON.stringify(newArr));
                            })            
        let parentDiv = document.querySelector(".tasks");
        parentDiv.appendChild(divEle); 
    }
})

addBtn.addEventListener("click",function(){
    if(isBtnPressed == false){
    // <div class="taskToDo">
    //     <input type="text" placeholder="ENTER A TASK TO ADD">
    // </div>
        let divToAdd = document.createElement("div");
        divToAdd.setAttribute("class","taskToDo");
        divToAdd.innerHTML = `<input type="text" placeholder="ENTER A TASK TO ADD">`;
        body.appendChild(divToAdd);
        divToAdd.addEventListener("keypress",function(e){
            // console.log(e.key);
            if(e.key == 'Enter'){
                if(e.target.value.length == 0){
                    return;
                }
            // <div class="oneTask">
                // <i class="material-icons done">done</i>
                // <p>Task 1</p>
                // <i class="material-icons delete">delete</i>
            // </div>
                let divEle = document.createElement("div");
                divEle.setAttribute("class","oneTask");
                divEle.innerHTML = `<i class="material-icons done">done</i>
                                    <p>${e.target.value}</p>
                                    <i class="material-icons delete">delete</i>`;
                todoArr =JSON.parse(localStorage.getItem("todoArr"));
                todoArr.push(e.target.value);
                localStorage.setItem("todoArr",JSON.stringify(todoArr));
                let deleteBtn = divEle.querySelector(".delete");
                deleteBtn.addEventListener("click",function(e){
                    e.target.parentNode.remove();
                    let allP = document.querySelectorAll(".oneTask p");
                    let newArr = [];
                    for(let i=0;i<allP.length;i++){
                        newArr.push(allP[i].innerHTML);
                    }
                    localStorage.setItem("todoArr",JSON.stringify(newArr));
                })
                let doneBtn = divEle.querySelector(".done");
                doneBtn.addEventListener("click",function(e){
                    let taskValue = e.target.nextElementSibling.innerHTML;
                    e.target.parentNode.remove();
                    let allP = document.querySelectorAll(".oneTask p");
                    let newArr = [];
                    for(let i=0;i<allP.length;i++){
                        newArr.push(allP[i].innerHTML);
                    }
                    localStorage.setItem("todoArr",JSON.stringify(newArr));
                    //update in completedArr;
                    let completedArr =JSON.parse(localStorage.getItem("completedArr"));
                    completedArr.push(taskValue);
                    localStorage.setItem("completedArr",JSON.stringify(completedArr));
                })
                let parentDiv = document.querySelector(".tasks");
                parentDiv.appendChild(divEle); 
                taskListsBtn.click();
                addBtn.click();                   
            }
        })
        isBtnPressed = true;
    }
    else{
        let modal = document.querySelector(".taskToDo");
        modal.remove();
        isBtnPressed = false;
    }
})