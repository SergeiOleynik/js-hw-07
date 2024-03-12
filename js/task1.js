
alert(`  Завдання 1:
 Розстав відсутні "this" в методах об'єкта "account"
const account = {
    owner: "Mango",
    balance: 24000,
    discount: 0.1,
    orders: ["order-1", "order-2", "order-3"],
    changeDiscount(value) {
      discount = value;
    },
    showOrders() {
      return orders;
    },
    addOrder(cost, order) {
      balance -= cost;
      orders.push(order);
    },
  };`
  
  );

alert(`fix: :) :) :)       
  const account = {
    owner: "Mango",
    balance: 24000,
    discount: 0.1,
    orders: ["order-1", "order-2", "order-3"],
    changeDiscount(value) {
      this.discount = value;
    },
    showOrders() {
      return this.orders;
    },
    addOrder(cost, order) {
      this.balance -= cost;
      this.orders.push(order);
    },
  };`
);


const account = {
  owner: "Mango",
  balance: 24000,
  discount: 0.1,
  orders: ["order-1", "order-2", "order-3"],
  
  changeDiscount(value) {
    this.discount = value;
  },

  showOrders() {
    return this.orders;
  },
  
  addOrder(cost, order) {
    this.balance -= cost;
    this.orders.push(order);    
  },
};

account.changeDiscount(0.15);
alert(` exit: :) :) :)   
    account.changeDiscount(0.15); = ${account.discount}
    account.showOrders() = ${account.showOrders()}
    account.addOrder(5000, "order-4") ${account.addOrder(5000, "order-4")}
    account.balance = ${account.balance}
    account.showOrders() = ${account.showOrders()}
`);
