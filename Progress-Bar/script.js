document.querySelectorAll(".skill").forEach((skill, index) => {
  const number = skill.querySelector(".number");
  const target = parseInt(number.getAttribute("data-target"));
  const circle = skill.querySelector("circle");
  const strokeDashArray = 440;

  let counter = 0;
  const interval = setInterval(() => {
    if (counter >= target) {
      clearInterval(interval);
    } else {
      counter++;
      number.innerHTML = counter + "%";
      circle.style.strokeDashoffset =
        strokeDashArray - (strokeDashArray * counter) / 100;
    }
  }, 30);
});
