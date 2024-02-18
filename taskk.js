let root=document.querySelector("#root")
let parentDiv=document.createElement("div")
root.appendChild(parentDiv)
parentDiv.innerHTML="hey"
let todoDiv=document.createElement("div")
parentDiv.appendChild(todoDiv)
todoDiv.innerHTML="how are you"
let formDiv=document.createElement("div")
todoDiv.appendChild(formDiv)
formDiv.innerHTML="what are you doing"
 let addButton=document.createElement("Button")
 root. appendChild(addButton)
   addButton.innerHTML="click me"
   addButton.classList.add("Button")
