// 옛날에는 아래와 같이 했음
// ///<reference path="./export.ts"/>

import { Car, Bike, ObjFunction } from './export'

// let 변수: Name = 'park';

let car: Car = {
    wheel : 2,
    model : '소나타'
};

let bike: Bike = {
    wheel : 2,
    model : '삼천리'
}

console.log(car);
console.log(bike);

let 함수: ObjFunction = function(a) {
    console.log(a);
}

함수({abc : '안녕'});