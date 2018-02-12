//Dinner Printout View

  //Observer pattern
  model.addObserver(this);
  this.Update = function(){
    
  }


var DinnerPrintoutView = function (container, model) {

    //The top headline (should maybe be a separate view?)
    var dinnerPrint = container.find('#row2');
    var numguests = model.getNumberOfGuests();

    var printout = '<div class="row" id="row3">';
        printout += '<div class="col-md-12" id="dinprintheadline">';
        printout += '<h3>My dinner: </h3>';
        printout += '<span>'+numguests+' guests</span>';
        printout += '<input type="button" id="dinedit" onclick="FunctionThatDoesNotExistYet()" value="Go back and edit dinner">';
        printout += '</div></div>';
        printout += '<div class="row" id="row4">';
        printout += '<div class="col-md-12" id="dinprintmenuitems">';
        printout += '</div></div>';

        dinnerPrint.appendChild(printout);


    //Generating the menu items
    var fullDinner = container.find('#dinprintmenuitems');
    var menu = model.getFullMenu();
    this.fullMenu = function (menu) {
        for (var i = 0; i < menu.length; i++) {
            var food = '<div class="row"><div class="col-md-6">';
                food+= '<img src="images/'+menu[i].image+'"><span id="dinprintname"><h4>'+menu[i].name+'</h4></span>';
                food+= '<span id="dinprintdescr">'+menu[i].type+'</span></div>';
                food+= '<div class="col-md-6"><h5>Preparation</h5><span>'+menu[i].description+'</span>';
                food+= '</div></div>';

                fullDinner.appendChild(food); } }

        }
