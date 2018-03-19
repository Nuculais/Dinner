$(function() {

    //We instantiate our model
	var model = new DinnerModel();

	// And create the instances of the views and controllers
	var sidebarDishView = new SidebarDishView($('#dinnercost'), model);
	var sidebarDishController = new SidebarDishController(sidebarDishView, model);
	var findDishView = new FindDishView($('#selectDishView'), model, this);
	var findDishController = new FindDishController(findDishView, model, this);
	var dinnerDetailsView = new DishDetailsView($('#dinnerdetailsView'), model, this);
	var dinnerDetailsController = new DinnerDetailsController(dinnerDetailsView, model, this);
	var dinnerOverviewView = new DinnerOverviewView($('#dinneroverviewView'), model);
	var dinnerOverviewController = new DinnerOverviewController(dinnerOverviewView, model);
	var dinnerPrintoutView = new DinnerPrintoutView($("#dinnerprintoutView"), model);
	var dinnerPrintoutController = new DinnerPrintoutController(dinnerPrintoutView, model);

	//this works
	$('#newDinner').click(function(){
		$('#indexScreen').toggleClass('hidden');
		//$('#selectdinnerView').toggleClass('hidden');
		showFindDish(); //Works
	});



	/**
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * use the $('someSelector') to search for elements in the whole HTML.
	 * In other places you should limit the search only to the children
	 * of the specific view you're working with (see exampleView.js).
	 */

	this.showSidebar = function(){
	  sidebarDishView.show();
	  dinnerDetailsView.hide();
	  findDishView.hide();
	  dinnerOverviewView.hide();
	  dinnerPrintoutView.hide();
	}

	this.showDishDetails = function(){
		$('#selectDishView').toggleClass('hidden'); //Now it disappears
		$('#dinnerdetailsView').toggleClass('hidden');  //Now this view has no class at all
		/*dinnerDetailsView.show();
	  sidebarDishView.show();
	  findDishView.hide();
	  dinnerOverviewView.hide();
	  dinnerPrintoutView.hide();*/
	}
	var showOneDish = function(){


	}
	var showFindDish = function(){ //should probably be this., but it results in "this.showFindDish is not a function" on line 22.
	 $('#selectdinnerView').toggleClass('hidden'); //works
	 $('dinnerdetailsView').toggleClass('hidden');
	  //findDishView.show();
	  //sidebarDishView.show();
	  //dinnerDetailsView.hide();
	  //dinnerOverviewView.hide();
	  //dinnerPrintoutView.hide();
	}
	var showDinnerOverview = function(){
		$('#selectDishView').toggleClass('hidden');
		$('#dinnerdetailsView').toggleClass('hidden');
	  //dinnerOverviewView.show();
	  //sidebarDishView.hide();
	  //dinnerDetailsView.hide();
	  //findDishView.hide();
	  //dinnerPrintoutView.hide();
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
