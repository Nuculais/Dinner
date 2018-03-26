
//Controllers
var SidebarDishController = function(view, model, app)
{
  view.plusGuest.click(function(){ //works
    model.setNumberOfGuests(model.getNumberOfGuests() + 1);
  });

  view.minusGuest.click(function(){
    if(model.getNumberOfGuests() <= 1){
      model.setNumberOfGuests(0);
    }
    else{
      model.setNumberOfGuests(model.getNumberOfGuests() - 1);
    }
  });

  view.dinconfirm.click(function(){
    app.showDinnerOverview();
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
  });
};

var DinnerDetailsController = function(view, model, app) //DishDetailsView
{
  $('#dinnerdetailsOverview').on('click', '#dinEdit', function(){
    app.showFindDishAgain();
  });

  $('#dinnerdetailsIngredients').on('click', '#addConfirm', function(){
    var thedish = model.getCurrentDish();
    model.addDishToMenu(view.theprice);
   // model.addPrice(view.dishIng.pricePerServing);
    console.log(view.theprice);
});
};




var DinnerOverviewController = function(view, model, app)
{
  view.goBackAndEditDinner.click(function(){
    app.showFindDishAgain();
  });

  view.dinprint.click(function(){
    showDinnerPrintout();
  });
};

var DinnerPrintoutController = function(view, model, app)
{
  view.dinedit.click(function(){
    showFindDishAgain();
  });
};
