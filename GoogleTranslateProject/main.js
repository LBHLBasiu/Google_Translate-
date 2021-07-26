// Element nodes
const toTranslateBox = document.querySelector(".to-translate-textarea");
const translateButton = document.querySelector(".to-translate-textarea + button");
const translatedBox = document.querySelector(".translated-textarea");
const translateToSelect = document.querySelector(".translate-to-select");
const translateFromSelect = document.querySelector(".translate-from-select");

translateButton.addEventListener("click", function () {
  if (!toTranslateBox.value) {
    alert("No text to translate!");
  } else {
    translateText(toTranslateBox.value)
  }
});

function grabTranslatedText(body) {
  return body.data.translations[0].translatedText;
}

function grabSelectedToLanguage() {
  const selectedIndex = translateToSelect.options.selectedIndex;
  return translateToSelect.options[selectedIndex].value;
}

function grabSelectedFromLanguage() {
  const selectedIndex = translateFromSelect.options.selectedIndex;
  return translateFromSelect.options[selectedIndex].value;
}

function translateText(text) {
  const data = {
    q: text,
    source: grabSelectedFromLanguage(),
  	target: grabSelectedToLanguage()
  };
  fetch(
    "https://translation.googleapis.com/language/translate/v2?key=AIzaSyBmQXJSb9yBkRVJElqWMw0WwOAzRz4dWSQ",
    {
      method: "POST",
      body: JSON.stringify(data)
    }
  ) // Promise
  .then(response => response.json())
  .then(body => {
    const translatedText = grabTranslatedText(body);
    translatedBox.value = translatedText;
  });
}
