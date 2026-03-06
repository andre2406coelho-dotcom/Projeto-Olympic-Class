const title = document.getElementById("infoTitle");
const text = document.getElementById("infoText");

const defaultTitle = "Olympic Class Experience";
const defaultText = "Passe o mouse sobre um dos navios para ver um resumo.";

const spaTrack = document.getElementById("spaTrack");
const backBtn = document.getElementById("backBtn");

const detailsTitle = document.getElementById("detailsTitle");
const detailsSub = document.getElementById("detailsSub");
const detailsHeroImg = document.getElementById("detailsHeroImg");
const detailsFacts = document.getElementById("detailsFacts");
const detailsGallery = document.getElementById("detailsGallery");

const SHIPS = {
  olympic: {
    hero: "Olympic/Oly5.jpg",
    description: `
<p>
A RMS Olympic foi um transatlântico britânico operado pela White Star Line e construído pelos estaleiros Harland & Wolff em Belfast. Foi o primeiro navio da famosa Classe Olympic, seguido pelo RMS Titanic e pelo HMHS Britannic. Sua construção começou em dezembro de 1908, sendo lançado ao mar em 20 de outubro de 1910 e realizando sua viagem inaugural em 14 de junho de 1911, navegando de Southampton para Nova Iorque.
</p>

<p>
Ao contrário de seus irmãos, a Olympic teve uma longa e notável carreira no Atlântico. Enquanto o Titanic afundou em sua viagem inaugural e o Britannic foi convertido em navio-hospital durante a Primeira Guerra Mundial e perdido no conflito, a Olympic permaneceu em serviço por mais de duas décadas, de 1911 a 1935. Por sua confiabilidade e resistência ao longo dos anos, ganhou o apelido de “Old Reliable” — ou “Velha Confiável”.
</p>

<p>
Apesar de sua reputação sólida, sua carreira não foi isenta de incidentes. O navio esteve envolvido em algumas colisões, sendo as mais conhecidas com o cruzador britânico HMS Hawke em setembro de 1911 e com o navio-farol LV-117 em maio de 1934. Ainda assim, a Olympic continuou operando normalmente após reparos e manteve sua posição como um dos principais navios da frota da White Star Line.
</p>

<p>
Durante a Primeira Guerra Mundial, a Olympic foi requisitado pela Marinha Real Britânica e convertido em transporte de tropas. Nesse período realizou diversas travessias transportando soldados e suprimentos, retornando ao serviço comercial após o fim do conflito.
</p>

<p>
O desastre do Titanic em 1912 levou a uma grande revisão dos sistemas de segurança da Olympic, que recebeu melhorias estruturais, novos botes salva-vidas e modificações internas. Outras reformas ocorreram no final da década de 1920 para manter o navio competitivo frente a embarcações mais modernas.
</p>

<p>
A Olympic permaneceu como um dos principais navios da White Star Line, operando ao lado do RMS Majestic até sua aposentadoria em 1935. Dois anos depois, em 1937, o navio foi desmontado, com muitos de seus elementos decorativos sendo leiloados e reutilizados em hotéis, restaurantes e até mesmo em outras embarcações.
</p>
`,
    facts: [
      "Serviu como transporte de tropas na Primeira Guerra Mundial.",
      "Ganhou o apelido de “A Velha Confiável”.",
      "Teve uma carreira longa em comparação com seus irmãos.",
      "Afundou um submarino U-103 durante uma de suas viagens como H.M.T.",
      "É a unica dos três irmãos que nunca recebeu série ou filme contando sua historia."
    ],
    gallery: [
      "Olympic/Oly1.jpg",
      "Olympic/Oly2.jpg",
      "Olympic/Oly3.jpg",
      "Olympic/Oly4.jpeg",
      "Olympic/Oly6.jpg",
      "Olympic/Oly7.jpg",
      "Olympic/Oly8.webp",
      "Olympic/Oly9.jpg",
      "Olympic/Oly0.jpg"
    ]
  },

  titanic: {
    hero: "Titanic/Titanic6.png",
    description: `
<p>
O RMS Titanic foi um transatlântico britânico operado pela White Star Line e construído pelos estaleiros Harland & Wolff, em Belfast. Como o segundo navio da Classe Olympic — entre o RMS Olympic e o HMHS Britannic — foi projetado pelos engenheiros navais Alexander Carlisle e Thomas Andrews para representar o auge da engenharia e do luxo marítimo de sua época.
</p>

<p>
Sua construção começou em março de 1909 e o lançamento ao mar ocorreu em maio de 1911. O Titanic foi concebido para ser um dos navios mais avançados e seguros já construídos, o que ajudou a alimentar a famosa reputação de que seria “inafundável”.
</p>

<p>
Em 10 de abril de 1912, o navio partiu de Southampton em sua viagem inaugural rumo a Nova Iorque, fazendo escalas em Cherbourg, na França, e Queenstown, na Irlanda. Na noite de 14 de abril, às 23h40, o Titanic colidiu com um iceberg no lado direito da proa. A embarcação afundou nas primeiras horas do dia seguinte, resultando na morte de mais de 1 500 pessoas e tornando-se um dos maiores desastres marítimos em tempos de paz da história.
</p>

<p>
A tragédia expôs falhas importantes em procedimentos de segurança, evacuação e regulamentação marítima. As investigações conduzidas pelos Estados Unidos e pelo Reino Unido levaram à criação de novas leis e padrões internacionais de segurança no mar, muitos dos quais permanecem em vigor até hoje.
</p>

<p>
Os destroços do Titanic foram encontrados em 1985 por uma equipe liderada pelo oceanógrafo Robert Ballard. O navio repousa a cerca de 3 843 metros de profundidade, aproximadamente 650 quilômetros ao sudeste de Terra Nova, no Canadá.
</p>

<p>
Mais de um século depois, o Titanic continua sendo um dos navios mais famosos da história, permanecendo presente no imaginário popular e inspirando livros, pesquisas, documentários e filmes ao redor do mundo.
</p>
`,
    facts: [
      "Afundou em 15 de abril de 1912, na viagem inaugural ceifando por volta de 1514 vidas mas o numero exato ainda é desconhecido devido a falhas na contagem de passageiros.",
      "Ficou marcado como um dos desastres marítimos mais conhecidos se tornando simbolo cultural e histórico em todo o globo.",
      "Atualmente possui um museu chamado Titanic Belfast em Belfast na Irlanda com o último White Star Liner, o rebocador Nomadic como exposição e atração turistica.",
      "É o único navio de passageiros do mundo a afundar por colisão com iceberg",
      "A famosa frase 'Nem Deus afunda este navio' nunca foi pronunciada fora do filme 'TITANIC' de 1997 de James Cameron.",
      "Durante os momentos finais do naufrágio era possivel ouvir o som do navio se partindo mas por conta da grande escuridão a quebra do Titanic se tornou uma 'teoria descartada' até seus destroços serem finalmente encontrados em 1 de Setembro de 1985.",
      "Uma seção que poderia possivelmente ter se separado do Titanic durante a quebra do navio foi encontrada a algumas centenas de metros do naufrágio, trazendo a possibilidade do Titanic ter se partido em três ao invés de duas partes."
    ],
    gallery: [
      "Titanic/Titanic1.png",
      "Titanic/Titanic5.avif",
      "Titanic/Titanic3.avif",
      "Titanic/titanic4.avif",
      "Titanic/Titanic2.jpg",
      "Titanic/Titanic7.jpg",
      "Titanic/titanic8.png",
      "Titanic/Titanic9.png",
      "Titanic/Titanic0.jpg"
    ]
  },

  britannic: {
    hero: "Britannic/Britannic7.webp",
    description: `
<p>
O HMHS Britannic foi o terceiro e maior navio da Classe Olympic da White Star Line, construído pelos estaleiros Harland & Wolff em Belfast. Inicialmente planejado como um luxuoso transatlântico de passageiros chamado <em>Gigantic</em>, seu projeto foi profundamente modificado após o desastre do Titanic em 1912, com diversas melhorias estruturais e de segurança.
</p>

<p>
Sua construção começou em novembro de 1911 e o lançamento ao mar ocorreu em 26 de fevereiro de 1914. O Britannic foi concebido para ser o mais avançado, seguro e luxuoso navio de sua classe. No entanto, ele nunca chegou a operar como navio de passageiros.
</p>

<p>
Com o início da Primeira Guerra Mundial, o navio foi requisitado pela Marinha Real Britânica em 1915 e convertido em navio-hospital, recebendo a designação HMHS (His Majesty's Hospital Ship). Durante o conflito, realizou diversas viagens entre o Reino Unido e o Mar Mediterrâneo, transportando soldados feridos das frentes de batalha.
</p>

<p>
Na manhã de 21 de novembro de 1916, durante sua sexta missão no Mar Egeu, o Britannic sofreu uma explosão após atingir uma mina submarina. O navio afundou em menos de uma hora. Apesar da tragédia, o número de vítimas foi relativamente baixo em comparação com o Titanic, devido às melhores condições de evacuação e à proximidade da costa.
</p>

<p>
As circunstâncias exatas de seu naufrágio ainda são debatidas por historiadores. Na época, a imprensa britânica atribuiu o incidente a um ato de guerra alemão, alimentando tensões durante o conflito.
</p>

<p>
Os destroços do Britannic foram localizados em 1975 pelo explorador francês Jacques-Yves Cousteau. Hoje, o navio repousa nas águas do Mar Egeu e continua sendo objeto de pesquisas históricas e expedições submarinas. Mesmo menos famoso que o Titanic, o Britannic permanece como o maior navio de passageiros já naufragado.
</p>
`,
    facts: [
      "Foi requisitado como navio-hospital na Primeira Guerra Mundial antes de sua viagem inaugural o tornando o unico dos irmãos sem o prefixo R.M.S. 'Royal Mail Ship'.",
      "Afundou em 21 de novembro de 1916 no Mar Egeu e as causas são incertas até os dias atuais pois não se sabe se o naufrágio foi causado por torpedeiros próximos ou por minas maritimas.",
      "Diferente de seu irmão Titanic, o Britannic ceifou apenas 30 vidas em seu naufrágio e isso só ocorreu por desobediencia da tripulação no lançamento dos botes lançando um bote ao mar enquanto as élices na popa que estavam parcialmente fora da água ainda giravam.",
      "Ganhou uma miniserie chamada 'BRITANNIC' que passou nas televisões em 9 de Janeiro de 2000 contando a historia do naufrágio com a teoria de ter sido afundado torpedeado por um submarino alemão."
    ],
    gallery: [
      "Britannic/Britannic1.jpg",
      "Britannic/Britannic2.jpg",
      "Britannic/Britannic4.webp",
      "Britannic/Britannic5.webp",
      "Britannic/Britannic6.webp",
      "Britannic/Britannic3.webp",
      "Britannic/Britannic8.webp",
      "Britannic/Britannic9.webp",
      "Britannic/Britannic0.webp"
    ]
  }
};

