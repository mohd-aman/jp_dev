let addBtn = document.querySelector(".addBtn");
let body = document.querySelector("body");
let isBtnPressed = false;
// localStorage.setItem();
// localStorage.getItem();
let todoArr = localStorage.getItem("todoArr");
console.log(todoArr);
if(todoArr){
    //something present before refresh or opening
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
        let parentDiv = document.querySelector(".tasks");
        parentDiv.appendChild(divEle); 
    }
}
else{
    todoArr = [];
    todoArr = JSON.stringify(todoArr);
    localStorage.setItem("todoArr",todoArr);
}

// localStorage -> key-value pair 

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
                let parentDiv = document.querySelector(".tasks");
                parentDiv.appendChild(divEle); 
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