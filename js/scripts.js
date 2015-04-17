
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

    $("form").submit(function(event){
        event.preventDefault();

       

    });

});
