chrome.browserAction.onClicked.addListener((tab) => {
  fetch('https://airmap.g0v.asper.tw/json/airmap.json')
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      chrome.tabs.executeScript(tab.id, {
        code: `const AIRBOX_DATA = ${JSON.stringify(json)};`
      }, () => {
        chrome.tabs.executeScript(tab.id, { file: 'injection.js' });
      });
    })
    .catch((ex) => {
      console.log(ex);
    });
});
