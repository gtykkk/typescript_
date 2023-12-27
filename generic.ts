function func(x: unknown[]) {
    return x[0];
}

let a = func([4, 2]);

// 아래와 같이 타입이 애매하여 에러가 날 경우 narrowing이나 as를 사용할 수 있지만, 귀찮을 경우
// console.log(a + 1);

// Generic 함수(파라미터로 타입을 입력하는 함수)를 만들어 사용한다.
// 장점은 확장성이 조금 더 있다.
function fun<MyType>(x : MyType[]) : MyType {
    return x[0];
}

let b = fun<number>([4, 3]);
let c = fun<string>(['4', '2']);
console.log(b);
console.log(c);

// 숫자를 집어넣으면 -1 해주는 함수
function minus<MyType extends number>(x: MyType) {
    // MyType에 어떤 글자가 들어올지 몰라서 에러가 나기 때문에 narrowing, as, extends하여 타입파라미터 제한을 둔다.
    return x - 1;
}

let d = minus<number>(30);


// 커스텀 타입 파라미터 넣을 수 있음
interface LengthCheck {
    length : number
}

function leng<MyType extends LengthCheck>(x: MyType) {
    // MyType에 어떤 글자가 들어올지 몰라서 에러가 나기 때문에 narrowing, as, extends하여 타입파라미터 제한을 둔다.
    return x.length;
}

// class에도 타입 파라미터 넣을 수 있음