//Sidebar Dish View

var SidebarDishView = function (container, model) {

    //Guests and cost
    var totGuests = model.getNumberOfGuests();
    var totCost = model.getTotalMenuPrice();
    var guestsspan = container.find("#totalguests");
    guestsspan.htmlSiedebarDishView(totGuests);
    var costspan = container.find("#totalcost");
    costspan.html("SEK "+ totCost);

    //Searching & Filtering
    var dishKey = document.getElementById("dishsearch").value;
    var theType = document.getElemntById("dropdown");
    var dishType = theType.options[theType.selectedIndex].text;

    var allDishes = model.getAllDishes(dishType, dishKey);

    }
