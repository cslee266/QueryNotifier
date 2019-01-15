var options = {
  type: "basic",
  title: "代替月亮惩罚你!!",
  message: "动感波波",
  iconUrl: "images/icon.png"
};

var tabid = 0;

function callBack(){

}

chrome.runtime.onMessage.addListener(
    function(response, sender, sendResponse){
        if (response == 'trigger'){
            tabid = sender.tab.id;
            chrome.notifications.create("", options, function(notificationId) {
                setTimeout(function(){
                    chrome.notifications.clear(notificationId, function(){});
                }, 10000);
            })}
        // else if (response == 'clickedRN'){
        //     sendResponse(sender);
        //     chrome.tabs.update(tabid, {active: true});
        // }
    }
);

chrome.notifications.onClicked.addListener(function(notificationId, byUser) {
    // console.log(tabid);
    chrome.tabs.update(tabid, {active: true});
    // chrome.tabs.sendMessage(tabid, "callmeback", function(response) {});
});
