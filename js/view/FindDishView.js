//Find Dish View

var FindDishView = function(container, model){
var Searching = document.getElementById('DishView');
//var data = ' <div class="col-md-12" id="finddishcol">      <span>Find a dish</span>      <span id="searchen"><input type="search" id="dishsearch" placeholder="Enter keywords..."></span>  <!---  </div>      <div  class="col-md-6" id="dishdropdown"> -->      <div class="dropdown" id="dropdown">       <button class="btn-default dropdown-toggle" type="button" data-toggle="dropdown">Dish type          <span class="caret"></span></button>          <ul class="dropdown-menu">            <li><a href="#">All types</a></li>            <li><a href="#">Main course</a></li>            <li><a href="#">Side dish</a></li>            <li><a href="#">Dessert</a></li>            <li><a href="#">Appetizer</a></li>          </ul>           </div><input type="button" id="searchdishes" onclick="GoToNextPageFunctionThatDoesNotExistYet()" value="Search">           </div>';

var data = '<span>Find a dish</span>';
data +=	'</div>';
data +=	'<div class="row" id="search_dishes">';
data +=	'<div class="col-md-2" id="findDishCol">';
data += '<span id="searchen"><input type="search" id="dishsearch" placeholder="Enter keywords..."></span>'
data +=	'</div>';
data += '<div class="col-md-2" id="dropdown">';
data += '<button class="btn-default dropdown-toggle" type="button" data-toggle="dropdown">Dish type';
data += '<span class="caret"></span></button>';
data += '<ul class="dropdown-menu">';
data += '<li><a href="#">All types</a></li>';
data += '<li><a href="#">Main course</a></li>';
data += '<li><a href="#">Side dish</a></li>';
data += '<li><a href="#">Dessert</a></li>';
data += '<li><a href="#">Appetizer</a></li>';
data += '</ul>';
data += '</div>';
data += '<div class="col-md-1" id="searchDiv">';
data +=	'<input type="button" id="searchdishes" onclick="GoToNextPageFunctionThatDoesNotExistYet()" value="Search">';
data +=	'</div>';
data +=	'</div>';
data += '</div>';
//var searching = $('<div class="row" id="finddish"> <div class="col-md-12" id="finddishcol">      <span>Find a dish</span>      <span id="searchen"><input type="search" id="dishsearch" placeholder="Enter keywords..."></span>  <!---  </div>      <div  class="col-md-6" id="dishdropdown"> -->      <div class="dropdown" id="dropdown">       <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">Dish type          <span class="caret"></span></button>          <ul class="dropdown-menu">            <li><a href="#">All types</a></li>            <li><a href="#">Main course</a></li>            <li><a href="#">Side dish</a></li>            <li><a href="#">Dessert</a></li>            <li><a href="#">Appetizer</a></li>          </ul>           </div><input type="button" id="searchdishes" onclick="GoToNextPageFunctionThatDoesNotExistYet()" value="Search">           </div></div>');
var searching = document.createElement('div');
searching.innerHTML = data;
searching.class = "col-md-12";
searching.id = "finddishcol";
Searching.appendChild(searching);


  //Generating the shown dishes
  var ShowDishes = document.getElementById('DishView');
  var showing = $('<div class="row">      <div class="col-md-12" id="dishescol">    <div id="dishes">    </div>      </div>      </div>');
  var showing = document.createElement('div');
  data = '<div class="col-md-12" id="dishescol"><div id="dishes"></div>';
  showing.class="row";
  showing.innerHTML = data;
  ShowDishes.appendChild(showing);
  var wherethedishesare = document.getElementById("dishes");
  var allDishes = model.getDishes();

  //this.showAllDishes = function(allDishes){
  //	  alert('infun');
  for(var i=0; i<allDishes.length;i++){
var elem = document.createElement("div");
    var data = '<div class="col-md-3">';
      data += '<div class="card mb-3">';
      data += '<img class="card-img-top img-fit img-dish" src="./images/' + allDishes[i].image + '" alt="' + allDishes[i].name + '">';
      data += '<div class="card-body p-3">';
      data += '<h5 class="card-title mb-0">';
      data += '<button id="dish-' + allDishes[i].id + '" class="btn btn-primary text-truncate view-dish-info" style="max-width:100%;">';
      data += allDishes[i].name + '</button></h5>';
      data += '</div></div></div>';

  elem.id="food"+i;
  elem.innerHTML=data;

  wherethedishesare.appendChild(elem);
    }

}
