//Dinner Overview View

var DinnerOverviewView = function (container, model, app) {

  this.goBackAndEditDinner = container.find('#goBackAndEditDinner');
  this.dinprint = container.find('#dinprint');

  //Observer pattern
  model.addObserver(this);
  this.Update = function(what){



    var numguests = model.getNumberOfGuests(); //works
    var totprice = model.getTotalMenuPrice();

    container.find('#overviewPeople').html(numguests+ ' guests, total cost: '+totprice+' kr.');

    var dinnerOverview = container.find('#DinnerOverviewViewContainer');


    //HTML generation
    var shown = document.createElement("div");
    var overview = '<div class="row" id="row3">';
        overview += '<div class="col-md-12" id= "dinoverheadline" >';
        overview += '</div></div>';
        overview += '<div class="row">';
        overview += '<div class="col-md-10" id="dinovermain">';
        overview += '</div> </div>';
        overview += '<div class="col-md-2" id="dinovermaintotal">';
        overview += '</div>';
        overview += '<div class="row">';
        overview += '<div class="col-md-12" id="dinoverbottom">';
        overview += ' <input type="button" class="btn" id="dinprint" value="Print Full Recipe">';
        overview += ' </div> </div>';

       dinnerOverview.empty();
       shown.innerHTML = overview;
       dinnerOverview.append(shown);


       //Find the menu dishes and their total price
       var showingmenudishes = container.find("#allofthemenu");
       var menu = model.getFullMenu();

      /* var dishprices = function(id, num){
           var theDish = model.getDish(id);
           var priset = 0;
           for(var i=0;i<theDish.ingredients.length;i++){
               priset += theDish.ingredients.price[i]; }
            return (priset * num); } */


            //Display the full menu
       //var fullMenu = function(menu){
       for(var i=0; i<menu.length;i++){

      var allfood = document.createElement("div");
       var food = '<div id="food'+i+'"><img src="https://spoonacular.com/recipeImages/'+menu[i].image +'<span id="menuName">'+menu[i].title+'</span>';
           food+= '<span id="foodcost">'+ model.getOneDishPrice(menu[i].id) + ' kr</span></div>';

           allfood.innerHTML = food;
           showingmenudishes.append(allfood);
}}}
//}
