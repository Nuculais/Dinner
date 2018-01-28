//Sidebar Dish View

var SidebarDishView = function (container, model) {

    //Guests and cost
    var totGuests = model.getNumberOfGuests();
    var totCost = model.getTotalMenuPrice();
    //var guestsspan = container.find("#totalguests");
	document.getElementById("guests").value = totGuests;
	document.getElementById("totalcost").value="SEK "+ totCost;
    //guestsspan.innerHTML(totGuests);
    //var costspan = container.find("#totalcost");
    //costspan.innerHTML("SEK "+ totCost);

    //Searching & Filtering
    var dishKey = document.getElementById("dishsearch").value;
	var dishType = $(".dropdown").on("show.bs.dropdown", function(event){
						var x = $(event.relatedTarget).text(); // Get the text of the element
						return(x);});
    var allDishes = model.getAllDishes(dishType, dishKey);

    }
