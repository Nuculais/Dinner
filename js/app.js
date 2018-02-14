$(function() {

    //We instantiate our model
	var model = new DinnerModel();

	// And create the instance of ExampleView
	//var exampleView = new ExampleView($("#exampleView"), model);
	var sidebarDishView = new SidebarDishView($("#dinnercost"), model);
	//var dinnercost = new SidebarDishView($('#dinnercost'), model);
	var findDishView = new FindDishView($('#selectDishView'), model);
	var dinnerDetailsView = new DishDetailsView($('#dinnerdetailsView'), model);
	var dinnerOverviewView = new DinnerOverviewView($('#dinneroverviewView'), model);
	var dinnerPrintoutView = new DinnerPrintoutView($("#dinnerprintoutView"), model);



	$('#newDinner').click(function(){
		$('#indexScreen').toggleClass('hidden');
		$('#selectdinnerView').toggleClass('hidden');
		//showSidebar();
		//showFindDish();

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
		view.dinconfirm.click(function(){
			showFindDish();
		});

		view.searchdishes.click(function(){
			var type= view.container.find('.dropdown').on('show.bs.dropdown', function(grej){
				var thetype = $(grej.relatedTarget).text();
				return thetype;
			});

			var filter = view.container.find('#searchForm').value.toLowerCase();

			model.getAllDishes(type.toLowerCase(), filter);

		});
	}

	var dinnerDetailsController = function(view, model)
	{
		view.dinEdit.click(function(){
		showFindDish();
		});

		view.addConfirm.click(function(){
		var dishID = container.find('#dishname').value; //Assuming this is the dish's ID. Otherwise: (container.find('#dishname').value.toLowerCase()).id;
		model.addDishToMenu(dishID);
		showFindDish();
		});
	}


	var dinnerOverviewController = function(view, model)
	{
		view.goBackAndEditDinner.click(function(){
			showFindDish();
		});

		view.dinprint.click(function(){
			showDinnerPrintout();
		});

	var dinnerPrintoutController = function(view, model)
	{
		view.dinedit.click(function(){
			showFindDish();
		});
	}



	/**
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * use the $('someSelector') to search for elements in the whole HTML.
	 * In other places you should limit the search only to the children
	 * of the specific view you're working with (see exampleView.js).
	 */

	var showSidebar = function(){
		sidebarDishView.show();
		dinnerDetailsView.hide();
		findDishView.hide();
		dinnerOverviewView.hide();
		dinnerPrintoutView.hide();
	}
	var showDishDetails = function(){
		dinnerDetailsView.show();
		findDishView.hide();
		dinnerOverviewView.hide();
		dinnerPrintoutView.hide();
	}
	var showFindDish = function(){
		findDishView.show();
		dishDetailsView.hide();
		dinnerOverviewView.hide();
		dinnerPrintoutView.hide();
	}
	var showDinnerOverview = function(){
		dinnerOverviewView.show();
		sidebarDishView.hide();
		dinnerDetailsView.hide();
		findDishView.hide();
		dinnerPrintoutView.hide();
	}
	var showDinnerPrintout = function(){
		dinnerPrintoutView.show();
		sidebarDishView.hide();
		dinnerDetailsView.hide();
		findDishView.hide();
		dinnerOverviewView.hide();
	}


}
});
