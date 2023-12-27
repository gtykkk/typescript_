var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var 학생 = {
    name: 'kim'
};
var 선생 = {
    name: 'kim',
    age: 20
};
// rest parameter 파라미터가 무한히 들어올 수 있다.
// function 함수(...a: (number | string | boolean)[]) {
// console.log(a);
// }
// 함수(1, 5, 6, 2, 3, 2, true);
var arr = [1, 2, 3];
var arr2 = [4, 5];
// arr 왼쪽에 ...이 붙을 경우에는 arr을 벗기는 것과 같다.
// 아래는 1, 2, 3, 4, 5가 남는다.(spread operator)
var arr3 = __spreadArray(__spreadArray([], arr, true), arr2, true);
// desturcturing //
var arrr = ['안녕', 100];
// let 변수 = arrr[0];
// let 변수2 = arrr[1];
// 위와 같이 변수에 따로 저장할 필요없이 변수 선언할 때 변수에 저장할 수 있다.
var _a = ['안녕', 100], 변수1 = _a[0], 변수2 = _a[1];
// object 자료형에도 적용 가능
// 자료형과 변수명이 같을 경우 생략 가능
var _b = { student: true, age: 20 }, student = _b.student, age = _b.age;
// let { student , age } = { student : true, age : 20 };
var 오브젝트 = { student: true, age: 20 };
function disturcturing(_a) {
    var student = _a.student, age = _a.age;
    // console.log(student, age);
}
disturcturing({ student: true, age: 20 });
// 숫자를 여러개 입력하면 최대값을 리턴해주는 함수
function 최대값() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    var 최대 = 0;
    for (var i = 0; i < a.length; i++) {
        if (a[i] > 최대) {
            최대 = a[i];
        }
    }
    // console.log(최대);
}
최대값(15, 2, 3, 4, 6, 1, 10);
// function 함수([변수1, 변수2, 변수3] : array) {
//     console.log(변수1, 변수2, 변수3);
// }
// 함수 ( [ 40, 'wine', false ]);
