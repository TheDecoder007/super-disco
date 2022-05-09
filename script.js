//display todays current date
var now = moment();

var timeDisplay = document.getElementById('currentDay');
timeDisplay.innerHTML = now.format("dddd, MMMM, Do");

var tasks = [];

//save text to local storage

document.getElementById('submitBtn-0').addEventListener("click", function(event) {
    event.preventDefault();
  saveTasks(document.getElementById('textArea-0').value, 0)
});
document.getElementById('submitBtn-1').addEventListener("click", function(event) {
     event.preventDefault();
   saveTasks(document.getElementById('textArea-1').value, 1)
 });
 document.getElementById('submitBtn-2').addEventListener("click", function(event) {
     event.preventDefault();
   saveTasks(document.getElementById('textArea-2').value, 2)
 });
 document.getElementById('submitBtn-3').addEventListener("click", function(event) {
     event.preventDefault();
   saveTasks(document.getElementById('textArea-3').value, 3)
 });
 document.getElementById('submitBtn-4').addEventListener("click", function(event) {
     event.preventDefault();
   saveTasks(document.getElementById('textArea-4').value, 4)
 });
 document.getElementById('submitBtn-5').addEventListener("click", function(event) {
     event.preventDefault();
   saveTasks(document.getElementById('textArea-5').value, 5)
 });
 document.getElementById('submitBtn-6').addEventListener("click", function(event) {
     event.preventDefault();
   saveTasks(document.getElementById('textArea-6').value, 6)
 });
 document.getElementById('submitBtn-7').addEventListener("click", function(event) {
     event.preventDefault();
   saveTasks(document.getElementById('textArea-7').value, 7)
 });



var getText = JSON.parse(localStorage.getItem("textArea"));

var loadTasks = function() {
 tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  

for(var i = 0; i < tasks.length; i++) {
  document.getElementById('textArea-' + i).innerHTML = tasks[i]
}
};

var saveTasks = function(task, index) {
  tasks[index] = task;
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

loadTasks();

var textArea = document.getElementById("textArea");
var submitBtn = document.getElementById("submitBtn");


  //auditing(adding color for upcomimng/past due tasks)
var auditTask = function(taskEl) {
    //get date from task element
        var date = $(taskEl).find("currentDay").text().trim();
    
    //convert to moment object at 5:00pm
       var time = moment(date, "L").set("hour", 17)
    //remove any old classes from element
         $(taskEl).removeClass("description");
    //apply new class if task is new/over due date
        if (moment().isAfter(time)) {
          $(taskEl).addClass("description-danger");
        }
        else if (Math.abs(moment().diff(time, "days")) <= 2) {
          $(taskEl).addClass("description-warning");
        }
      };