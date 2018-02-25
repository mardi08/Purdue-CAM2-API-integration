function move() {
    var elem = document.getElementById("progressBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
            showInfoButton();
            showProgressInfo();
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }

}

function checkButton(){
  document.getElementById("nextButton").onclick = showProgressInfo();
}

function showProgressInfo(){
  document.getElementById("progressDetails").innerHTML = "Success . . .";

}

function showInfoButton(){
  document.getElementById("nextButton").innerHTML = "Access my Client Information";
  document.getElementById("nextButton").onclick = function(){
    location.href = "ClientInfoPage.html";
  }
}

function gotoProgressLoad(){
  location.href = "progress.html";
}
