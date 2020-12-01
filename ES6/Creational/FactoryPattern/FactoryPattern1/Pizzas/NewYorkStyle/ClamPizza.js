import BasicPizza from './BasicPizza.js';

class ClamPizza extends BasicPizza {

    constructor() {

        super({

            name: 'Pizza Clam phô mai đậm phong cách kiểu Chicago',
            dough: 'Bột siêu mỏng',
            sauce: 'Sốt cà chua mận',
            toppings: ['Phô mai Mozzarella cắt nhỏ', "Clams"]

        });

    }

}

export default ClamPizza;