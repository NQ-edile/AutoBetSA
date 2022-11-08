chrome.tabs.onActivated.addListener(tab => {
    chrome.tabs.get(tab.tabId, current_tab_info => {
        if (/^https:\/\/www\.betway/.test(current_tab_info.url)) {
            chrome.scripting.executeScript({target: { tabId: tab.tabId }, files: ['./foreground.js']}, () => console.log('This is the background, cos I like to inject'));
        }
    });
});

// chrome.tabs.onActivated.addListener(tab => {
//     chrome.tabs.get(tab.tabId, current_tab_info => {
//         if (/^https:\/\/webiframe\.betgames/.test(current_tab_info.url)) {
//             chrome.scripting.executeScript({target: { tabId: tab.tabId }, files: ['./forefore.js']}, () => console.log('This is the forefore, cos I like to inject'));
//         }
//     });
// });

// chrome.scripting.executeScript(null, {files: ['./foreground.js']}, () => console.log('This is the background'));
console.log("From background");