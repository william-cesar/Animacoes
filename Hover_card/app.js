const card = document.querySelector(".card");
const container = document.querySelector(".container");
const image = document.querySelector(".jersey-img");
const title = document.querySelector(".info h1");
const description = document.querySelector(".info h3");
const sizes = document.querySelector(".sizes");
const purchase = document.querySelector(".purchase button");

//animation
container.addEventListener("mouseover", (e) => {
  const xAxis = (window.innerWidth / 2 - e.pageX) / 15;
  const yAxis = (window.innerHeight / 2 - e.pageY) / 15;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//animate in
container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
  title.style.transform = "translateZ(150px)";
  description.style.transform = "translateZ(100px)";
  sizes.style.transform = "translateZ(50px)";
  purchase.style.transform = "translateZ(25px)";
  image.style.transform = "translateZ(100px)";
});
//animate out
container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = "rotateY(0deg) rotateX(0deg)";
  title.style.transform = "translateZ(0px)";
  description.style.transform = "translateZ(0px)";
  sizes.style.transform = "translateZ(0px)";
  purchase.style.transform = "translateZ(0px)";
  image.style.transform = "translateZ(0px)";
});

sizes.addEventListener("click", (e) => {
  const sizesButtons = document.querySelectorAll(".sizes button");
  sizesButtons.forEach((btn) => {
    if (btn.getAttribute("class") !== "inactive") {
      btn.setAttribute("class", " ");
    }
  });
  const clickedButton = e.target.id;
  const button = document.querySelector(`#${clickedButton}`);

  if (button.getAttribute("class") !== "inactive") {
    button.setAttribute("class", "active");
  }
});
