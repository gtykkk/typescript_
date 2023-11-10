type 함수타입1 = (a: string) => string;
type 함수타입2 = (a: string) => number;

function 만든함수(a, func1, func2) {
    let result = func1(a);
    let result2 = func2(result);
    console.log(result2);
}

function cutZero(str: string): string {
    return str.replace(/^0/, '');
}

function removeDash(str: string): string {
    return str.replace(/-/g, '');
}

만든함수('010-1111-2222', cutZero, removeDash);