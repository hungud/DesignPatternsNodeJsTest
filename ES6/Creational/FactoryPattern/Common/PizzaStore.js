/*
Lớp factory base
*/

class PizzaStore {

    createPizza() {
        throw new Error("This method must be overwrittern!");
    }

    orderPizza(type) {

        let pizza = this.createPizza(type);

        // chuẩn bị
        pizza.prepare();
        // nướng
        pizza.bake();
        // cắt
        pizza.cut();
        // đóng hộp
        pizza.box();

    }

}

export default PizzaStore;