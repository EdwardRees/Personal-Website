class Cart {
  constructor() {
    this.cart = [];
  }

  addGrocery(grocery) {
    this.cart.push(grocery);
  }

  getCart() {
    return this.cart;
  }

  getCartSize(){
      return this.cart.length;
  }

  updateListOfGroceryNames() {
    var cart = this.getCart();
    var items = $("#items");
    var itemTitle = $("#itemTitle");
    items.empty();
    itemTitle.empty();
    itemTitle.append("List of Items: <span>" + cart.length + "</span>")
    for (var x of cart) {
      items.append("<li class='col-lg-3'> " + x.getDetails() + "</li>");
    }
  }

  printListOfGroceryNames() {
    var cart = this.getCart();
    for (var x of cart) {
      console.log(x);
    }
  }

  removeItemByName(name) {
    const cart = this.getCart();
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].getName() == name) {
        delete cart[i];
        cart.splice(i, 1);
      }
      continue;
    }
  }

  updateValue(name, quantity) {
    const c = this.getCart();
    for (let i = 0; i < c.length; i++) {
      if (c[i].getName() == name) {
        c[i].setQuantity(quantity);
      }
      continue;
    }
  }

  clear() {
    const cart = this.getCart();
    for (let i = 0; i < cart.length; i++) {
      cart.splice(i, cart.length);
    }
    //   for(let c of cart){
    //     //   this.removeItemByName(c.getName());
    //   }
  }
}

class Item {
  constructor(name = "", id = Math.floor(Math.random() * 100)) {
    this.name = name;
    this.id = id;
  }

  getName(){
      return this.name;
  }

  getID(){
      return this.id;
  }
}

class Grocery extends Item {
  constructor(name = "", quantity = 0, id = Math.floor(Math.random() * 100)) {
    super(name, id);
    this.quantity = quantity;
  }

  getName() {
    return super.getName();
  }

  getID(){
      return super.getID();
  }

  getQuantity() {
    return this.quantity;
  }

  setQuantity(quantity) {
    this.quantity = quantity;
  }

  getDetails() {
    return this.getQuantity() + " " + super.getName();
  }
}

function test() {
  var cart = new Cart();
  cart.addGrocery(new Grocery("Cup", 1, 0));
  cart.addGrocery(new Grocery("Coffee Beans", 10, 1));
  cart.addGrocery(new Grocery("Apple", 5, 2));
  cart.printListOfGroceryNames();
  cart.removeItemByName("Cup");
  cart.printListOfGroceryNames();
  cart.updateValue("Apple", 10);
  cart.printListOfGroceryNames();
  cart.clear();
  cart.printListOfGroceryNames();
  console.log();
  cart.addGrocery(new Grocery("Coffee Beans", 10, 8));
  cart.printListOfGroceryNames();
}

// test();
