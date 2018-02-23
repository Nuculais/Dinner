$(function() {

    //We instantiate our model
	var model = new DinnerModel();

	// And create the instances of the views and controllers
	var sidebarDishView = new SidebarDishView($('#dinnercost'), model);
	var sidebarDishController = new SidebarDishController(sidebarDishView, model);
	var findDishView = new FindDishView($('#selectDishView'), model);
	var findDishController = new FindDishController(findDishView, model);
	var dinnerDetailsView = new DishDetailsView($('#dinnerdetailsView'), model);
	var dinnerDetailsController = new DinnerDetailsController(dinnerDetailsView, model);
	var dinnerOverviewView = new DinnerOverviewView($('#dinneroverviewView'), model);
	var dinnerOverviewController = new DinnerOverviewController(dinnerOverviewView, model);
	var dinnerPrintoutView = new DinnerPrintoutView($("#dinnerprintoutView"), model);
	var dinnerPrintoutController = new DinnerPrintoutController(dinnerPrintoutView, model);

	//This does not work
	$('#newDinner').click(function(){
		$('#indexScreen').toggleClass('hidden');
		//$('#selectdinnerView').toggleClass('hidden');
		//alert('Det här hände.');
		//$('#indexScreen').style.visibility ='hidden';
		showFindDish();
	});



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
	  sidebarDishView.show();
	  findDishView.hide();
	  dinnerOverviewView.hide();
	  dinnerPrintoutView.hide();
	}
	var showFindDish = function(){
		$('#selectdinnerView').toggleClass('hidden');
	  //findDishView.show();
	  //sidebarDishView.show();
	  //dinnerDetailsView.hide();
	  //dinnerOverviewView.hide();
	  //dinnerPrintoutView.hide();
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


});
//});
