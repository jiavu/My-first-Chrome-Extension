let rule = {
    conditions: [
        new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { hostEquals: "https://help.magine.com/hc" }
        })
    ],
    actions: [] // new chrome.declarativeContent.ShowPageAction()   // but I currently use BrowserAction, not PageAction.
}

chrome.runtime.onInstalled.addListener(function(details) {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules( [rule] );
    });
});