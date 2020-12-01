import PizzaStore from '../Common/PizzaStore.js';


const PIZZAS = {
    cheese: CheesePizza,
    veggie: VeggiePizza,
    clam: ClamPizza,
    pepperoni: PepperoniPizza
};


class ChicagoPizzaStore extends PizzaStore {


    createPizza(type){

        let PizzaConstructor = PIZZAS[type];
        let pizza = null;
        if (PizzaConstructor){
            pizza = new PizzaConstructor();
        }
        return pizza;

    }

}

export default ChicagoPizzaStore;
