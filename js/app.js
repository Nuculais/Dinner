$(function() {

    //We instantiate our model
	var model = new DinnerModel();

	//model.setNumberOfGuests(document.getElementById("guests").value);
	// And create the instance of ExampleView
	//var exampleView = new ExampleView($("#exampleView"), model);
	var dinnercost = new DinnerCost($('#dinnercost'), model);
	var selectView = new SelectView($('#selectView'), model);
	var dinnerdetailsView = new DetailsView($('#dinnerdetailsView'), model);
	var dinneroverviewView = new OverviewView($('#dinneroverviewView'), model);

/*  var sidebarDishView = new SidebarDishView($("#SidebarDishView"), model);
	var findDishView = new FindDishView($("#FindDishView"), model);
	var dishDetailsView = new DishDetailsView($("#DishDetailsView"), model);
	var dinnerOverviewView = new DinnerOverviewView($("#DinnerOverviewView"), model);
	var dinnerPrintoutView = new DinnerPrintoutView($("#DishDetailsView"), model);*/
	$('#newDinner').click(function(){
		$('#indexScreen').toggleClass('hidden');
		$('body').toggleClass('hiddenBackgroundImage');
		$('#selectdinnerView').toggleClass('hidden');
	});

	//controllers
	var sidebarDishController = function(view, model)
	{
		view.plusGuest.click(function(){
		model.setNumberOfGuests(model.getNumberOfGuests() + 1);
		});

		view.minusGuest.click(function(){
		model.setNumberOfGuests(model.getNumberOfGuests() - 1);
	});

		//Display the dish name/s as well
	}

	var findDishController = function(view, model)
	{

	}

	var dishDetailsController = function(view, model)
	{

	}

	var dinnerOverviewController = function(view, model)
	{

	}

	var dinnerPrintoutController = function(view, model)
	{

	}



	/**
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * use the $('someSelector') to search for elements in the whole HTML.
	 * In other places you should limit the search only to the children
	 * of the specific view you're working with (see exampleView.js).
	 */

	var showSidebar = function(){
		sidebarDishView.show();
		dishDetailsView.hide();
		findDishView.hide();
		dinnerOverviewView.hide();
		dinnerPrintoutView.hide();
	}
	var showDishDetails = function(){
		dishDetailsView.show();
		sidebarDishView.hide();
		findDishView.hide();
		dinnerOverviewView.hide();
		dinnerPrintoutView.hide();
	}
	var showFindDish = function(){
		findDishView.show();
		sidebarDishView.hide();
		dishDetailsView.hide();
		dinnerOverviewView.hide();
		dinnerPrintoutView.hide();
	}
	var showDinnerOverview = function(){
		dinnerOverviewView.show();
		sidebarDishView.hide();
		dishDetailsView.hide();
		findDishView.hide();
		dinnerPrintoutView.hide();
	}
	var showDinnerPrintout = function(){
		dinnerPrintoutView.show();
		sidebarDishView.hide();
		dishDetailsView.hide();
		findDishView.hide();
		dinnerOverviewView.hide();
	}



});
