const httpOptions = {
  headers: {'X-Mashape-Key': 'Qu9grxVNWpmshA4Kl9pTwyiJxVGUp1lKzrZjsnghQMkFkfA4LB'}
};

const DinnerModel = function () {

  //let numberOfGuests = 0;
  //window.localStorage.setItem("numberOfGuests", 0);
  let observers = [];
  let currentDish = "";
  let meny = [];
  localStorage.setItem('Menu', JSON.stringify(meny));
  localStorage.setItem('numberOfGuests', 0);
  localStorage.setItem('totprice', 0);
  let dishType = "";
  let dishFilter = "";
  let menutotprice = 0;


  this.setNumberOfGuests = function(num){
    localStorage.setItem("numberOfGuests", num);
    notifyObservers();
  };

  this.getNumberOfGuests = function(){
    let guests = parseInt(localStorage.getItem("numberOfGuests"));

    return guests;
  };

  this.setDishType = function(type){
    dishType = type;
    this.getAllDishes();
    notifyObservers();
  }
  this.getDishType = function(){
    return dishType;
  }

  this.setDishFilter = function(filter){
    dishFilter = filter;
    this.getAllDishes();
    notifyObservers();
  }
  this.getDishFilter = function(){
    return dishFilter;
  }
  
  this.setCurrentDish = function(dish){
      currentDish = dish;
  };
  
  this.getCurrentDish = function(){
    return currentDish;
  };

    //Returns the full menu
    this.getMenu = function(){
      //let menuDishes = JSON.parse(localStorage.getItem('Menu'));
      return JSON.parse(localStorage.getItem('Menu'));
     // return localStorage.getItem(JSON.parse('Menu'));
    }


    //Returns the total price of the entire menu
    this.getTotalMenuPrice = function(){
      var price = 0;
      let menuDishes = JSON.parse(localStorage.getItem('Menu'));
      
          for(var i=0; i<menuDishes.length;i++)
          {
            price += menuDishes[i].pricePerServing;
          }
          price = (price * this.getNumberOfGuests());

          let tot = Math.floor(price);  
          return tot;
          //localStorage.setItem('totprice', JSON.stringify(tot));
    }

  /*  this.getTotalMenuPrice = function(){
      return parseInt(localStorage.getItem('totprice'));
    }*/

    //Adds a dish to the menu
    this.addDish = function(){
      let menu = JSON.parse(localStorage.getItem('Menu'));
      let inmenu = menu.some(e => e.id === currentDish.id);
     // if(menuDishes.includes(dish)){
      //  return;}
      if(!inmenu){
      menu.push(currentDish);
      let stuff = JSON.stringify(menu);
      localStorage.setItem('Menu', stuff);
      //console.log(menuDishes[0]);
      notifyObservers();
      }
    }

    //Removes a dish from the menu
    this.removeDishFromMenu = function(dish) {
      console.log(dish);
      let menuDishes = JSON.parse(localStorage.getItem('Menu'));
          for(var i=0; i<menuDishes.length;i++){
            if(menuDishes[i].id === dish.id){
               menuDishes.splice(i,1);
          }
          localStorage.setItem('Menu', JSON.stringify(menuDishes));
          }     
          notifyObservers();
        }

    // API Calls
  
    this.getAllDishes = function(){
    let url = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?'
      dishFilter = this.getDishFilter();
      dishType = this.getDishType();
     
    url += 'type='+ dishType + '&'
  
      if(dishFilter !== (""||undefined)) {
      dishFilter = dishFilter.replace(" ", "+");
      url += 'query='+ dishFilter
    }
    url += '&number=12';

    return (fetch(url, httpOptions)
      .then(processResponse)
      .catch(handleError))
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
