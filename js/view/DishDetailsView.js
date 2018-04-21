//Dish Details view

var DishDetailsView = function (container, model, app) {

    //this.dish = model.getCurrentDish();
    this.dinEdit = container.find('#dinEdit');
    this.addConfirm = container.find('#addConfirm');
    this.dishRemove = container.find('#removeDish');
    this.theContainer = container.find('#dinnerdetailsOverview');
    model.addObserver(this);
    this.dishDetails = null;
    var showingdish = container.find('#dinnerdetailsOverview');
    var showingingredients = container.find('#dinnerdetailsIngredients');
    var showinginstructions = container.find('#prepwrap');

    this.Update = function (what) {

        var dish = model.getCurrentDish();

        if (what == "Details") {
            model.getDish(dish.id, function (data) {
                var dishIng = data[0];
                this.dishDetails = data[0];
                theprice = dishIng.pricePerServing;

                var prep = document.createElement("div");
                var Details = '<div class="row" id="dishinfo"><div class="col-md-7"><div class="card">';
                Details += '<div class="card-body"><h2 class="card-title">' + dish.title + '</h2>';
                Details += '<p class="card-text">Recipe by: ' + dishIng.creditText + '</p>';
                Details += '<img class="card-img-top" src="https://spoonacular.com/recipeImages/' + dish.image + '" alt="Card image cap"/>';
                Details += '<button class="btn btn-warning" id="dinEdit">Back to search</button>';
                //Details += '</div></div></div><div class="col-md-6"><div class="card"><ul class="list-group list-group-flush">';

                var prep2 = document.createElement("div");
                var ingredi = '</div></div></div><div class="col-md-8"><div class="card"><ul class="list-group list-group-flush">';
                dishIng.extendedIngredients.forEach(function (ingredient) {
                    ingredi += '<li class="list-group-item"><div class="row"><div class="col-8">'
                    ingredi += ingredient.amount * model.getNumberOfGuests() + ' ' + ingredient.unit + ' - ' + ingredient.name + '</div>';
                    ingredi += '<div class="col-6 text-right"><span class="badge badge-primary">'
                    ingredi += "1" + ' kr</span></div></div></li>';
                });
                ingredi += '<li class="list-group-item"><div class="row"><div class="col-12">';
                ingredi += '<button class="btn btn-sm btn-warning" id="addConfirm">Add to menu</button>';
                ingredi += '<button class="btn btn-sm btn-warning" id="removeDish">Remove Dish</button>';
                ingredi += '</div><div class="col-6 text-right">Total ';
                ingredi += '<span class="badge badge-primary" id="dishprice">' + dishIng.pricePerServing + ' kr</span></div></li>';
                ingredi += '</ul></div></div></div>';


                var prep3 = document.createElement("div");
                var instruct = '<div id="allprep"><p>' + dishIng.instructions + '</p></div>';


                prep.innerHTML = Details;
                showingdish.empty();
                showingdish.append(prep);


                prep2.innerHTML = ingredi;
                showingingredients.empty();
                showingingredients.append(prep2);

                prep3.innerHTML = instruct;
                showinginstructions.empty();
                showinginstructions.append(prep3);

            });

        }
        else if (what == "guestsnum") {
            console.log(model.getNumberOfGuests());
            var prep2 = document.createElement("div");
            var ingredi = '</div></div></div><div class="col-md-8"><div class="card"><ul class="list-group list-group-flush">';
            dishDetails.extendedIngredients.forEach(function (ingredient) {
                ingredi += '<li class="list-group-item"><div class="row"><div class="col-8">'
                ingredi += ingredient.amount * model.getNumberOfGuests() + ' ' + ingredient.unit + ' - ' + ingredient.name + '</div>';
                ingredi += '<div class="col-6 text-right"><span class="badge badge-primary">'
                ingredi += "1" + ' kr</span></div></div></li>';
            });
            ingredi += '<li class="list-group-item"><div class="row"><div class="col-12">';
            ingredi += '<button class="btn btn-sm btn-warning" id="addConfirm">Add to menu</button>';
            ingredi += '<button class="btn btn-sm btn-warning" id="removeDish">Remove Dish</button>';
            ingredi += '</div><div class="col-6 text-right">Total ';
            ingredi += '<span class="badge badge-primary" id="dishprice">' + dishDetails.pricePerServing + ' kr</span></div></li>';
            ingredi += '</ul></div></div></div>';

            prep2.innerHTML = ingredi;
            showingingredients.empty();
            showingingredients.append(prep2);
        }
    }
}
