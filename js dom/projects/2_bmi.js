//we need to grab the details only on submit
const form = document.querySelector('form');

//we grab on submit,so we attach an event listener to the submit event
form.addEventListener('submit', function (e) {
  e.preventDefault();
  //we did thibcz we dont want to submit the form to anywhere
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  if (height == '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give valid height ${height}`;
  } else if (weight == '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    if (bmi <= 18.6) {
      results.innerHTML = `BMI : ${bmi} <br> You are Underweight`;
    } else if (bmi <= 24.9) {
      results.innerHTML = `BMI : ${bmi} <br> You are in Normal range`;
    } else {
      results.innerHTML = `BMI : ${bmi} <br> You are Overweight`;
    }
  }
});
