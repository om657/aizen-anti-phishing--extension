chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  const url = new URL(tabs[0].url);
  const domain = url.hostname.toLowerCase();

  const statusEl = document.getElementById("status");
  document.getElementById("url").innerText = domain;

  const blacklist = ["phishingsite.com", "fake-login.net", "badsite.org"];

  if (blacklist.includes(domain)) {
    statusEl.textContent = "🚨 Blacklisted!";
    statusEl.classList.add("blacklisted");
  } else if (!url.protocol.startsWith("https")) {
    statusEl.textContent = "⚠️ Suspicious: No HTTPS";
    statusEl.classList.add("suspicious");
  } else {
    statusEl.textContent = "✅ Safe";
    statusEl.classList.add("safe");
  }
});
