import { Order } from "./order.js";

export class OrderManager {
    orders : Order[] = [] ;

    addOrder (order : Order) : void {
        this.orders.push (order);
    }

    getOrderById (id: number) : Order | undefined {
        return this.orders.find(order =>order.id === id)
    }

    updateOrderStatus ( id: number, status : 'en attente' | 'expédiée' | 'livrée') : void {
        const order = this.getOrderById(id)
        if (order) {
            order.status = status;
        }
    }

    listOrderStatus (status:"en attente" | "expédiée" | "livrée") : Order [] {
        return this.orders.filter(order => order.status === status);
    }

    removeOrder(id : number) :void {
        this.orders = this.orders.filter(order => order.id !== id);
    }

}


  
  