import BasicPizza from './BasicPizza.js';

class VeggiePizza extends BasicPizza {

    constructor(){

        super({

            name: 'Pizza Veggue phô mai đậm phong cách kiểu Chicago',
            dough: 'Bột vỏ siêu mỏng',
            sauce: 'Sốt cà chua mận',
            toppings: ['Phô mai Mozzarella cắt nhỏ', 'Paprika', 'Cà chua', 'Đậu']

        });

    }

}

export default VeggiePizza;