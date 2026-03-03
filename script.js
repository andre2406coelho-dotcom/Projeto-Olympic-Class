const title = document.getElementById("infoTitle");
const text = document.getElementById("infoText");

const defaultTitle = "Olympic Class Experience";
const defaultText = "Passe o mouse sobre um dos navios para ver um resumo.";

document.querySelectorAll(".ship-hitbox").forEach((el) => {
  el.addEventListener("mouseenter", () => {
    title.textContent = el.dataset.name;
    text.innerHTML = el.dataset.sub;
  });

  el.addEventListener("mouseleave", () => {
    title.textContent = defaultTitle;
    text.textContent = defaultText;
  });
});