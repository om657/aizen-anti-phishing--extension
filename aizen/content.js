const knownPhishingDomains = [
  "phishingsite.com",
  "fake-login.net",
  "badsite.org"
];

const hostname = window.location.hostname.toLowerCase();

if (knownPhishingDomains.includes(hostname)) {
  alert("🚨 WARNING: This site is known for phishing!");
}

if (!window.location.protocol.startsWith("https")) {
  alert("⚠️ Warning: This site is not secure (no HTTPS)!");
}
