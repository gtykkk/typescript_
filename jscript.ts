let 제목 = document.querySelector('#title');
let 링크 = document.querySelector('.link');
let 버튼 = document.querySelector('#button');
let 사진 = document.querySelector('#image');
let 구글 = document.querySelectorAll('.naver');

if(제목 instanceof HTMLHeadingElement) {
    제목.innerHTML = '반갑습니다.'
}

if(링크 instanceof HTMLAnchorElement) {
    링크.href = 'https://kakao.com';
}

버튼?.addEventListener('click', function() {
    console.log('안녕');
});

if(사진 instanceof HTMLImageElement) {
    // 사진.src = 'testt.jpg';
}

for(let i = 0; i < 구글.length; i++) {
    let 네이버 = 구글[i]
    if(네이버 instanceof HTMLAnchorElement) {
        네이버.href = 'https://www.google.com';
    }
}