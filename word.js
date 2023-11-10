var Word = /** @class */ (function () {
    function Word() {
        var 가변인자 = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            가변인자[_i] = arguments[_i];
        }
        var 숫자들 = [];
        var 문자들 = [];
        가변인자.forEach(function (a) {
            if (typeof a === 'number') {
                숫자들.push(a);
            }
            else {
                문자들.push(a);
            }
        });
        this.num = 숫자들;
        this.str = 문자들;
    }
    return Word;
}());
var obj = new Word('kim', 3, 5, 'park');
console.log(obj.num);
console.log(obj.str);
