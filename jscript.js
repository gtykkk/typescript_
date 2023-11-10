var 제목 = document.querySelector('#title');
var 링크 = document.querySelector('.link');
var 버튼 = document.querySelector('#button');
var 사진 = document.querySelector('#image');
var 구글 = document.querySelectorAll('.naver');
if (제목 instanceof HTMLHeadingElement) {
    제목.innerHTML = '반갑습니다.';
}
if (링크 instanceof HTMLAnchorElement) {
    링크.href = 'https://kakao.com';
}
버튼 === null || 버튼 === void 0 ? void 0 : 버튼.addEventListener('click', function () {
    console.log('안녕');
});
if (사진 instanceof HTMLImageElement) {
    // 사진.src = 'testt.jpg';
}
for (var i = 0; i < 구글.length; i++) {
    var 네이버 = 구글[i];
    if (네이버 instanceof HTMLAnchorElement) {
        네이버.href = 'https://www.google.com';
    }
}
