$( document ).ready(function() {
    //We instantiate our model
	var model = new DinnerModel();

	//model.setNumberOfGuests(document.getElementById("guests").value);
	// And create the instance of ExampleView
	//var exampleView = new ExampleView($("#exampleView"), model);
	var findDishView = new FindDishView($("#FindDishView"), model);
	var sidebarDishView = new SidebarDishView($("#SidebarDishView"), model);
	var dishDetailsView = new DishDetailsView($("#DishDetailsView"), model);
	var dinnerOverviewView = new DinnerOverviewView($("#DinnerOverviewView"), model);
	var dinnerPrintoutView = new DinnerPrintoutView($("#DishDetailsView"), model);

	/**
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * use the $('someSelector') to search for elements in the whole HTML.
	 * In other places you should limit the search only to the children
	 * of the specific view you're working with (see exampleView.js).
	 */

	var showSidebar = function(){
		sidebarDishView.show();
		//Also need to hide the others
	}
	var showDishDetails = function(){
		dishDetailsView.show();
	}
	var showFindDish = function(){
		findDishView.show();
	}
	var showDinnerOverview = function(){
		dinnerOverviewView.show();
	}
	var showDinnerPrintout = function(){
		dinnerPrintoutView();
	}



});
