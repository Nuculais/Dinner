
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
  //Kan det vara att det inte anropas till app.js när funktioneraa ligger i den?
  //  view.dishbutton.click(function(){ //Clicking this should make the Dish Details View appear. It does not, and it doesn't make selectdinnerView go away either.
  //  showDishDetails();
  //});

  view.searchdishes.click(function(){ //Works
    view.Update();
  });
};

var OneDishController = function(view, model, dish, app)
{
  view.dishbutton.click(function(){

    app.showDishDetails();
    //model.currentDish = view.dish;

    model.setCurrentDish(view.dish);
    console.log(model.getCurrentDish())
    //model.currentDishID = setDishID(view.dish.id);

    //console.log(model.currentDishID);
  });
};

var DinnerDetailsController = function(view, model, app) //DishDetailsView
{
  view.dinEdit.click(function(){
    console.log("ggg");
    app.showFindDish();
  });

  view.addConfirm.on('click', function(){
    //model.addDishToMenu(model.currentDish.id);
    console.log("fff");
    //app.showFindDish();
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
