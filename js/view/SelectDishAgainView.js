//Select dish again view
var selectDishAgainView = function(model){
//Guests and cost
var totGuests = model.getNumberOfGuests();
var totCost = model.getTotalMenuPrice();
var guestsspan = container.find("#totalguests");
guestsspan.html(totGuests);
var costspan = container.find("#totalcost");
costspan.html("SEK " + totCost);
}
