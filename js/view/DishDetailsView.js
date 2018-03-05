//Dish Details view


var DishDetailsView = function (container, model) {

  var dish = model.currentDish;
  this.dinEdit = container.find('#dinEdit');
  this.addConfirm = container.find('#addConfirm');

  model.addObserver(this);
  this.Update = function(what){


{ this.container = container;
  this.dishDetails = function(){
    var dishid = dish.id;
    if(dish=== undefined || dish === null){
    return;
  }
      //this.DishDetailsView.hide();
      var showingdish = container.find('#dinnerdetailsOverview')
      model.getDish(dish.id, function(data){
      var thedish = data.response;

      var prep = document.createElement("div");
      var Details = '<div class="row"><div class="col-md-6"><div class="card">';
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

        prep.innerHtml = Details;
        showingdish.append(prep);
      //  this.dishDetailsFrame.empty().append(Details);
      //  this.dishDetailsFrame.show();
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
}
}
}
