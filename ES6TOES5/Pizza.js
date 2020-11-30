/*
Lớp product base
*/
class Pizza {
    constructor({ name ='', dough = '', sauce = '', toppings = [] }){
        this.name = name;
        this.dough = dough;
        this.sauce = sauce;
        this.toppings = toppings;
    }

    prepare(){

        console.log('Đang chuẩn bị ' + this.name);
        console.log('Nhào bột...');
        console.log('Thêm nước xốt');
        console.log('Thêm các lớp ăn kèm:');

        for (let topping of this.toppings){

            console.log(topping + "  ");

        }
    }

    bake(){
        console.log('Nướng trong 25 phút ở 350 độ');
    }

    cut(){
        console.log('Cắt bánh Pizza thành các lát chéo');
    }

    box(){
        console.log('Đặt pizza trong hộp PizzaStore chính thức');
    }

    getName(){
        return this.name;
    }

}

export default Pizza;