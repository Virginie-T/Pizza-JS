
$(document).ready(function() {


var Pizza = {
    price: "7$",
    initName: function() {
        this.name = "";
    }
  }

    $("form#pizza").submit(function(event) {
        event.preventDefault();

        var pizza_name = $("select.pizza").val();

        var newPizza = Object.create(Pizza);
        newPizza.initName();
        newPizza.name = pizza_name;

        $('#result').show();

        $(".pizza_name").text(newPizza.name);

        $(".pizza_price").text(newPizza.price);

    });

});
