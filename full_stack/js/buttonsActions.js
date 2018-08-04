var cart = new Cart();
$("#add").click(function() {
  const name = $("#name").val();
  const quantity = $("#quantity").val();
  cart.addGrocery(new Grocery(name, quantity));

  cart.updateListOfGroceryNames();
  cart.printListOfGroceryNames();
});

$("#remove").click(function() {
  const name = $("#rname").val();
  cart.removeItemByName(name);

  cart.updateListOfGroceryNames();
  cart.printListOfGroceryNames();
});

$("#list").click(function() {
  cart.updateListOfGroceryNames();
  cart.printListOfGroceryNames();
});
