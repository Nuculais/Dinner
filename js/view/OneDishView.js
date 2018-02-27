//OneDish view, generated view for each of the dishes in the results.

var OneDishView = function(container, model, dish){

  var view = this;

  this.aDish = container.find('#aDish');
  this.container = container;
  this.dish = dish;



  var data = '<div class="card mb-3">';
    data += '<img class="card-img-top img-fit img-dish" src="https://spoonacular.com/recipeImages/' + dish.image + '" alt="' + dish.title + '">';
    data += '<div class="card-body p-3">';
    data += '<h5 class="card-title mb-0">';
    data += '<button id="dish-' + dish.id + '" class="btn btn-primary text-truncate view-dish-info" style="max-width:100%;">';
    data += dish.title + '</button></h5>';
    data += '</div></div></div>';

}
