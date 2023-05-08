window.onload = () => {
  let button = document.querySelector("#calculateBtn");

  // Function for calculating BMI
  button.addEventListener("click", calculateBMI);
};

function calculateBMI() {
  
  let height = parseInt(document
      .querySelector("#heightInput").value);
  
  let weight = parseInt(document
      .querySelector("#weightInput").value);

  let result = document.querySelector("#result");
  
  if (height === "" || isNaN(height))
    result.innerHTML = "Provide a valid Height!";

  else if (weight === "" || isNaN(weight))
    result.innerHTML = "Provide a valid Weight!";
  
  else {
    
    let bmi = (weight / ((height * height)
              / 10000)).toFixed(2);

    if (bmi < 18.5) result.innerHTML =
      `UNDER WEIGHT : <span>${bmi}</span>`;

    else if (bmi >= 18.5 && bmi < 24.9)
      result.innerHTML =
        `NORMAL WEIGHT: <span>${bmi}</span>`;

    else if (bmi >= 25 && bmi < 29.9)
      result.innerHTML =
        `OVER WEIGHT: <span>${bmi}</span>`;

    else if (bmi >= 30 && bmi < 39.9)
      result.innerHTML =
        `OBESITY: <span>${bmi}</span>`;

    else result.innerHTML =
      `EXTREME OBESITY : <span>${bmi}</span>`;
  }
}
