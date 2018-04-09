const httpOptions = {
  headers: {'X-Mashape-Key': 'Qu9grxVNWpmshA4Kl9pTwyiJxVGUp1lKzrZjsnghQMkFkfA4LB'}
};

const DinnerModel = function () {

  //let numberOfGuests = 0;
  window.localStorage.setItem("numberOfGuests", 0);
  let observers = [];
  let menuDishes = [];
  let menuPrices = [];
  let currentDish = "";

  let dishType = "";
  let dishFilter = "";
  let menutotprice = 0;


  //let DinnerStorage = window.localStorage;

  if(!localStorage.getItem('numberOfGuests')){
    localStorage.setItem('numberOfGuests', 0);
}

  this.setNumberOfGuests = function(num){
    //numberOfGuests = num;
    localStorage.setItem("numberOfGuests", num);
    notifyObservers();
  };

  this.getNumberOfGuests = function(){
    let guests = localStorage.getItem("numberOfGuests");
    return guests;
  };

  this.setDishType = function(type){
    dishType = type;
    console.log(dishType);
  }
  this.getDishType = function(){
    return dishType;
  }

  this.setDishFilter = function(filter){
    dishFilter = filter;
    console.log(dishFilter);
  }
  this.getDishFilter = function(){
    return dishType;
  }
  
  this.setCurrentDish = function(dish){
      currentDish = dish;
  };
  
  this.getCurrentDish = function(){
    return currentDish;
  };

    //Returns the full menu
    this.getMenu = function(){
      return menuDishes;
    }
    //Returns the prices of the dishes on the menu
    this.getAllPrice = function(){
        return menuPrices;
    }

    //Returns the total price of the entire menu
    this.getTotalMenuPrice = function(){
      var price = 0;
      
          for(var i=0; i<menuDishes.length;i++)
          {
            price += menuDishes[i].pricePerServing;
          }
          price = (price * this.getNumberOfGuests());
          return Math.floor(price);  
      
      /*var price=0;
        for (var i = 0; i < menuPrices.length; i++) {
            menutotprice = price + menuPrices[i];
        }

        if(price === (0||undefined)){
          return 0;
        }
        else{
        return price;
    }*/
    }

    //Adds a dish to the menu
    this.addDish = function(){
      let inmenu = menuDishes.some(e => e.id === currentDish.id);
     // if(menuDishes.includes(dish)){
      //  return;}
      if(!inmenu){
      menuDishes.push(currentDish);
      console.log(menuDishes[0]);
      notifyObservers();
      }
    }

    //Removes a dish from the menu
    this.removeDishFromMenu = function(dish) {
      
          for(var i=0; i<menuDishes.length;i++)
          {if(menuDishes[i] == dish){
            menuDishes.splice(menuDishes[i],1);
          }
          }     
          notifyObservers();
        }

    // API Calls
  
    this.getAllDishes = function(){
    //let url = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?type='+type+'&query='+filter.toLowerCase()+'&number=12'
    let url = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?'

    if(dishType !== "") {
      dishType = dishType.replace(" ", "+");
      url += 'type='+ dishType + '&'
    }
  
      if(dishFilter !== (""||undefined)) {
      dishFilter = dishFilter.replace(" ", "+");
      url += 'query='+ dishFilter
    }
    url += '&number=12';

    return fetch(url, httpOptions)
      .then(processResponse)
      .catch(handleError)
  }

 /* this.getAllDishes = function () {
    let url = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search'

    if(dishType !== ""){
      dishType = dishType.replace(" ", "+");
      url += 'type='+ dishType + '&'
    }

    if(dishFilter !== (""||undefined)){
      dishFilter = dishFilter.replace(" ", "+");
      url += 'query='+ dishFilter
    }

    return fetch(url, httpOptions)
      .then(processResponse)
      .catch(handleError)
  }*/

  this.getDish = function (id){
    const url = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/'+id+'/information'
    return fetch(url, httpOptions)
      .then(processResponse)
      .catch(handleError)
  }

   /* this.getDish = function (id){
        const url = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/informationBulk?ids='+id+'&includeNutrition=false'
        return fetch(url, httpOptions)
            .then(processResponse)
            .catch(handleError)
   }*/

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
