
let DinnerPrintoutView = function (container, model, app) {

    this.dinnerEdit = container.find('#dinnerEdit');

    //Observer pattern
    model.addObserver(this);
    this.Update = function (what) {

        console.log("printing");
        //Find the menu dishes and their total price
        let showingmenudishes = container.find("#dinprintmenuitems");

        //Display the full menu
        //let fullMenu = function(menu){
        let menu = model.getFullMenu();
        let whatisshown = [];
        showingmenudishes.empty();
        for (let i in menu) {
            console.log("printing1111");
            let allfood = document.createElement("div");
            let food = '<div class="littledishes" id="food' + i + '"><img src="' + menu[i].image + '"<span id="menuName"><h3>' + menu[i].title + '   </h3></span>';
            food += '<span id="foodcost">' + menu[i].instructions + '<br /><br /></span></div>';

            //showingmenudishes.empty(); //This will make only the last dish append
            allfood.innerHTML = food;
            whatisshown.push(allfood);

            for (let j in whatisshown) {
                showingmenudishes.append(allfood);
            }
        }
    }
};



/*
//Dinner Printout View

let DinnerPrintoutView = function (container, model) {
    console.log("Print1");
    this.dinedit = container.find('#dinedit');
    model.addObserver(this);
    console.log("Print2");
    let fullDinner = container.find('#dinprintmenuitems');
    let menu = model.getFullMenu();
    this.fullMenu = function (menu) {
        for (let i = 0; i < menu.length; i++) {
            let food = '<div class="row"><div class="col-md-6">';
            food += '<img src="images/' + menu[i].image + '"><span id="dinprintname"><h4>' + menu[i].name + '</h4></span>';
            food += '<span id="dinprintdescr">' + menu[i].type + '</span></div>';
            food += '<div class="col-md-6"><h5>Preparation</h5><span>' + menu[i].description + '</span>';
            food += '</div></div>';

            fullDinner.append(food);
        }
    }


}
*/
