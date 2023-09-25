// 이미지 변경
function changeImage(newImageSrc) {
const mainImage = document.getElementById('mainImage').querySelector('img');    
mainImage.src = newImageSrc;
}
// 숫자 변경 (웹)
document.addEventListener("DOMContentLoaded", function () {

var spanElement = document.querySelector(".fa-solid.fa-heart span");    

var currentNumber = 24;
spanElement.textContent = currentNumber.toString();

spanElement.addEventListener("click", function () {
if (currentNumber === 24) {
currentNumber = 25;    
} else {
currentNumber = 24;    
}

spanElement.textContent = currentNumber.toString();
});
});

// 숫자 변경 (모바일)
document.addEventListener("DOMContentLoaded", function () {
// HTML 요소를 가져옵니다.    
var button = document.querySelector(".subscription_btn_mobile");
var span = document.querySelector(".subscription_btn_heart");

// 초기값 설정
var currentNumber = 24;

// 초기 텍스트 설정
span.textContent = currentNumber.toString();

// 클릭 이벤트를 추가합니다.
button.addEventListener("click", function () {
// 현재 숫자를 확인하고 토글합니다.    
if (currentNumber === 24) {
currentNumber = 25;    
} else {
currentNumber = 24;    
}
// 텍스트를 업데이트합니다.
span.textContent = currentNumber.toString();
});
});

//  글 펼치고 접기
function collapse(element) {
var before = document.getElementsByClassName("active")[0]               // 기존에 활성화된 버튼
// if (before && document.getElementsByClassName("active")[0] != element) {  // 자신 이외에 이미 활성화된 버튼이 있으면
//     before.nextElementSibling.style.maxHeight = null;   // 기존에 펼쳐진 내용 접고
//     before.classList.remove("active");                  // 버튼 비활성화
// }
element.classList.toggle("active");         // 활성화 여부 toggle

var content = element.nextElementSibling;
if (content.style.maxHeight != 0) {         // 버튼 다음 요소가 펼쳐져 있으면
content.style.maxHeight = null;         // 접기
} else {    
content.style.maxHeight = content.scrollHeight + "px";  // 접혀있는 경우 펼치기    
}
}

// 수강신청 확인 팝업

window.addEventListener("load",function(){
/// 모달 열기
document.getElementById('subscribeButton').addEventListener('click', function() {
    var overlay = document.getElementById('overlay');
    var popup = document.getElementById('confirmationPopup');
    overlay.style.display = 'block';
    popup.style.display = 'block';
});

// 모달 닫기
document.getElementById('closeButton').addEventListener('click', function() {
    var overlay = document.getElementById('overlay');
    var popup = document.getElementById('confirmationPopup');
    overlay.style.display = 'none';
    popup.style.display = 'none';
});

// 배경 클릭 시 모달 닫기
document.getElementById('overlay').addEventListener('click', function() {
    var overlay = document.getElementById('overlay');
    var popup = document.getElementById('confirmationPopup');
    overlay.style.display = 'none';
    popup.style.display = 'none';
});
})