//Dinner Printout View
var DinnerPrintoutView = function (container, model) {

    //The top headline (should maybe be a separate view?)
    var dinnerPrint = container.find('#DishView');
    var numguests = model.getNumberOfGuests();

    var printout = $('<div class="row">
        <div class="col-md-12" id="dinprintheadline">
        <h3>My dinner: </h3>
        <span>'+numguests+' guests</span>
        <input type="button" id="dinedit" onclick="FunctionThatDoesNotExistYet()" value="Go back and edit dinner">
        </div></div>

        <div class="row">
        <div class="col-md-12" id="dinprintmenuitems">

        </div></div>');

    dinnerPrint.appendChild(printout);


    //Generating the menu items
    var fullDinner = container.find('#dinprintmenuitems');
    var menu = model.getFullMenu();
    this.fullMenu = function (menu) {
        for (var i = 0; i < menu.length; i++) {
            var food = $('<div class="row"><div class="col-md-6">
                       <img src="images/'+menu[i].image+'"><span id="dinprintname"><h4>'+menu[i].name+'</h4></span><span id="dinprintdescr">'+menu[i].type+'</span></div>
                       <div class="col-md-6><h5>Preparation</h5><span>'+menu[i].description+'</span>
                       </div></div>');
                       fullDinner.appendChild(food); } }

        }
