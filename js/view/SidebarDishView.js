//Sidebar Dish View

    //Observer pattern
    this.Update = function(){

    }


var SidebarDishView = function (container, model) {

    //Guests & cost
    var totGuests = model.getNumberOfGuests();
    var totCost = model.getTotalMenuPrice();
	container.find("#guests").value = totGuests;
	container.find("#totalcost").value="SEK "+ totCost;


    //Searching & Filtering //Why is this here? This should be in FindDish, should it not?
    var dishKey = container.find("#dishsearch").value;
	var dishType = container.find("#dropdown").on("show.bs.dropdown", function(event){
						var x = $(event.relatedTarget).text(); // Get the text of the element
						return(x);});
    var allDishes = model.getAllDishes(dishType, dishKey);



    //Plus & minus guest buttons
    function minusGuest(){
        var oldVal = parseInt(container("#guests").value);
        if(oldVal == 0 )
            alert("Number of Guests cannot be less than 0"); //Suggestion: simply make less than zero result in 0?
        else
            container.find("#guests").value = oldVal-1;
    }
    function addGuest(){
        var oldVal = parseInt(container.find("#guests").value);
        container.find("#guests").value = oldVal+1;
    }


    //HTML generation
   var sidebar = '<div class="col-md-3 collapse in" id="SideBarDishView" >';
    sidebar+= '<button data-toggle="collapse" data-target="#peoplecost">';
    sidebar+= '<span class="glyphicon glyphicon-menu-hamburger"></span></button>';
    sidebar+= '<div id="peoplecost" >';
    sidebar+= '<h4>My dinner</h4>';
    sidebar+= '<span>Guests';
    sidebar+= '<input type="text" value="0" id="guests" disabled />';
    sidebar+= '<button id="minusGuest" class="btn-xs btn-default" onclick='+minusGuest()+'>';
    sidebar+= '<span class="glyphicon glyphicon-minus" />';
    sidebar+= '</button>';
    sidebar+= '<button id="plusGuest" class="btn-xs btn-default" onclick='+addGuest()+' >';
    sidebar+= '<span class="glyphicon glyphicon-plus" />';
    sidebar+= '</button></span>';
    sidebar+= '<div id="separator">';
    sidebar+= '<span id="dfloat">Dish</span>';
    sidebar+= '<span id="cost1">Cost</span>';
    sidebar+= '</div>';
    sidebar+= '<span id="finaldish">dish goes here</span>';
    sidebar+= '<span id="totalcost">SEK 0.00</span>';
    sidebar+= '<br/> <br/>';
    sidebar+= '<input type="button" id="dinconfirm" onclick="GoToNextPageFunctionThatDoesNotExistYet()" value="Confirm Dinner">';
    sidebar+= '</div> </div>';

    var sidebarcon = container.find("#row2");
    sidebarcon.appendChild(sidebar);

    }
