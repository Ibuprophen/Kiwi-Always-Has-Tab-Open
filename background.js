chrome.tabs.onRemoved.addListener(() => {
  chrome.tabs.query({currentWindow: true}, (tabs) => {
    console.log(tabs);

    if( tabs.length === 1 ){
      chrome.tabs.create({
        url: 'chrome://newtab',
        active: false,
      })
    }
  })
})

