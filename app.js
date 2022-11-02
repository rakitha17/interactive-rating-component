const form = document.querySelector(".form");
const radioInputs = document.querySelectorAll(".form_radio-input");
const ratingCard = document.querySelector(".rating-card");

let ratingValue;

radioInputs.forEach( (functionInput) => {
  functionInput.addEventListener("change", (e) => {
    ratingValue = e.target.value;
  })
})

form.addEventListener("submit", (x) => {
  x.preventDefault();
  if(!ratingValue) return;
  renderThankyouContent(ratingCard, ratingValue); // two arguments
})

function renderThankyouContent(container, ratingValue){
  container.innerHTML = `<div class="thank-you">
  <img src="/images/illustration-thank-you.svg" class="thank-you-image" alt="thank you">
  <p class="result">You selected ${ratingValue} out of 5</p>
  <h1 class="thank-you_title">Thank you!</h1>
  <p class="thank-you-description">
    We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!
  </p>
</div>`;
}

// console.log(radioInputs);