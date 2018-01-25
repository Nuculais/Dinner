//Find Dish View

var FindDishView = function(container, model){

var Searching = container.find(#DishView);

var searching = $('<div class="row" id="finddish">
<div class="col-md-12" id="finddishcol">
      <span>Find a dish</span>
      <span id="searchen"><input type="search" id="dishsearch" placeholder="Enter keywords..."></span>
  <!---  </div>
      <div  class="col-md-6" id="dishdropdown"> -->
      <div class="dropdown" id="dropdown">
       <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">Dish type
          <span class="caret"></span></button>
          <ul class="dropdown-menu">
            <li><a href="#">All types</a></li>
            <li><a href="#">Main course</a></li>
            <li><a href="#">Side dish</a></li>
            <li><a href="#">Dessert</a></li>
            <li><a href="#">Appetizer</a></li>
          </ul>
           </div><input type="button" id="searchdishes" onclick="GoToNextPageFunctionThatDoesNotExistYet()" value="Search">
           </div></div>');

Searching.appendChild(searching);



  //Generating the shown dishes
  var ShowDishes = container.find(#DishView);
  var showing = $('<div class="row">
      <div class="col-md-12" id="dishescol">
    <div id="dishes">
    </div>
      </div>
      </div>');
      
      ShowDishes.appendChild(showing);

  var wherethedishesare = container.find("#dishes");

  this.showAllDishes = function(allDishes){
  for(var i=0; i<allDishes.length;i++){

  var food = $('<div id="food'+i '"><span id="dishname">'+allDishes[i].name+'</span></div>');
  wherethedishesare.appendChild(food);
    }
  }
}
