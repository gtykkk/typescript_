function 만든함수(a, func1, func2) {
    var result = func1(a);
    var result2 = func2(result);
    console.log(result2);
}
function cutZero(str) {
    return str.replace(/^0/, '');
}
function removeDash(str) {
    return str.replace(/-/g, '');
}
만든함수('010-1111-2222', cutZero, removeDash);
