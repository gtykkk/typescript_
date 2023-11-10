class Word {
    num: number[]
    str: string[]

    constructor(...가변인자: (number | string)[]) {
        let 숫자들: number[] = [];
        let 문자들: string[] = [];
        
        가변인자.forEach((a) => {
            if(typeof a === 'number') {
                숫자들.push(a);
            } else {
                문자들.push(a);
            }
        });
        this.num = 숫자들;
        this.str = 문자들
    }
}

let obj = new Word('kim', 3, 5, 'park');
console.log(obj.num);
console.log(obj.str);