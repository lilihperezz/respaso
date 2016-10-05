window.addEventListener("load",main);
// funcion que se ejecuta cuando termine de cargar
function main(){
//  var addTaskButton = document.getElementsByClassName("add-task")[0];
	var addTaskButton = document.getElementById("add-task");
//  var addTaskButton = document.querySelector(".add-tasks a");
	addTaskButton.addEventListener("click",onClickAddTask);
}
function onClickAddTask(e){
	e.preventDefault();
  //alert("funciona");
 // obtener el valor del textarea
    var textarea = document.querySelector(".add-tasks textarea");
 // alerta del valor que captura
 // alert(textareaValue.value);
    // caputurar el task container
    var taskContainer = document.getElementById("tasks-container");
    //crear elemento con el texto del textarea
    var newTask = document.createElement("div");
    newTask.innerText = textarea.value;
    taskContainer.appendChild(newTask);
}
		
// REFACTORIZANDO CÓDIGO
window.addEventListener("load",main);
// funcion que se ejecuta cuando termine de cargar
function main(){
	var addTaskButton = document.getElementById("add-task");
	addTaskButton.addEventListener("click",onClickAddTask);
}
function onClickAddTask(e){
	e.preventDefault();
 	var textareaValue = getTextAreaValue();
 	if(){
 		
 	}
 	var newTask = createTask(textareaValue);


 function getTextAreaValue(){
	var textarea = document.querySelector(".add-tasks textarea");
	return textarea.value;
}
 function createTask(text){
	var newTask = document.createElement("div");
	newTask.innerText= text;
	return newTask;
}
 function addTaskToContainer(task){
	var newTask = document.createElement("div");
	newTask.innerText= text;
	return newTask;
}