let spoofUserAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36";

function rewriteUserAgentHeader(e) {
  let url = new URL(e.url);
  
  // Retrieve the whitelist from local storage
  chrome.storage.local.get('whitelist', function(result) {
    let whitelist = result.whitelist || [];
  
    if (!whitelist.includes(url.hostname)) {
      for (var header of e.requestHeaders) {
        if (header.name.toLowerCase() === "user-agent") {
          header.value = spoofUserAgent;
        }
      }
    }
  });
  
  return {requestHeaders: e.requestHeaders};
}

chrome.webRequest.onBeforeSendHeaders.addListener(
  rewriteUserAgentHeader,
  {urls: ["<all_urls>"]},
  ["blocking", "requestHeaders"]
);
