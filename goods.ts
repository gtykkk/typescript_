interface PlusMinus {
    // plus(a: number, b: number): number,
    // minus(a: number, b: number): number,
    plus: (a:number, b: number) => void,
    minus: (a:number, b: number) => void
}

let 더하기빼기: PlusMinus = {
    plus(a, b) {
        console.log(a + b);
    },
    minus(a, b) {
        console.log(a - b);
    }
}

더하기빼기.plus(2, 3);
더하기빼기.minus(6, 2);