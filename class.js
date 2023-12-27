// public 키워드
// - 모든 자식들이 이용 가능하다.
// - 있으나 없으나 같음, 생략 시 항상 부여되어 있다.
// - 당연히 함수에도 사용 가능하다.
// private 키워드
// - class 안에서만 수정, 이용가능
// - 상속불가능
// protected 키워드
// - class 안에서만 사용가능
// - 상속가능
// static 키워드
// - 부모 class에 직접 부여됨(상속 시 사라짐)
// - 부모 class가 User고 static이 붙은 변수가 x라면 User.x로 사용이 가능
// - 위의 세가지 키워드 뒤에 static이 붙을 수 있다.
// class User {
//     public name: string;
//     // 맘대로 변경할 수 없도록 private를 사용
//     // 데이터를 외부로부터 보호하고 싶을 때 사용한다.
//     private familyName: string = '김';
//     constructor(a) {
//         this.name = this.familyName + a;
//     }
//     // 자식들이 familyName을 바꾸고 싶으면
//     // 1. class 안에 familyName 변경함수 작성
//     이름변경함수() {
//         this.familyName = '박';
//     }
// }
// let 유저1 = new User('민수');
// 유저1.이름변경함수();
// console.log(유저1);
// class Person {
//     // public 키워드 쓰면 this.어쩌구 생략이 가능하다.
//     constructor(public name) {
//     }
// }
// let 자식 = new Person('김');
// console.log(자식);
var User = /** @class */ (function () {
    function User() {
        this.intro = User.skill + ' 전문가입니다';
    }
    User.skill = 'js';
    return User;
}());
var 철수 = new User();
console.log(철수);
User.skill = 'ts';
var 철수2 = new User();
console.log(철수2);
