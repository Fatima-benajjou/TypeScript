let orderIdCounter = 1;
function createOrder(customer, items) {
    const newOrder = {
        id: orderIdCounter.toString(),
        customer,
        items,
        status: "en attente"
    };
    return newOrder;
}
const customer1 = { id: "1", name: "Salut çava", email: "blbalballaaa" };
const customer2 = { id: "2", name: "ça va et toi", email: "fegregzrgr" };
const product1 = { id: "1", name: "prod1'", price: 100, stock: 10 };
const product2 = { id: "2", name: "prod2", price: 12, stock: 20 };
const order1 = createOrder(customer1, [{ product: product1, quantity: 6 }, { product: product2, quantity: 2 }]);
const order2 = createOrder(customer2, [{ product: product2, quantity: 2 }]);
export {};
