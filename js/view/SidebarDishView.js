//Sidebar Dish View

var SidebarDishView = function (container, model, app) {

      this.dinconfirm = container.find('#dinconfirm');
      this.plusGuest = container.find('#plusGuest');
      this.minusGuest = container.find('#minusGuest');
      this.guests = container.find('#guests');
      this.totalcost = container.find('#totalcost');
      this.dishname = container.find("#dishname");

      //Observer pattern
      model.addObserver(this);
      this.Update = function(what){
      var menu = model.getFullMenu();


        if(what == "guestsnum")
        {
          container.find("#numberOfGuests").html(model.getNumberOfGuests());
          if(model.getTotalMenuPrice() == 0){
            container.find("#totalcost").html(0.00 + " kr");
          }
          else{
          container.find("#totalcost").html(Math.floor(model.getTotalMenuPrice()) + " kr");
        }
        }
        else if(what == "addDish")
        {
          var thedishes = container.find("#dishname");
          thedishes.empty();

          for(var i=0; i<model.getFullMenu().length;i++){

            var allfood = document.createElement("div");
            var food = '<div id="food'+i+'"><span id="menuName"><p>'+ menu[i].title+ '</p></span></div>';

            allfood.innerHTML = food;
            thedishes.append(allfood);
          }
            container.find("#totalcost").html(Math.floor(model.getTotalMenuPrice()) + " kr");

        }
        else if(what == "removeDish")
        {
          var thedishes = container.find("#dishname");
          thedishes.empty();

          for(var i=0; i<model.getFullMenu().length;i++){

            var allfood = document.createElement("div");
            var food = '<div id="food'+i+'"><span id="menuName"><p>'+ menu[i].title+ '</p></span></div>';

            allfood.innerHTML = food;
            thedishes.append(allfood);
          }
          container.find("#totalcost").html(Math.floor(model.getTotalMenuPrice()) + " kr");
        }
      }

  }
