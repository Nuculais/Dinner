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
      var cost = model.getTotalMenuPrice();

        if(what == "guestsnum")
        {
          container.find("#numberOfGuests").html(model.getNumberOfGuests());
          if(cost == 0){
            container.find("#totalcost").html(0.00 + " kr");
          }
          else{
          container.find("#totalcost").html(cost + " kr");
        }
        }
        else if(what == "addDish")
        {
          container.find("#dishname").html(model.getCurrentDish().title);
          container.find("#totalcost").html(model.getCurrentDish().pricePerServing + " kr");
        }
        else if(what == "removeDish")
        {
          container.find("#totalcost").html(cost + " kr");
        }
      }

  }
