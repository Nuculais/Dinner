//Dinner Overview View

var DinnerOverviewView = function (container, model) {

  this.goBackAndEditDinner = container.find('#goBackAndEditDinner');
  this.dinprint = container.find('#dinprint');
  
  //Observer pattern
  model.addObserver(this);
  this.Update = function(what){


    var dinnerOverview = container.find('#dinnerOverviewView');
    var numguests = model.getNumberOfGuests();

    //HTML generation
    var overview = '<div class="row" id="row3">';
        overview += '<div class="col-md-12" id= "dinoverheadline" >';
        overview += '<h3>My dinner: </h3>';
        overview += '<span>'+numguests+' guests</span>';
        overview += '<input type="button" id="dinedit" onclick="FunctionThatDoesNotExistYet()" value="Go back and edit dinner">';
        overview += '</div></div>';
        overview += '<div class="row">';
        overview += '<div class="col-md-10" id="dinovermain">';
        overview += '</div> </div>';
        overview += '<div class="col-md-2" id="dinovermaintotal">';
        overview += '<span id="totalmenuprice">'+model.getTotalMenuPrice()+'</span>';
        overview += '</div>';
        overview += '<div class="row">';
        overview += '<div class="col-md-12" id="dinoverbottom">';
        overview += ' <input type="button" id="dinprint" onclick="FunctionThatDoesNotExistYet()" value="Print Full Recipe">';
        overview += ' </div> </div>';

       dinnerOverview.empty();
       dinnerOverview.append(overview);


       //Find the menu dishes and their total price
       var showingmenudishes = container.find("#dinnerOverviewView");
       var menu = model.getFullMenu();

       var dishprices = function(id, num){
           var theDish = model.getDish(id);
           var priset = 0;
           for(var i=0;i<theDish.ingredients.length;i++){
               priset += theDish.ingredients.price[i]; }
            return (priset * num); }

            //Display the full menu
       var fullMenu = function(menu){
       for(var i=0; i<menu.length;i++){

       var food = '<div id="food'+i+'"><img src=images/'+ menu[i].image +'<span id="menuName">'+menu[i].name+'</span>';
           food+= '<span id="foodcost">'+ dishprices(menu[i].id, numguests) + '</span></div>';

           showingmenudishes.append(food);
}}}}
