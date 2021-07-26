setTimeout(FadeInElements, 600);

function FadeInElements() {
  const fadedElements = document.querySelectorAll(".faded");
  for (const element of fadedElements) {
    element.classList.remove("faded");
    element.classList.add("fade-in");
  }
}

// grab all elements with 'faded class'
// loop through all those elements
// remove 'faded' class from elements and add 'fade-in' class
// done
