You have to setup the indentation stuff, you indentation are not good.
 
 - Images should be in a images folder.


why not?
 - window.addEventListener("load", loadTasksFromLocalStorage);

this will only work on the last if 

else {
createHtmlItem(taskObject);
saveTaskToLocalStorage(taskObject);
}

its a problem.


this suppose to be 3 diffrent funcitons
its to long and does lots of stuff.
function createHtmlItem (taskObject){


why not just 
if (confirm("Are you sure?") == true) {
its the same.
if (confirm("Are you sure?")) {

Whats this function does? its taking the taks and resaving it? why?
saveTaskToLocalStorage

where is the done?
