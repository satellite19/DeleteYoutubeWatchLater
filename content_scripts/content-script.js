//document.body.style.backgroundColor = 'orange';
window.addEventListener("keydown", deleteWatchLater);


function deleteWatchLater(keydown) {
  if(keydown.keyCode == 81){
    let validTextKorean = decodeURI("%EC%82%AD%EC%A0%9C");
    let validTextList = ["Remove", validTextKorean];
    let menuArr = document.querySelectorAll("ytd-menu-service-item-renderer yt-formatted-string");
    let isDelete = false;

    for(e of menuArr){
      for(validText of validTextList){
        if(e.innerText.indexOf(validText) > -1) {
          isDelete = true;
          break;
        }
      }
      if(isDelete) {
        // console.log("Your youtube playlist has been removed");
        return e.click();
      }
    }
  }
}
