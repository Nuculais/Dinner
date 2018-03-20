//Sidebar Dish View

var SidebarDishView = function (container, model, app) {

      this.dinconfirm = container.find('#dinconfirm');
      this.plusGuest = container.find('#plusGuest');
      this.minusGuest = container.find('#minusGuest');
      this.guests = container.find('#guests');
      this.totalcost = container.find('#totalcost');

      //Observer pattern
      model.addObserver(this);
      this.Update = function(what){


        if(what == "guestsnum")
        {
          container.find("#numberOfGuests").html(model.getNumberOfGuests());
          container.find("#totalcost").html("SEK "+ model.getTotalMenuPrice());
        }
        else if(what == "addDish")
        {
          container.find("#totalcost").html("SEK "+ model.getTotalMenuPrice());
        }
        else if(what == "removeDish")
        {
          container.find("#totalcost").html("SEK "+ model.getTotalMenuPrice());
        }
      }

  }
