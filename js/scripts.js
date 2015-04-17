
var Pizza = {
    initName: function() {
        this.name = "";
    },
    initPrice: function() {
        this.price = "";
    }
}

var cheese = Object.create(Pizza);
cheese.initName();
cheese.name = "Cheese";
cheese.initPrice();
cheese.price = "$5";

var pepperoni = Object.create(Pizza);
pepperoni.initName();
pepperoni.name = "Pepperoni";
pepperoni.initPrice();
pepperoni.price = "$7";


$(document).ready(function() {

    $("h4.cheese").text(cheese.name);
    $("h4.pepperoni").text(pepperoni.name);


   $('h4').click(function() {
        event.preventDefault();
        $('#result').show();

        $(".pizza_name").text(this.name);

        $(".pizza_price").text(pepperoni.price);

    });

});



   // $('.list').last().click(function() {
   //          //after the click, show the task page
   //          $('#task_page').show();

   //          //deletes what the user entered previously
   //          $("ul.tasks").text("");

   //          //the list of name selected shows on the task page in size h4
   //          $('#task_page h4').text(newTitle.name);

   //          //goes through the tasks from newTitle and list the description
   //          newTitle.tasks.forEach(function(task) {
   //              $('ul.tasks').append('<li>' + task.description + '</li>');

   //          });

   //          //off method prevents it from submitting several times , as we are still in the submit function above
   //          $("form#task").off('submit');
   //          //new form for task
   //          $("form#task").submit(function(event) {
   //              event.preventDefault();
   //              //user enters a task and saves it as newTask variable
   //              var inputtedTask = $("input#description").val();
   //              var newTask = {description : inputtedTask };
   //              //pushes newTask to the tasks array in newTitle
   //              newTitle.tasks.push(newTask);

   //              //deletes what the user entered previously
   //              $("ul.tasks").text("");
   //              //goes through the tasks from newTitle and list the description
   //              newTitle.tasks.forEach(function(task) {
   //                  $('ul.tasks').append('<li>' + task.description + '</li>');
   //              });
   //              //deletes what the user entered previously
   //              $("input#description").val('');
   //          });

