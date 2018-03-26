//Find Dish View

var FindDishView = function(container, model, app){
  // Variables
  var view = this;
  this.dinconfirm = container.find('#dinconfirm');
  this.search = container.find('#search');
  this.dishbutton = container.find('.dishbutton');
  this.searchdishes = container.find('#searchdishes');
  this.searchForm = container.find('#searchForm');
  this.dropdown = container.find('.dropdown');
  this.container = container;

  //Observer pattern
  model.addObserver(this);
  this.Update = function(){


    var type = view.dropdown.val();
    var filter = view.searchForm.val().toLowerCase();
    //function to show images
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

      var loader = $("<div>"); //this is not a global selector in this case, is it?
      loader.attr('class', 'loader');


      //Generating the shown dishes
      var ShowDishes = container.find('#selectDishView');
      ShowDishes.append(loader);
      var showing = $('<div class="row"><div class="col-md-12" id="dishescol">    <div id="dishes">    </div>      </div>      </div>');
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
            data += '<img id="theimage" class="card-img-top img-fit img-dish>';
            data += '<div class="card-body p-3">';
            data += '<h5 class="card-title mb-0">';
            data += '<button class="dishbutton btn btn-primary text-truncate view-dish-info" style="max-width:100%;">';
            data += '</button></h5>';
            data += '</div></div></div>';


        elem.id="food"+i;
        elem.innerHTML=data;
        wherethedishesare.append(elem);
        var oneDishView = new OneDishView($(elem), model, allDishes[i]);
        new OneDishController(oneDishView, model, allDishes[i], app);
          }

        container.find('.loader').hide();
      //  console.log(data);
      });
  }


}
