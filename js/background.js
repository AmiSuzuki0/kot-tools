// Generated by CoffeeScript 1.8.0
(function() {
  chrome.browserAction.onClicked.addListener(function(tab){
    chrome.tabs.getSelected(null, function(tab){
      chrome.tabs.executeScript(null, { file: "js/content_scripts/inspect_element.js" });
    });
  });

}).call(this);