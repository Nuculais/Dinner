//Dinner Overview View
var DinnerOverviewView = function (container, model) {

    var dinnerOverview = container.find('#dishDetails');
    var numguests = model.getNumberOfGuests();

    var overview = $('<div class="row">
        <div class="col-md-12" id= "dinoverheadline" >
            <h3>My dinner: </h3>
            <span>'+numguests+' guests</span>
            <input type="button" id="dinedit" onclick="FunctionThatDoesNotExistYet()" value="Go back and edit dinner">
                </div></div>
                <div class="row">
                <div class="col-md-10" id="dinovermain">
            
                </div>
                </div>
                <div class="col-md-2" id="dinovermaintotal">
                    <span id="totalmenuprice">'+model.getTotalMenuPrice()+'</span>
                </div>
                <div class="row">
                    <div class="col-md-12" id="dinoverbottom">
                <input type="button" id="dinprint" onclick="FunctionThatDoesNotExistYet()" value="Print Full Recipe">
                    </div>
                    </div>');

       dinnerOverview.appendChild(overview);

        //Show the menu dishes and their totalprice
       var showingmenudishes = container.find("#dinovermain");

       menu = model.getFullMenu();

       var dishprices = function(id, num){
           var theDish = model.getDish(id);
           var priset = 0;
           for(var i=0;i<theDish.ingredients.length;i++){
               priset += theDish.ingredients.price[i]; }
            return (priset * num); }



       this.fullMenu = function(menu){
       for(var i=0; i<menu.length;i++){

       var food = $('<div id="food'+i '"><img src=images/'+ menu[i].image +'<span id="menuname">'+menu[i].name+'</span><span id="foodcost">'+ dishprices(menu[i].id, guestsnum) + '</span></div>');
       showingmenudishes.appendChild(food);
}}}
        }