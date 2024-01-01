const ratingBox = document.querySelector(".rating__side");
const resultBox = document.querySelector(".result__side");
const ratingScore = document.querySelectorAll(".rating-score ");
const submit = document.querySelector(".submit-score");
const message = document.querySelector(".score-message");
let s = 0;

for (let i = 0; i < ratingScore.length; i++) {
  ratingScore[i].addEventListener("click", function () {
    for (let j = 0; j < ratingScore.length; j++) {
      if (i === j) {
        ratingScore[j].classList.add("given");
        s = ratingScore[j].innerText;
        console.log(ratingScore[j]);
      } else {
        ratingScore[j].classList.remove("given");
      }
    }
  });
}

submit.addEventListener("click", (e) => {
  if (s !== 0) {
    message.innerText = s;
    ratingBox.classList.add("move");
    resultBox.classList.remove("move");
  }

  e.preventDefault();
  console.log(s);
});
