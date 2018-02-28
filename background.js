chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.executeScript(null, { file: 'vendor/FileSaver.js', runAt: 'document_end' });
    chrome.tabs.executeScript(null, { file: 'vendor/html2canvas.js', runAt: 'document_end' });
    chrome.tabs.executeScript(null, { file: 'snapshot.js', runAt: 'document_end' });
});