function createNewTab() {
  const url = chrome.runtime.getURL("https://github.com");
  chrome.tabs.create({ url });
}

function handleInstalled(details) {
  if (details.reason === "install") createNewTab();
  console.log(details);
}

chrome.runtime.onInstalled.addListener(handleInstalled);
chrome.runtime.setUninstallURL("https://github.com");
