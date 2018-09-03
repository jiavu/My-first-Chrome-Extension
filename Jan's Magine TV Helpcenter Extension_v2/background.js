chrome.runtime.onMessage.addListener(function(message) {
    
    chrome.tabs.query( {
        currentWindow: true,
        active : true},
        function(tabs){ window.alert(tabs.id) }
      )
       
    if (message.close) {
        chrome.tabs.remove(/*ID*/);
    };
});

// HOW DO I GET THE ID OF THE ACTIVE TAB??????

// https://developer.chrome.com/extensions/tabs#method-remove