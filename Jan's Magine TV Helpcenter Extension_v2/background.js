chrome.runtime.onMessage.addListener(function(message) {
    
    /*
    if (message.close) {        // Thats not necessary. Backroundscript will be executed when contentscript sends a message.
    };
    */
    
    chrome.tabs.query(
        {
        currentWindow: true,
        active : true
        },
        function(tabs){
            tabs.forEach( tab => chrome.tabs.remove(tab.id) );
        }
    );
});

    
// https://developer.chrome.com/extensions/tabs#method-remove