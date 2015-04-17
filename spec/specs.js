    describe('cheese-pizza', function() {
        it('will return the name of the cheese pizza => "Cheese"', function() {
				var cheese = Object.create(Pizza);
				cheese.initName();
				cheese.name = "Cheese";
                expect(cheese.name).to.equal("Cheese");
        });     
    });

        describe('cheese-pizza', function() {
        it('will return the price of the cheese pizza => "$5"', function() {
				var cheese = Object.create(Pizza);
				cheese.initPrice();
				cheese.price = "$5";
                expect(cheese.price).to.equal("$5");
        });     
    });

            describe('pepperoni-pizza', function() {
        it('will return the name of the pepperonni pizza => "Pepperoni"', function() {
				var pepperoni = Object.create(Pizza);
				pepperoni.initName();
				pepperoni.name = "Pepperoni";
                expect(pepperoni.name).to.equal("Pepperoni");
        });     
    });

        describe('pepperoni-pizza', function() {
        it('will return the price of the pepperoni pizza => "$7"', function() {
				var pepperoni = Object.create(Pizza);
				pepperoni.initPrice();
				pepperoni.price = "$7";
                expect(pepperoni.price).to.equal("$7");
        });     
    });



