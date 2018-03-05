
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
  view.dishbutton.click(function(){ //Clicking this should make the Dish Details View appear. It does not, and it doesn't make selectdinnerView go away either.
  //console.log(view.dish); //Finds it!
    app.showDishDetails();
    model.currentDish = view.dish;
    console.log(model.currentDish);
      });
  //  Nothing here
};

var DinnerDetailsController = function(view, model) //DishDetailsView
{
  view.Update();
  view.dinEdit.click(function(){
  showFindDish();
  });

  view.addConfirm.click(function(){
  //var dishID = container.find('#dishname').value; //Assuming this is the dish's ID. Otherwise: (container.find('#dishname').value.toLowerCase()).id;
  model.addDishToMenu(model.currentDish.id);
  showFindDish();
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
