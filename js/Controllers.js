


//Controllers
var SidebarDishController = function(view, model)
{
  view.plusGuest.click(function(){ //works
  model.setNumberOfGuests(model.getNumberOfGuests() + 1);
  });

  $('minusGuest').click(function(){
  model.setNumberOfGuests(model.getNumberOfGuests() - 1);
});
  //Display the dish name/s as well
}

var FindDishController = function(view, model)
{
  view.dinconfirm.click(function(){ //undefined
    showFindDish();
  });

  view.searchdishes.click(function(){
    var type= view.container.find('.dropdown').on('show.bs.dropdown', function(grej){
      var thetype = $(grej.relatedTarget).text();
      return thetype;
    });

    var filter = view.container.find('#searchForm').value.toLowerCase();

    model.getAllDishes(type.toLowerCase(), filter);

  });
};

var dinnerDetailsController = function(view, model)
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




var dinnerOverviewController = function(view, model)
{
  view.goBackAndEditDinner.click(function(){
    showFindDish();
  });

  view.dinprint.click(function(){
    showDinnerPrintout();
  });
};

var dinnerPrintoutController = function(view, model)
{
  view.dinedit.click(function(){
    showFindDish();
  });
};
