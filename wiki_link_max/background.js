chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
      id: "getImageLink",
      title: "Get Image Latex",
      contexts: ["image"]
    });
  });


chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === "complete") {
        const title = tab.title;
        if (title.includes("{\\displaystyle")) {
            chrome.tabs.remove(tabId);
            console.log(title);
            let url = 'https://pupinos.pupin.fr/wiki_link_max/popup.html?id=' + encodeURIComponent(title);
            chrome.tabs.create({ url: url});
        }
    }
});


  chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "getImageLink") {
        chrome.tabs.create({ url: info.srcUrl });
    }
  });
  
