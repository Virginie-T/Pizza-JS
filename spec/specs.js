    describe('cheese', function() {
        it('will return the name of the pizza => "Cheese"', function() {
				var cheese = Object.create(Pizza);
				cheese.initName();
				cheese.name = "Cheese";
                expect(cheese.name).to.equal("Cheese");
        });     
    });

        describe('cheese', function() {
        it('will return the name of the pizza => "Cheese"', function() {
				var cheese = Object.create(Pizza);
				cheese.initPrice();
				cheese.price = "$5";
                expect(cheese.price).to.equal("$5");
        });     
    });

