// MyMemory API ile çeviri
async function translate(text) {
  const API_KEY = "d3a9e7e231d91b76aac5"; // MyMemory'den aldığınız key
  const response = await fetch(
    `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|tr&key=${API_KEY}`
  );
  const data = await response.json();
  return data.responseData.translatedText;
}

// Mesajları dinle
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "translate") {
    translate(request.text).then(translation => {
      chrome.tts.speak(translation, { lang: "tr-TR" });
    });
  }
});