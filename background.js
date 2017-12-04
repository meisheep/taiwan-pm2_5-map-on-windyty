const url = 'https://windy.com/';

chrome.browserAction.onClicked.addListener((activeTab) => {
  chrome.tabs.create({ url }, (tab) => {
    chrome.tabs.onUpdated.addListener((tabId, info) => {
      if (info.status === 'complete' && tabId === tab.id) {
        fetch('https://airmap.g0v.asper.tw/json/airmap.json')
          .then((response) => {
            return response.json();
          })
          .then((json) => {
            chrome.tabs.executeScript(tabId, {
              code: `const AIRBOX_DATA = ${JSON.stringify(json)};`
            }, () => {
              chrome.tabs.executeScript(tabId, { file: 'injection.js' });
            });
          })
          .catch((ex) => {
            alert('獲取資料時發生錯誤');
          });
      }
    });
  });
});
