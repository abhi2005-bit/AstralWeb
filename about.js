const quoteText = `"The cosmos is within us. We are made of star-stuff. We are a way for the universe to know itself." — Carl Sagan`;
const quoteElement = document.getElementById('quote');
let index = 0;

function typeWriter() {
  if (index < quoteText.length) {
    quoteElement.innerHTML += quoteText.charAt(index);
    index++;
    setTimeout(typeWriter, 50);
  }
}

window.onload = typeWriter;
