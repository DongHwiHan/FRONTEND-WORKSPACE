function test(){
    window.alert("exteranl 테스트")
}

let lastBtn = document.getElementById("lastBtn");

lastBtn.onclick = test;