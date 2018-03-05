//OneDish view, generated view for each of the dishes in the results.

var OneDishView = function(container, model, dish){

  var view = this;
  this.dish = dish;
  this.container = container;
  this.dishbutton = container.find('.dishbutton');

//  var aDish = container.find('#aDish');

  container.find('.dishbutton').html(dish.title);
  container.find('#theimage').attr("src", 'https://spoonacular.com/recipeImages/' + dish.image);

 /*var data = '<div class="card mb-3">';
    data += '<img id="theimage" class="card-img-top img-fit img-dish" src="https://spoonacular.com/recipeImages/' + dish.image + '" alt="' + dish.title + '">';
    data += '<div class="card-body p-3">';
    data += '<h5 class="card-title mb-0">';
    data += '<button class="dishbutton" id="dish-' + dish.id + '" class="btn btn-primary text-truncate view-dish-info" style="max-width:100%;">';
    data += dish.title + '</button></h5>';
    data += '</div></div></div>'; */

}
