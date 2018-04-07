//Dinner Overview View

let DinnerOverviewView = function (container, model, app) {

    this.goBackAndEditDinner = container.find('#goBackAndEditDinner');
    this.dinprint = container.find('#dinnerPrint');

    //Observer pattern
    model.addObserver(this);
    this.Update = function (what) {


        let numguests = model.getNumberOfGuests();
        let totprice = Math.floor(model.getTotalMenuPrice());

        container.find('#overviewPeople').html(numguests + ' guests, total cost: ' + totprice + ' kr.');

        //Find the menu dishes and their total price
        let showingmenudishes = container.find("#allofthemenu");

        //Display the full menu
        //let fullMenu = function(menu){
        let menu = model.getFullMenu();
        let whatisshown = [];
        showingmenudishes.empty();
        for (let i in menu) {
            let allfood = document.createElement("div");
            let food = '<div class="littledishes" id="food' + i + '"><img src="' + menu[i].image + '"<span id="menuName"><h3>' + menu[i].title + '   </h3></span>';
            food += '<span id="foodcost">' + menu[i].pricePerServing + ' kr</span></div>';

            //showingmenudishes.empty(); //This will make only the last dish append
            allfood.innerHTML = food;
            whatisshown.push(allfood);

            for (let j in whatisshown) {
                showingmenudishes.append(allfood);
            }
        }
    }
};
