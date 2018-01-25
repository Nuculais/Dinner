$(function() {
	//We instantiate our model
	var model = new DinnerModel();

	// And create the instance of ExampleView
	var exampleView = new ExampleView($("#exampleView"), model);
	var sidebarDishView = new SidebarDishView($("#SidebarDishView"), model);
	var dishDetailsView = new DishDetailsView($("#DishDetailsView"), model);
	var findDishView = new FindDishView($("#FindDishView"), model);
	var dinnerOverviewView = new DinnerOverviewView($("#DinnerOverviewView"), model);
	var dinnerPrintoutView = new DinnerPrintoutView($("#DishDetailsView"), model);
	/**
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * use the $('someSelector') to search for elements in the whole HTML.
	 * In other places you should limit the search only to the children
	 * of the specific view you're working with (see exampleView.js).
	 */

});
