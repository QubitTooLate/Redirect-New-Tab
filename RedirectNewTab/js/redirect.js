(() => {
    "use strict";
    try {
        chrome.tabs.getCurrent(tab => {
            chrome.tabs.update(tab.id, {
                "url": 'edge://favorites'
            });
        });
    } catch(e){
        console.error(e);
    }
})();