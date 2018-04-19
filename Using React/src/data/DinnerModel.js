const httpOptions = {
  headers: {'X-Mashape-Key': 'Qu9grxVNWpmshA4Kl9pTwyiJxVGUp1lKzrZjsnghQMkFkfA4LB'}
};

const DinnerModel = function () {

  let observers = [];
  let currentDish = "";
  let meny = [];
  /*localStorage.setItem('Menu', );
  localStorage.setItem('numberOfGuests', 0);
  localStorage.setItem('totprice', 0);*/
  let dishType = "";
  let dishFilter = "";
  let menutotprice = 0;


  this.setNumberOfGuests = function(num){
    localStorage.setItem("numberOfGuests", num);
    notifyObservers();
  };

  this.getNumberOfGuests = function(){
    let guests = parseInt(localStorage.getItem("numberOfGuests"))
    let noguests = 0;
    if(guests != (null || 0)){
      return guests;
    }
    else{
      return noguests;
    }
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
      //   if localstorage is empty, add item, else return empty 
      let ny = 0;
      if(JSON.parse(localStorage.getItem('Menu')).length != 0){
        return localStorage.getItem('Menu');
      }
      else{
        return ny;
      }
      // return JSON.parse(localStorage.getItem('Menu'));
     // return localStorage.getItem(JSON.parse('Menu'));
    }


    //Returns the total price of the entire menu
    this.getTotalMenuPrice = function(){
      var price = 0;
      let menuDishes = JSON.parse(localStorage.getItem('Menu'));
      
      if(menuDishes.length != 0){
          for(var i=0; i<menuDishes.length;i++)
          {
            price += menuDishes[i].pricePerServing;
          }
          price = (price * this.getNumberOfGuests());

          let tot = Math.floor(price);  
          return tot;
        }
        else{
          return 0;
        }
    }


    //Adds a dish to the menu
    this.addDish = function(){
      let menu = JSON.parse(localStorage.getItem('Menu'));
      let inmenu = menu.some(e => e.id === currentDish.id);
      if(!inmenu){
      menu.push(currentDish);
      let stuff = JSON.stringify(menu);
      localStorage.setItem('Menu', stuff);

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
