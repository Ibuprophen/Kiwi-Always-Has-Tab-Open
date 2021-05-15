try{
  let tabCreated = null;
  chrome.tabs.onRemoved.addListener(() => {
    chrome.tabs.query({currentWindow: true}, (tabs) => {
      console.log(tabs);

      if( tabs.length === 1 ){
        chrome.tabs.create({ url: 'chrome://newtab/', active: false, }, function(tab){
          tabCreated = tab;
          console.log("newly created tab is: ", tabCreated);
        })
      }
    })
  })

  chrome.tabs.onCreated.addListener((tab) => {
    if(tabCreated !== null && tab.id !== tabCreated.id){
      if(tabCreated.url === 'chrome://newtab/'){
        chrome.tabs.remove(tabCreated.id, () => console.log("removed tab"));
      }
    }
  });

  chrome.tabs.onUpdated.addListener((tabId, changeInfo, tabInfo) => {
    if(tabId === tabCreated.id)
      tabCreated = tabInfo;
  });
}catch(error){
  console.log(error);
}
