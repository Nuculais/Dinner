//Controllers
let SidebarDishController = function (view, model, app) {
    view.plusGuest.click(function () { //works
        model.setNumberOfGuests(model.getNumberOfGuests() + 1);
    });

    view.minusGuest.click(function () {
        if (model.getNumberOfGuests() <= 1) {
            model.setNumberOfGuests(0);
        }
        else {
            model.setNumberOfGuests(model.getNumberOfGuests() - 1);
        }
    });

    view.dinconfirm.click(function () {
        app.showDinnerOverview();
    });

    //Display the dish name/s as well
};

let FindDishController = function (view, model, app) {
    view.searchdishes.click(function () { //Works
        view.Update();
    });
};

let OneDishController = function (view, model, dish, app) {
    view.dishbutton.click(function () {

        app.showDishDetails();

        model.setCurrentDish(view.dish);
    });
};

let DinnerDetailsController = function (view, model, app) //DishDetailsView
{
    $('#dinnerdetailsOverview').on('click', '#dinEdit', function () {
        app.showFindDishAgain();
    });

    $('#dinnerdetailsIngredients').on('click', '#addConfirm', function () {
        model.addDishToMenu();
    });

    $('#dinnerdetailsIngredients').on('click', '#removeDish', function () {
        console.log("Removing");
        model.removeDishFromMenu();
    });
    /*view.dishRemove.click(function () {
        console.log("Print Call");
        app.showDinnerPrintout();
    });*/
};


let DinnerOverviewController = function (view, model, app) {
    view.goBackAndEditDinner.click(function () {
        app.showFindDishAgain();
    });


    view.dinprint.click(function () {
        console.log("Print Call");
        app.showDinnerPrintout();
    });
};

let DinnerPrintoutController = function (view, model, app) {
    view.dinnerEdit.click(function () {
        app.showFindDishAgain();
    });
};