function isMobile() {
  return window.matchMedia("(max-width: 700px)").matches;
}

function updateHomeText() {
  if (isMobile()) {
    text.textContent = "";
  } else {
    text.textContent = defaultText;
  }
}

function openDetails(shipEl) {
  const id = shipEl.dataset.id;
  const name = shipEl.dataset.name;
  const subHtml = shipEl.dataset.sub;
  const shipData = SHIPS[id] || {};

  detailsTitle.textContent = name;

  // Usa o texto próprio da página de detalhes.
  // Se não existir, cai no resumo antigo como segurança.
  detailsSub.innerHTML = shipData.description || subHtml;

  if (shipData.hero) {
    detailsHeroImg.src = shipData.hero;
    detailsHeroImg.alt = `${name} (imagem)`;
  } else {
    detailsHeroImg.removeAttribute("src");
    detailsHeroImg.alt = "";
  }

  detailsFacts.innerHTML = "";
  (shipData.facts || []).forEach((fact) => {
    const li = document.createElement("li");
    li.textContent = fact;
    detailsFacts.appendChild(li);
  });

  detailsGallery.innerHTML = "";
  (shipData.gallery || []).forEach((src) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = `${name} (galeria)`;
    detailsGallery.appendChild(img);
  });

  spaTrack.classList.add("is-details");
}

