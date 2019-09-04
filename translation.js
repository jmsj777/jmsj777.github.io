//define language reload anchors
var dataReload = document.querySelectorAll("[data-reload]");

//language transaltions
var language = {
  en: {
    hi: "Welcome to my Portfolio! I'm José Mário!"
  },
  pt: {
    hi: "Bem vindo ao meu portfólio! Eu sou José Mário"
  }
};

//definir lingua via window hash
if (window.location.hash) {
  if (window.location.hash === "#pt") {
    hi.textContent = language.pt.hi;
  }
  if (window.location.hash === "#en") {
    hi.textContent = language.en.hi;
  }
}

//define language reload onclick illiteration
for (i = 0; i <= dataReload.length; i++) {
  dataReload[i].onclick = function() {
    location.reload(true);
  };
}
