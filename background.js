  let tabCreated = null;
  chrome.tabs.onRemoved.addListener(() => {
    chrome.tabs.query({currentWindow: true}, (tabs) => {

      if( tabs.length === 0 ){
        chrome.tabs.create({ url: 'chrome-search://local-ntp/local-ntp.html', active: false, }, function(tab){
          tabCreated = tab;
        })
      }
    })
  })
