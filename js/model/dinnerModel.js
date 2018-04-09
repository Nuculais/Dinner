//DinnerModel Object constructor

var DinnerModel = function () {
    //Observer pattern
    var observers = [];
    var guestNum = 1;
    var menuDishes = [];
    var allIngredients = [];

    var currentDish;


    this.setCurrentDish = function (dish) {
        currentDish = dish;

        notifyObservers("Details");
    }

    this.getCurrentDish = function () {
        return currentDish;
    }

    //TODO Lab 1 implement the data structure that will hold number of guest
    // and selected dishes for the dinner menu

    var notifyObservers = function (obj) {
        //obj = state of the model
        for (var i = 0; i < observers.length; i++) {
            observers[i].Update(obj);
        }
    }
    this.addObserver = function (observer) {
        observers.push(observer);
    }

    this.setNumberOfGuests = function (val) {

        guestNum = val;


        notifyObservers("guestsnum");
        //TODO Lab 1
    }

    this.getNumberOfGuests = function () {

        return guestNum;
        //TODO Lab 1
    }

    //Returns the dish that is on the menu for selected type
    this.getSelectedDish = function (type) {

        var selDish;
        for (var i = 0; i < menuDishes.length; i++) {
            if (menuDishes[i].type == type) {
                selDish = menusDishes[i];
            }
        }
        return selDish;

        //TODO Lab 1
    }

    //Returns all the dishes on the menu.
    this.getFullMenu = function () {

        return menuDishes;

    }

    //Returns all ingredients for all the dishes on the menu.
    this.getAllIngredients = function () {

        for (var i = 0; i < menuDishes.length; i++) { //Can you really do like that?
            for (var j = 0; j < (menuDishes[i].ingredients).length; j++) {
                allIngredients.push((menuDishes[i]).ingredients[j]);
            }
        }
        return allIngredients;

    }

    //Returns the total price of the menu (all the ingredients multiplied by number of guests).
    this.getTotalMenuPrice = function () {
        var price = 0;

        for (var i = 0; i < menuDishes.length; i++) {
            price += menuDishes[i].pricePerServing;
        }
        price = (price * this.getNumberOfGuests());
        return price;
    }


    //Adds the passed dish to the menu. If the dish of that type already exists on the menu
    //it is removed from the menu and the new one added.
    this.addDishToMenu = function () {
        var theDish = this.getCurrentDish();
        var menu = this.getFullMenu();

        for (var i = 0; i < menuDishes.length; ++i) {
            if (menuDishes[i].id === theDish.id) {
                alert("This dish is already on the menu.");
                return;
            }
        }
        menuDishes.push(theDish);
        notifyObservers("addDish");
        console.log(menuDishes);
    }

//Removes dish from menu
    this.removeDishFromMenu = function (dish) {
        console.log(dish.id);
        //Is it to be assumed that this function will only be called when the dish is actually on the menu?
        var theDish2 = getCurrentDish();
        for (var i = 0; i < menuDishes.length; i++) {
            if (menuDishes[i].id == dish.id) {
                console.log(menuDishes[i].id);
                menuDishes.splice(i, 1);
            }
        }

        notifyObservers("removeDish");
        //TODO Lab 1
    }

//function that returns all dishes of specific type (i.e. "starter", "main dish" or "dessert")
//you can use the filter argument to filter out the dish by name or ingredient (use for search)
//if you don't pass any filter all the dishes will be returned
    this.getAllDishes = function (type, filter, callback, errorCallback) {
        $.ajax({
            url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?type=' + type + '&query=' + filter.toLowerCase() + '&number=12', //returns only 12 for now, just to test
            headers: {
                'X-Mashape-Key': 'Qu9grxVNWpmshA4Kl9pTwyiJxVGUp1lKzrZjsnghQMkFkfA4LB'
            },
            error: function (error) {
                errorCallback(error)
                alert("Could not find any recipes matching your search. Please try again.");
            },
            success: function (response) {
                callback(response)
            }

        })

    }

//function that returns a dish of specific ID
    this.getDish = function (id, callback, errorCallback) {
        $.ajax({
            url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/informationBulk?ids=' + id + '&includeNutrition=false',
            headers: {
                'X-Mashape-Key': 'Qu9grxVNWpmshA4Kl9pTwyiJxVGUp1lKzrZjsnghQMkFkfA4LB'
            },
            success: function (response) {
                currentDish = response[0];
                callback(response)
            },

            error: function (error) {
                if (errorCallback != null) {
                    errorCallback(error)
                }
                else {
                    alert("Could not find this recipe or load its details. Please try again.");
                }
            }


        })

        for (key in dishes) {
            if (dishes[key].id == id) {
                return dishes[key];
            }
        }
    }
}
