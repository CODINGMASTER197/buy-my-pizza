menu_list_array = [ "Veg Margherita Pizza",                  
                   "Cheese n Corn","Veggie Paradise","Pepper Barbecue Chicken","Chicken Sausage","The Unthinkable Pizza","Indo Fusion Chicken Pizza","Chicken Maximus","The 5 Chicken Feast Pizza","The 4 Cheese Pizza","Chicken Keema Paratha Pizza","The Cheese Dominator","Creamy Tomato Pasta Pizza - Veg","Paneer Paratha Pizza","Margherita","Double Cheese Margherita","Farmhouse","Mexican Green Wave","Deluxe Veggie","Indi Tandoori Paneer","Cheese n Tomato"                                   ]; //Add more Pizza item names

function getmenu()
{
    var htmldata="";
    for(var i=0; i<menu_list_array.length; i++)
    {
        htmldata=htmldata+ menu_list_array[i] + '<br>'
    }
    //Give the appropriate id name as display_menu 
    document.getElementById("display_menu").innerHTML = htmldata;
}

function add_suggestion(){
    //Give the appropriate id name as add_item
	var item = document.getElementById("add_item").value;
    //Use the push() function to push the item into menu_list_array
    menu_list_array.push(item);
}

