import BasicPizza from './BasicPizza.js';

class PepperoniPizza extends BasicPizza {

    constructor() {

        super({

            name: 'Pizza Pepperoni phô mai đậm phong cách kiểu Chicago',
            dough: 'Bột siêu mỏng',
            sauce: 'Sốt cà chua mận',
            toppings: ['Phô mai Mozzarella cắt nhỏ', "Pepperoni"]

        });

    }

}

export default PepperoniPizza;