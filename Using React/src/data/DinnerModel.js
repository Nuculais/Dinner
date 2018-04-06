const httpOptions = {
  headers: {'X-Mashape-Key': 'Qu9grxVNWpmshA4Kl9pTwyiJxVGUp1lKzrZjsnghQMkFkfA4LB'}
};

const DinnerModel = function () {

  let numberOfGuests = 0;
  let observers = [];
  let menuDishes = [];
  let menuPrices = [];

  let dishType = "";
  let dishFilter = "";
  let menutotprice = 0;

  this.setNumberOfGuests = function (num) {
    numberOfGuests = num;
    notifyObservers();
  };

  this.getNumberOfGuests = function () {
    return numberOfGuests;
  };



    //Returns the full menu
    this.getMenu = function(){
      return menuDishes;
    }

    this.getAllPrice = function(){
        return menuPrices;
    }

    this.getTotalMenuPrice = function(){
        var price=0;
        for (var i = 0; i < menuPrices.length; i++) {
            menutotprice = price + menuPrices[i];
        }
        return price;
    }

    //Adds a dish to the menu
    this.addDish = function(dish){
      if(menuDishes.includes(dish)){
        return;
      }
      menuDishes.push(dish);
      notifyObservers("addDish");
    }

    // API Calls
  this.getAllDishes = function () {
    const url = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search'
    return fetch(url, httpOptions)
      .then(processResponse)
      .catch(handleError)
  }

    this.getDish = function (id){
        const url = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/informationBulk?ids='+id+'&includeNutrition=false'
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
