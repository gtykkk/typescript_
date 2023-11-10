var Car = /** @class */ (function () {
    function Car(차종, 가격) {
        this.model = 차종,
            this.price = 가격;
    }
    Car.prototype.tax = function () {
        return this.price / 10;
    };
    return Car;
}());
var car1 = new Car('소나타', 3000);
console.log(car1);
console.log(car1.tax());
