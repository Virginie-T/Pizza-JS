
$(document).ready(function() {

var Pizza = {
    price: 7,
    initName: function() {
        this.name = "";
    },
    final_price: function(size) {
      if (size === "small") {
          this.price += 0;
      } if (size === "medium") {
        this.price += 3;
      } if (size === "large") {
        this.price += 6;
      }
      return this.price + "$";
    }

  }

    $("form#pizza").submit(function(event) {
        event.preventDefault();

        var pizza_name = $("select.pizza").val();
        var pizza_size = $("select.size").val();

        var newPizza = Object.create(Pizza);
        newPizza.initName();
        newPizza.name = pizza_name;
        newPizza.final_price(pizza_size);

        $('#result').show();

        $(".pizza_name").text(newPizza.name);

        $(".pizza_price").text(newPizza.price);

    });

});
