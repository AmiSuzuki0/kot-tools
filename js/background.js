// Generated by CoffeeScript 1.8.0

chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ["js/content_scripts/inspect_element.js"],
    });
});
