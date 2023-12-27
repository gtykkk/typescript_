// 옛날에는 아래와 같이 했음
// ///<reference path="./export.ts"/>
// let 변수: Name = 'park';
var car = {
    wheel: 2,
    model: '소나타'
};
var bike = {
    wheel: 2,
    model: '삼천리'
};
console.log(car);
console.log(bike);
var 함수 = function (a) {
    console.log(a);
};
함수({ abc: '안녕' });
export {};
