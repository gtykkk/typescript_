// 타입스크립트 타입변수 숨기기 문법 namespace
// 옛날 버전은 module
// module 네임스페이스 {
//     export type Name = string | number;
// }

// namespace 네임스페이스 {
//     export type Name = string | number;
// }

// export type Name = number | string;

// let 변수: 네임스페이스.Name = 'kim';

// Car, Bike 타입을 만들었는데 너무 길어요
export type Car = {
    wheel : number;
    model : string;
}

export interface Bike {
    wheel : 2,
    model : string
}

// 너무 자주 쓰는 함수가 있다.
export type ObjFunction = (a? :object) => void

// type 중복이 너무 많이 발생하니까 namespace 사용해서 해결해
namespace 독 {
    export type Dog = string;
}
namespace 독독 {
    export interface Dog { name : string }
}

let dog1: 독.Dog = 'bark';
let dog2: 독독.Dog = { name : 'paw' };

