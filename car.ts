class Car {
    model: string;
    price: number;
    constructor(차종: string, 가격: number) {
        this.model = 차종,
        this.price = 가격
    }

    tax() {
        return this.price / 10;
    }
}

let car1 = new Car('소나타', 3000);
console.log(car1)
console.log(car1.tax())