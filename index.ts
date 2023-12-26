type Animal = {
    name: string
}

type Cat = {
    age: number
} & Animal

interface Student {
    name: string
}

interface Teacher extends Student {
    age: number
}

let 학생: Student = {
    name: 'kim'
}

let 선생: Teacher = {
    name: 'kim',
    age: 20
}
// rest parameter 파라미터가 무한히 들어올 수 있다.
// function 함수(...a: (number | string | boolean)[]) {
    // console.log(a);
// }

// 함수(1, 5, 6, 2, 3, 2, true);

let arr = [1, 2, 3];
let arr2 = [4, 5];
// arr 왼쪽에 ...이 붙을 경우에는 arr을 벗기는 것과 같다.
// 아래는 1, 2, 3, 4, 5가 남는다.(spread operator)
let arr3 = [...arr, ...arr2];

// desturcturing //
let arrr = ['안녕', 100];
// let 변수 = arrr[0];
// let 변수2 = arrr[1];
// 위와 같이 변수에 따로 저장할 필요없이 변수 선언할 때 변수에 저장할 수 있다.
let [변수1, 변수2] = ['안녕', 100];

// object 자료형에도 적용 가능
// 자료형과 변수명이 같을 경우 생략 가능
let { student: student, age: age } = { student: true, age: 20 };
// let { student , age } = { student : true, age : 20 };
let 오브젝트 = { student : true, age : 20 };

function disturcturing({ student, age } : { student : boolean, age: number }) {
    // console.log(student, age);
}

disturcturing({ student : true, age : 20 });

// 숫자를 여러개 입력하면 최대값을 리턴해주는 함수
function 최대값(...a : number[]) {
    let 최대 : number = 0;
    for(let i = 0; i < a.length; i++) {
        if(a[i] > 최대) {
            최대 = a[i];
        }
    }
    // console.log(최대);
}

최대값(15, 2, 3, 4, 6, 1, 10);

// object 자료를 파라미터로 입력할 수 있는 함수 만들기
// 함수( { user : 'kim', comment : [3, 5, 4], admin : false } )
// type UserType = {
//     user : string,
//     comment : number[],
//     admin : boolean
// }

// function 함수( { user, comment, admin } : UserType ) : void {
//     console.log(user, comment, admin);
// }

// 함수( { user : 'kim', comment : [3, 5, 4], admin : false } );

// array 자료를 파라미터로 입력할 수 있는 함수 만들기
// 함수 ( [40, 'wine', false ])
type array = (number | string | boolean)[];

function 함수([변수1, 변수2, 변수3] : array) {
    console.log(변수1, 변수2, 변수3);
}

함수 ( [ 40, 'wine', false ]);
