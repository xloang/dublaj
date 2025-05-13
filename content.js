// YouTube altyazılarını izle
const observer = new MutationObserver(() => {
  const subtitle = document.querySelector('.ytp-caption-segment');
  if (subtitle) {
    chrome.runtime.sendMessage({
      action: "translate",
      text: subtitle.textContent
    });
  }
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});