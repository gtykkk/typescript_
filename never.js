// never 사용하기 위해서는
// 1. return 값이 없어야함
// 2. endpoint가 없어야함
// 대부분 쓸 데 없음 void로 대체 가능
function 함수(parameter) {
    // endpoint가 없으려면 아래와 같이 한다.
    /*
    throw new Error();
    while(true) {}
    */
    if (typeof parameter == 'string') {
        console.log(parameter);
    }
    else {
        console.log(parameter); // type narrowing을 할 필요가 없기 때문에 never 강제부여
    }
}
// 함수 표현식은 return 타입이 자동으로 never가 나온다.
var 함수수 = function () {
    throw new Error();
};
