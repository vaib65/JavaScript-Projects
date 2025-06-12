const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentzActive = 1;

next.addEventListener("click", () => {
  currentzActive++;
  if (currentzActive > circles.length) {
    currentzActive = currentzActive;
  }
  update();
});

prev.addEventListener("click", () => {
  currentzActive--;
  if (currentzActive < 1) {
    currentzActive = 1;
  }
  update();
});

function update() {
  circles.forEach((circle, idx) => {
    if (idx < currentzActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");
  progress.style.width=(actives.length - 1) / (circles.length - 1) * 100 + "%";
    
  

  if (currentzActive == 1) {
    prev.disabled = true;
  } else if (currentzActive === circles.length) {
    next.disabled = true;
  }
  else{
    prev.disabled=false;
    next.disabled=false;
  }
}
