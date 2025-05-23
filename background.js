//Service Worker for Google Chrome Extension 
//Handles when extension is installed
//Handles when message is received



// console.log when extension is installed
chrome.runtime.onInstalled.addListener(() => {
    console.log('Extension installed');
});

// console.log when message is received
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log('Message received from popup:', request);
    if (request.action === 'getData') {
        // Handle the action here
        const data = { message: 'Hello from background script!' };
        sendResponse(data);
    }
});