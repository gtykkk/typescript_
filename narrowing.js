function narrowing(a) {
    // 아래 a는 undefined나 null이면 if문을 실행하지 않는 것
    if (a && typeof a === 'string') {
    }
}
function 동물(animal) {
    // object narrowing을 하기 위해서는 in 키워드를 사용
    // in 키워드를 사용하기 위해서는 배타적인 속성을 갖고 있어야함
    // 속성명 in 오브젝트자료
    // instanceof 연산자로 object narrowing 가능(부모 class)
    if ('swim' in animal) {
        animal.swim;
    }
}
var 날짜 = new Date();
if (날짜 instanceof Date) {
    // 처럼 사용
}
function vihicle(x) {
    if (x.wheel == '4개') {
        console.log('x는 Carr 타입이에요');
    }
    else if (x.wheel == '2개') {
        console.log('x는 Bike 타입이에요');
    }
}
