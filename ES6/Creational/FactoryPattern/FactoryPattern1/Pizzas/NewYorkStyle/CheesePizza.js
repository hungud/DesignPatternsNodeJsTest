import BasicPizza from './BasicPizza.js';

class CheesePizza extends BasicPizza {

    constructor(){

        super({

            name: 'Pizza phô mai đậm phong cách kiểu Chicago',
            dough: 'Bột siêu mỏng',
            sauce: 'Sốt cà chua mận',
            toppings: ['Phô mai Mozzarella cắt nhỏ']

        });

    }

}

export default CheesePizza;