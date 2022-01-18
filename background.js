let tabCreated = null;
var count = 0;

chrome.tabs.onRemoved.addListener(() => {
chrome.tabs.query({currentWindow: true}, (tabs) => {

  if( tabs.length === 0 && count === 0){
	count = 1;
	chrome.tabs.create({ url: 'chrome-search://local-ntp/local-ntp.html' }, function(tab){
	  tabCreated = tab;
	})
	setTimeout(function(){ count = 0; }, 500);
  }
})
})
