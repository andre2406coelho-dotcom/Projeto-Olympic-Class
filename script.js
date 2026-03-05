const title = document.getElementById("infoTitle");
const text = document.getElementById("infoText");

const defaultTitle = "Olympic Class Experience";
const defaultText = "Passe o mouse sobre um dos navios para ver um resumo.";

// SPA elements
const spaTrack = document.getElementById("spaTrack");
const backBtn = document.getElementById("backBtn");

// Details elements
const detailsTitle = document.getElementById("detailsTitle");
const detailsSub = document.getElementById("detailsSub");
const detailsHeroImg = document.getElementById("detailsHeroImg");
const detailsFacts = document.getElementById("detailsFacts");
const detailsGallery = document.getElementById("detailsGallery");

// Um "mini banco" local pros detalhes (edita à vontade)
const SHIPS = {
  olympic: {
    hero: "Olympic/Oly5.jpg",
    facts: [
      "Serviu como transporte de tropas na Primeira Guerra Mundial.",
      "Ganhou o apelido de “A Velha Confiável”.",
      "Teve uma carreira longa em comparação com seus irmãos."
    ],
    gallery: ["Olympic/Oly1.jpg", "Olympic/Oly2.jpg", "Olympic/Oly3.jpg", "Olympic/Oly4.jpeg"]
  },
  titanic: {
    hero: "Titanic/Titanic6.png",
    facts: [
      "Afundou em 15 de abril de 1912, na viagem inaugural.",
      "Ficou marcado como um dos desastres marítimos mais conhecidos.",
      "Virou símbolo cultural e histórico."
    ],
    gallery: ["Titanic/Titanic1.png", "Titanic/Titanic5.avif", "Titanic/Titanic3.avif", "Titanic/Titanic4.avif", "Titanic/Titanic2.jpg"]
  },
  britannic: {
    hero: "Britannic/Britannic7.webp",
    facts: [
      "Foi requisitado como navio-hospital na Primeira Guerra Mundial.",
      "Afundou em 21 de novembro de 1916 no Mar Egeu.",
      "Seu naufrágio ainda rende debate histórico."
    ],
    gallery: ["Britannic/Britannic1.jpg", "Britannic/Britannic2.jpg", "Britannic/Britannic4.webp", "Britannic/Britannic5.webp", "Britannic/Britannic6.webp", "Britannic/Britannic3.webp"]
  }
};

function openDetails(shipEl){
  const id = shipEl.dataset.id;
  const name = shipEl.dataset.name;
  const subHtml = shipEl.dataset.sub;

  const shipData = SHIPS[id] || {};

  // Preenche título e texto (usa o seu data-sub)
  detailsTitle.textContent = name;
  detailsSub.innerHTML = subHtml;

  // Hero image
  if (shipData.hero) {
    detailsHeroImg.src = shipData.hero;
    detailsHeroImg.alt = `${name} (imagem)`;
  } else {
    detailsHeroImg.removeAttribute("src");
    detailsHeroImg.alt = "";
  }

  // Curiosidades
  detailsFacts.innerHTML = "";
  (shipData.facts || []).forEach((fact) => {
    const li = document.createElement("li");
    li.textContent = fact;
    detailsFacts.appendChild(li);
  });

  // Galeria
  detailsGallery.innerHTML = "";
  (shipData.gallery || []).forEach((src) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = `${name} (galeria)`;
    detailsGallery.appendChild(img);
  });

  // Slide para detalhes
  spaTrack.classList.add("is-details");
}

function goHome(){
  spaTrack.classList.remove("is-details");
}

// Seu hover (mantido)
document.querySelectorAll(".ship-hitbox").forEach((el) => {
  el.addEventListener("mouseenter", () => {
    title.textContent = el.dataset.name;
    text.innerHTML = el.dataset.sub;
  });

  el.addEventListener("mouseleave", () => {
    title.textContent = defaultTitle;
    text.textContent = defaultText;
  });

  // Clique = abre detalhes (SPA)
  el.addEventListener("click", () => openDetails(el));
});

backBtn.addEventListener("click", goHome);

// ESC volta
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") goHome();
});
const scrollArea = document.querySelector(".details-content");
const heroImg = document.getElementById("detailsHeroImg");

if (scrollArea && heroImg) {
  scrollArea.addEventListener("scroll", () => {
    const y = scrollArea.scrollTop;

    // fator controla o quanto a imagem se move (0.1 a 0.25 costuma ficar bonito)
    const parallax = y * -0.25;

    heroImg.style.transform = `translateY(${parallax}px)`;
  });
}