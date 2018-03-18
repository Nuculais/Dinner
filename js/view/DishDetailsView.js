//Dish Details view

var DishDetailsView = function (container, model) {

  //this.dish = model.getCurrentDish();
  this.dinEdit = container.find('#dinEdit');
  this.addConfirm = container.find('#addConfirm');
  this.theContainer = container.find('#dinnerdetailsOverview')
  model.addObserver(this);




//{
  //this.container = container;
  /*var _this = this;

  var theDivs = '<div class = "dishname-header"><h3 id="Maten"></h3></div>';

  this.theContainer.append(theDivs);
  this.woop = container.find('#Maten')*/

    console.log("fff");

  this.Update = function(what){

    console.log("ggg");
      console.log(model.getCurrentDish);




  //this.dishDetails = function(){
    //var dishid = dish.id;
    //if(dish=== undefined || dish === null){
    //return;
  //}
      //this.DishDetailsView.hide();
      var showingdish = container.find('#dinnerdetailsOverview')
      //model.getDish(dish.id, function(data){
       model.getDish(dish.id, function(dish){
      //var thedish = data.response;



      var prep = document.createElement("div");
      var Details = '<div class="row"><div class="col-md-6"><div class="card">';
        Details += '<img class="card-img-top" src="images/' + dish.image + '" alt="Card image cap"/>';
        Details += '<div class="card-body"><h5 class="card-title">' + dish.title + '</h5>';
        Details += '<p class="card-text">Recipe by: '+ dish.creditText + '</p>';
        Details += '<button class="btn btn-primary" id="dinEdit" value="Back to search</button">';
        Details += '</div></div></div><div class="col-md-6"><div class="card"><ul class="list-group list-group-flush">';

        //dish.instructions goes in another div
        dish.extendedIngredients.forEach(function(ingredient){
          Details += '<li class="list-group-item"><div class="row"><div class="col-6">'
          Details += 'ingredient.originalString</div>';
          Details += '<div class="col-6 text-right"><span class="badge badge-primary">' + ingredient.price
          Details += 'kr</span></div></div></li>';
        });
        Details += '<li class="list-group-item"><div class="row"><div class="col-6">';
        Details +='<button class="btn btn-sm btn-primary" onclick="$(this).addItemWithIdToMenu(' + dish.id + ');">Add to menu</button>';
        Details +='</div><div class="col-6 text-right">Total ';
        Details += '<span class="badge badge-primary" id="dishprice">' + model.getTotalDishPrice(dish.id) + ' kr</span></div></li>';
        Details += '</ul></div></div></div>';

        //The ingredient prices aren't in the API, but I found the whole dish price. could we just use that instead?
       prep.innerHtml = Details;
       this.showingdish.append(Details);
        //this.dishDetailsFrame.empty().append(Details);
        //this.dishDetailsFrame.show();
           console.log(dish.id);
      });






  /*var Details = '<div class="row"><div class="col-md-6"><div class="card">';
    Details += '<img class="card-img-top" src="images/' + dish.image + '" alt="Card image cap"/>';
    Details += '<div class="card-body"><h5 class="card-title">' + dish.name + '</h5>';
    Details += '<p class="card-text">' + dish.description + '</p>';
    Details += '<button class="btn btn-primary" onclick="$(this).backToMenu();">Back to search</button>';
    Details += '</div></div></div><div class="col-md-6"><div class="card"><ul class="list-group list-group-flush">';

    dish.ingredients.forEach(function(ingredient){
      Details += '<li class="list-group-item"><div class="row"><div class="col-6">'
      Details += ingredient.quantity + ' ' + ingredient.unit + ' ' + ingredient.name + '</div>';
      Details += '<div class="col-6 text-right"><span class="badge badge-primary">' + ingredient.price
      Details += 'kr</span></div></div></li>';
    });
    Details += '<li class="list-group-item"><div class="row"><div class="col-6">';
    Details +='<button class="btn btn-sm btn-primary" onclick="$(this).addItemWithIdToMenu(' + dish.id + ');">Add to menu</button>';
    Details +='</div><div class="col-6 text-right">Total ';
    Details += '<span class="badge badge-primary" id="dishprice">' + model.getTotalDishPrice(dish.id) + ' kr</span></div></li>';
    Details += '</ul></div></div></div>';

    this.dishDetailsFrame.empty().append(Details);
    this.dishDetailsFrame.show(); */
}
    /*$.fn.backToMenu = function() {
    //  $('#dish-index-holder').show();
      container.find("#dinnerdetailsView").empty().hide();
    }

    $.fn.addItemWithIdToMenu = function(id) {
      model.addDishToMenu(id);
    }
  } */
//}
//}
}
