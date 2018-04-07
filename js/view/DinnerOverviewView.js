//Dinner Overview View

let DinnerOverviewView = function (container, model, app) {

    this.goBackAndEditDinner = container.find('#goBackAndEditDinner');
    this.dinprint = container.find('#dinnerPrint');

    //Observer pattern
    model.addObserver(this);
    this.Update = function (what) {


<<<<<<< HEAD
        let numguests = model.getNumberOfGuests();
        let totprice = Math.floor(model.getTotalMenuPrice());

        container.find('#overviewPeople').html(numguests + ' guests, total cost: ' + totprice + ' kr.');
=======
    var numguests = model.getNumberOfGuests();
    var totprice = Math.floor(model.getTotalMenuPrice());
>>>>>>> 76fd7e8e92903956c8e0f13b10008fd508658e26

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

<<<<<<< HEAD
            for (let j in whatisshown) {
                showingmenudishes.append(allfood);
            }
        }
    }
};
=======
    //HTML generation
    var shown = document.createElement("div");
    var overview = '<div class="row" id="row3">';
    overview += '<div class="col-md-12" id= "dinoverheadline" >';
    overview += '</div></div>';
    overview += '<div class="row">';
    overview += '<div class="col-md-10" id="dinovermain">';
    overview += '</div> </div>';
    overview += '<div class="col-md-2" id="dinovermaintotal">';
    overview += '</div>';
    overview += '<div class="row">';
    overview += '<div class="col-md-12" id="dinoverbottom">';
    overview += ' <input type="button" class="btn btn-warning" id="dinprint" value="Print Full Recipe">';
    overview += ' </div> </div>';

    dinnerOverview.empty();
    shown.innerHTML = overview;
    dinnerOverview.append(shown);


    //Find the menu dishes and their total price
    var showingmenudishes = container.find("#allofthemenu");

    //Display the full menu
    //var fullMenu = function(menu){
    var menu = model.getFullMenu();
    var whatisshown = [];
    for(var i in menu){
      var allfood = document.createElement("div");
      var food = '<div class="littledishes" id="food'+i+'"><img src="'+menu[i].image +'"<span id="menuName"><h3>'+menu[i].title+'   </h3></span>';
      food+= '<span id="foodcost">'+ menu[i].pricePerServing + ' kr</span></div>';

      showingmenudishes.empty(); //This will make only the last dish append
      allfood.innerHTML = food;
      whatisshown.push(allfood);
      for(var j in whatisshown){
      showingmenudishes.append(allfood);}
    }}}
>>>>>>> 76fd7e8e92903956c8e0f13b10008fd508658e26
