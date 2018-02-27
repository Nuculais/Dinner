


//Controllers
var SidebarDishController = function(view, model)
{
  view.plusGuest.click(function(){ //works
  model.setNumberOfGuests(model.getNumberOfGuests() + 1);
  });

  view.minusGuest.click(function(){
  model.setNumberOfGuests(model.getNumberOfGuests() - 1);
});
  //Display the dish name/s as well
}

var FindDishController = function(view, model)
{
  view.dinconfirm.click(function(){ //undefined
    showFindDish();
  });


  view.dish-+allDishes[i].id.click(function(){
    showDishDetails();

  });

  view.searchdishes.click(function(){
    // var type= view.dropdown.val()
    //
    // console.log(type);
    // var filter = view.searchForm.val().toLowerCase();

    view.Update();

  });
};

var DinnerDetailsController = function(view, model) //DishDetailsView
{
  view.dinEdit.click(function(){
  showFindDish();
  });

  view.addConfirm.click(function(){
  var dishID = container.find('#dishname').value; //Assuming this is the dish's ID. Otherwise: (container.find('#dishname').value.toLowerCase()).id;
  model.addDishToMenu(dishID);
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
