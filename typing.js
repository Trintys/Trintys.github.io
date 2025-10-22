document.addEventListener("DOMContentLoaded", function () {
  const titleElement = document.getElementById("typed-title");
  const subtextElement = document.getElementById("typed-subtext");
  const subtextElement2 = document.getElementById("typed-subtext2");

  const titleText = "Hi, I am Triantafyllos";
  const subtextText = "Data Science & AI Master’s student at Eindhoven University of Technology (TU/e)";
  const subtextText2 = "24 years old · from Greece";

  let i = 0;
  let j = 0;
  let k = 0;

  // Type the title
  function typeTitle() {
    if (i < titleText.length) {
      titleElement.textContent += titleText.charAt(i);
      i++;
      setTimeout(typeTitle, 80);
    } else {
      setTimeout(typeSubtext, 400); // delay before typing the first subtext
    }
  }

  // Type the first subtext
  function typeSubtext() {
    if (j < subtextText.length) {
      subtextElement.textContent += subtextText.charAt(j);
      j++;
      setTimeout(typeSubtext, 30);
    } else {
      setTimeout(typeSubtext2, 300); // delay before typing the second line
    }
  }

  // Type the second subtext
  function typeSubtext2() {
    if (k < subtextText2.length) {
      subtextElement2.textContent += subtextText2.charAt(k);
      k++;
      setTimeout(typeSubtext2, 30);
    }
  }

  typeTitle(); // start typing animation
});
