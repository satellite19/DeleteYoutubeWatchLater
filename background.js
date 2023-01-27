// background.js
// "background": {
//   "service_worker": "background.js"
// },
let color = '#3aa757';
console.log("background start");


chrome.runtime.onSuspend.addListener(() => {
  console.log("Unloading.");
  chrome.browserAction.setBadgeText({text: ""});
});
// chrome.action.onClicked.addListener((tab) => {
//   chrome.scripting.executeScript({
//     target: { tabId: tab.id },
//     files: ['content-script.js']
//   });
// });

// chrome.action.onClicked.addListener((tab) => {
//   chrome.scripting.executeScript({
//     target: {tabId: tab.id},
//     func: contentScriptFunc,
//     args: ['action'],
//   });
// });
//
// function contentScriptFunc(name) {
//   alert(`"${name}" executed`);
// }

// This callback WILL NOT be called for "_execute_action"
chrome.commands.onCommand.addListener((command) => {
  console.log(`Command "${command}" called`);
});

window.addEventListener("keydown", async(e) => {
  console.log(e);
  console.log(e.key);
  if(e.keyCode == 83){
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: deleteWatchLater,
    });
  }
});


function deleteWatchLater() {
  var pageLegnth = document.querySelectorAll("ytd-menu-service-item-renderer").length;

  if(pageLegnth == 2){
    document.querySelectorAll("ytd-menu-service-item-renderer")[1].click();

  }else if(pageLegnth == 5){
    document.querySelectorAll("ytd-menu-service-item-renderer")[2].click();
  }
}
