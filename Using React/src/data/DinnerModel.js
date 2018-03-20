const httpOptions = {
  headers: {'X-Mashape-Key': 'Qu9grxVNWpmshA4Kl9pTwyiJxVGUp1lKzrZjsnghQMkFkfA4LB'}
};

const DinnerModel = function () {

  let numberOfGuests = 4;
  let observers = [];

  this.setNumberOfGuests = function (num) {
    numberOfGuests = num;
    notifyObservers();
  };

  this.getNumberOfGuests = function () {
    return numberOfGuests;
  };


/*
//Returns all the dishes on the menu.
    this.getFullMenu = function() {

        return menuDishes;

    }

    //Returns all ingredients for all the dishes on the menu.
    this.getAllIngredients = function() {

        for(var i=0;i<menuDishes.length;i++)
        { //Can you really do like that?
            for(var j=0;j<(menuDishes[i].ingredients).length;j++)
            {
                allIngredients.push((menuDishes[i]).ingredients[j]);
            }
        }
        return allIngredients;
    }

    //Adds the passed dish to the menu. If the dish of that type already exists on the menu
    //it is removed from the menu and the new one added.
    this.addDishToMenu = function(id) {
        var theDish = getDish(id);

        for(var i=0; i<menuDishes.length;i++)
        {
            if(menuDishes[i].type == theDish.type)
            {
                menuDishes.splice(menuDishes[i],1);
                menuDishes.push(theDish);
            }
            else
            {
                menuDishes.push(theDish);
            }
        }
      //Remember to implement the if-else structure with whats in the affected views
        notifyObservers("addDish");
    }

    //Removes dish from menu
    this.removeDishFromMenu = function(id) {

        //Is it to be assumed that this function will only be called when the dish is actually on the menu?

        var theDish2 = getDish(id);
        for(var i=0; i<menuDishes.length;i++)
        {
            menuDishes.splice(menuDishes[i],1);
        }

        notifyObservers("removeDish");
    }
 */



    // API Calls
  this.getAllDishes = function () {
    const url = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search'
    return fetch(url, httpOptions)
      .then(processResponse)
      .catch(handleError)
  }


  // API Helper methods
  const processResponse = function (response) {
    if (response.ok) {
      return response.json()
    }
    throw response;
  }

  const handleError = function (error) {
    if (error.json) {
      error.json().then(error => {
        console.error('getAllDishes() API Error:', error.message || error)
      })
    } else {
      console.error('getAllDishes() API Error:', error.message || error)
    }
  }

  // Observer pattern

  this.addObserver = function (observer) {
    observers.push(observer);
  };

  this.removeObserver = function (observer) {
    observers = observers.filter(o => o !== observer);
  };

  const notifyObservers = function () {
    observers.forEach(o => o.update());
  };
};

export const modelInstance = new DinnerModel();
