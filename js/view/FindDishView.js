//Find Dish View

var FindDishView = function(container, model){
  // Variables
  var view = this;
  this.dinconfirm = container.find('#dinconfirm');
  /*this.allType = container.find('#allType');
  this.mainType = container.find('#mainType');
  this.sideType = container.find('#sideType');
  this.dessertType = container.find('#dessertType');
  this.appetizerType = container.find('#appetizerType'); */
  this.search = container.find('#search');
  this.searchdishes = container.find('#searchdishes');
  this.searchForm = container.find('#searchForm');
  this.dropdown = container.find('.dropdown');
  this.container = container;

  //Observer pattern
  model.addObserver(this);
  this.Update = function(){


    var type = view.dropdown.val();
    var filter = view.searchForm.val().toLowerCase();
    //function to call images
      var Update2 = function(){
        typeview();
      }

      var typeview = function() {
        var dishes = container.find('#dishes');
        var dishType = container.find('#dishType');
        var Searching = container.find('#selectDishView');
        dishes.html(getDishesHTML());
        dishType.html(capitalizeFirstLetter(model.getDishType()));
      }


      //Generating the shown dishes

      var ShowDishes = container.find('#selectDishView');
      var showing = $('<div class="row">      <div class="col-md-12" id="dishescol">    <div id="dishes">    </div>      </div>      </div>');
      var showing = document.createElement('div');
      data = '<div class="col-md-12" id="dishescol"><div id="dishes"></div>';
      showing.class="row";

      showing.innerHTML = data;
      ShowDishes.append(showing);
      var wherethedishesare = container.find("#dishes");
       model.getAllDishes(type, filter, function (data) {
        var allDishes = data.results;
          wherethedishesare.empty();
        for(var i=0; i<allDishes.length;i++){
          var elem = document.createElement("div");
          var data = '<div class="col-md-3" id="aDish">';
            data += '<div class="card mb-3">';
            data += '<img class="card-img-top img-fit img-dish" src="https://spoonacular.com/recipeImages/' + allDishes[i].image + '" alt="' + allDishes[i].title + '">';
            data += '<div class="card-body p-3">';
            data += '<h5 class="card-title mb-0">';
            data += '<button id="dish-' + allDishes[i].id + '" class="btn btn-primary text-truncate view-dish-info" style="max-width:100%;">';
            data += allDishes[i].title + '</button></h5>';
            data += '</div></div></div>';


        elem.id="food"+i;
        elem.innerHTML=data;
        wherethedishesare.append(elem);
          }
      //  console.log(data);
      });
  }


}
