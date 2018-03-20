
//Controllers
var SidebarDishController = function(view, model)
{
  view.plusGuest.click(function(){ //works
    model.setNumberOfGuests(model.getNumberOfGuests() + 1);
  });

  view.minusGuest.click(function(){
    model.setNumberOfGuests(model.getNumberOfGuests() - 1);
  });

  view.dinconfirm.click(function(){
    showFindDish();
  });

  //Display the dish name/s as well
}

var FindDishController = function(view, model, app)
{
  view.searchdishes.click(function(){ //Works
    view.Update();
  });
};

var OneDishController = function(view, model, dish, app)
{
  view.dishbutton.click(function(){

    app.showDishDetails();

    model.setCurrentDish(view.dish);
    console.log(model.getCurrentDish())
  });
};

var DinnerDetailsController = function(view, model, app) //DishDetailsView
{
  $('#dinnerdetailsOverview').on('click', '#dinEdit', function(){
    console.log("ggg");
    app.showFindDishAgain();
  });

  $('#dinnerdetailsIngredients').on('click', '#addConfirm', function(){
    var thedish = model.getCurrentDish();
    model.addDishToMenu();
});
};




var DinnerOverviewController = function(view, model)
{
  view.goBackAndEditDinner.click(function(){
    showFindDish();
  });

  view.dinprint.click(function(){
    showDinnerPrintout();
  });
};

var DinnerPrintoutController = function(view, model)
{
  view.dinedit.click(function(){
    showFindDish();
  });
};
