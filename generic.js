function func(x) {
    return x[0];
}
var a = func([4, 2]);
// 아래와 같이 타입이 애매하여 에러가 날 경우 narrowing이나 as를 사용할 수 있지만, 귀찮을 경우
// console.log(a + 1);
// Generic 함수(파라미터로 타입을 입력하는 함수)를 만들어 사용한다.
// 장점은 확장성이 조금 더 있다.
function fun(x) {
    return x[0];
}
var b = fun([4, 3]);
var c = fun(['4', '2']);
console.log(b);
console.log(c);
// 숫자를 집어넣으면 -1 해주는 함수
function minus(x) {
    // MyType에 어떤 글자가 들어올지 몰라서 에러가 나기 때문에 narrowing, as, extends하여 타입파라미터 제한을 둔다.
    return x - 1;
}
var d = minus(30);
function leng(x) {
    // MyType에 어떤 글자가 들어올지 몰라서 에러가 나기 때문에 narrowing, as, extends하여 타입파라미터 제한을 둔다.
    return x.length;
}
// class에도 타입 파라미터 넣을 수 있음
