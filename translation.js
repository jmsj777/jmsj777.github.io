function loadTranslations() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "translations.json", true);

  xhr.onprogress = function() {
    console.log("READYSTATE: ", xhr.readyState);
  };
  xhr.onload = function() {
    if (this.status == 200) {
      var users = JSON.parse(this.responseText);

      //console.log(users);

      var output = "";
      for (var i in users) {
        output += `<div class="user">
          <img src='${users[i].avatar_url}' width="70" height="70">
          <ul>
            <li>ID: ${users[i].id}</li>
            <li>Login: ${users[i].login}</li>
          </ul> </div>`;
      }

      document.getElementById("users").innerHTML = output;
    }
  };


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