function goHome() {
  spaTrack.classList.remove("is-details");
}

document.querySelectorAll(".ship-hitbox").forEach((el) => {
  el.addEventListener("mouseenter", () => {
    if (isMobile()) return;

    title.textContent = el.dataset.name;
    text.innerHTML = el.dataset.sub;
  });

  el.addEventListener("mouseleave", () => {
    if (isMobile()) return;

    title.textContent = defaultTitle;
    text.textContent = defaultText;
  });

  el.addEventListener("click", () => openDetails(el));
});

backBtn.addEventListener("click", goHome);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") goHome();
});

const scrollArea = document.querySelector(".details-content");
const heroImg = document.getElementById("detailsHeroImg");

if (scrollArea && heroImg) {
  scrollArea.addEventListener("scroll", () => {
    if (isMobile()) {
      heroImg.style.transform = "translateY(0)";
      return;
    }

    const y = scrollArea.scrollTop;
    const parallax = Math.max(-20, y * -0.12);

    heroImg.style.transform = `translateY(${parallax}px)`;
  });
}

(function enableSwipeBack() {
  const track = document.getElementById("spaTrack");
  const backBtn = document.getElementById("backBtn");
  if (!track || !backBtn) return;

  let startX = 0;
  let startY = 0;
  let tracking = false;

  function isDetailsOpen() {
    return track.classList.contains("is-details");
  }

  document.addEventListener("touchstart", (e) => {
    if (!isDetailsOpen()) return;
    const t = e.touches[0];
    startX = t.clientX;
    startY = t.clientY;
    tracking = true;
  }, { passive: true });

  document.addEventListener("touchmove", (e) => {
    if (!tracking) return;
    const t = e.touches[0];
    const dx = t.clientX - startX;
    const dy = t.clientY - startY;

    if (Math.abs(dy) > Math.abs(dx)) return;

    if (dx > 90) {
      tracking = false;
      backBtn.click();
    }
  }, { passive: true });

  document.addEventListener("touchend", () => {
    tracking = false;
  }, { passive: true });
})();

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxClose = document.getElementById("lightboxClose");
const lightboxPrev = document.getElementById("lightboxPrev");
const lightboxNext = document.getElementById("lightboxNext");

