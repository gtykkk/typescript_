function 클리닝함수(x) {
    var 클리닝완료 = [];
    x.forEach(function (b) {
        if (typeof b === 'string') {
            클리닝완료.push(parseFloat(b));
        }
        else {
            클리닝완료.push(b);
        }
    });
    return 클리닝완료;
}
console.log(클리닝함수(['1', 2, '3']));
