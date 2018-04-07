//Select Dish View

var SelectDishView = function (container, model) {

    //Guests and cost
    var totGuests = model.getNumberOfGuests();
    var totCost = model.getTotalMenuPrice();
    var guestsspan = container.find("#totalguests");
    guestsspan.html(totGuests);
    var costspan = container.find("#totalcost");
    costspan.html("SEK "+ totCost);

    //Searching & Filtering
    var dishKey = document.getElementById("dishsearch").value;
    var theType = document.getElemntById("dropdown");
    var dishType = theType.options[theType.selectedIndex].text;

    var allDishes = model.getAllDishes(dishType, dishKey);




    //Generating the shown dishes
    var wherethedishesare = container.find("#dishes");

    this.showAllDishes = function(allDishes){
      for(var i=0; i<allDishes.length;i++){

        var food = $('<div id="food'+i+'"><span id="dishname">'+allDishes[i].name+'</span></div>');
        wherethedishesare.appendChild(food);
      }
    }
}