let currentGallery = [];
let currentIndex = 0;

function openLightbox(images, index) {
  currentGallery = images;
  currentIndex = index;

  lightboxImg.src = currentGallery[currentIndex];
  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImg.src = "";
  document.body.style.overflow = "";
}

function showPrevImage() {
  if (!currentGallery.length) return;
  currentIndex = (currentIndex - 1 + currentGallery.length) % currentGallery.length;
  lightboxImg.src = currentGallery[currentIndex];
}

function showNextImage() {
  if (!currentGallery.length) return;
  currentIndex = (currentIndex + 1) % currentGallery.length;
  lightboxImg.src = currentGallery[currentIndex];
}

detailsGallery.addEventListener("click", (e) => {
  const clickedImg = e.target.closest("img");
  if (!clickedImg) return;

  const galleryImages = Array.from(detailsGallery.querySelectorAll("img")).map(img => img.src);
  const clickedIndex = galleryImages.indexOf(clickedImg.src);

  openLightbox(galleryImages, clickedIndex);
});

lightboxClose.addEventListener("click", closeLightbox);
lightboxPrev.addEventListener("click", showPrevImage);
lightboxNext.addEventListener("click", showNextImage);

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    closeLightbox();
  }
});

document.addEventListener("keydown", (e) => {
  if (!lightbox.classList.contains("is-open")) return;

  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowLeft") showPrevImage();
  if (e.key === "ArrowRight") showNextImage();
});

(function enableLightboxSwipe() {
  let startX = 0;
  let startY = 0;

  lightbox.addEventListener("touchstart", (e) => {
    if (!lightbox.classList.contains("is-open")) return;
    const touch = e.touches[0];
    startX = touch.clientX;
    startY = touch.clientY;
  }, { passive: true });

  lightbox.addEventListener("touchend", (e) => {
    if (!lightbox.classList.contains("is-open")) return;

    const touch = e.changedTouches[0];
    const dx = touch.clientX - startX;
    const dy = touch.clientY - startY;

    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 50) {
      if (dx > 0) {
        showPrevImage();
      } else {
        showNextImage();
      }
    }
  }, { passive: true });
})();

// Define o texto correto já no carregamento
updateHomeText();

// Atualiza o texto caso a tela mude de tamanho
window.addEventListener("resize", updateHomeText);