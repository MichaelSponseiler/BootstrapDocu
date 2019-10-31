var allHeaders = document.querySelectorAll("h2");
allHeaders.forEach(element => {
  var list = document.getElementById("myList");
  const listitem = document.createElement("li");
  var hrefLink = element.textContent.replace(/ /g,"_");
  listitem.innerHTML = '<a class="nav-link" href="#' + hrefLink + '_anchor">' + element.textContent + '</a>';
  listitem.className = "nav-item active";
  list.append(listitem);
});

AOS.init();
var theVariableIsALie = "";

function getRandomImage() {
  var rnd = Math.floor(Math.random() * 20) + 1;
  document.getElementById('randomMeme').src = './Memes/Meme' + rnd + '.bmp';
};

function playPokemonSound(name) {
  var a = new Audio("./Pokemon/" + name + ".wav")
  a.play();
}

$('.navbar-collapse a').click(function () {
  $(".navbar-collapse").collapse('hide');
});

function theFunctionIsALie(letter) {
  theVariableIsALie += letter
  console.log(theVariableIsALie);

  for (var i = 0; i < theVariableIsALie.length; i++) {
    if (i === 0 && theVariableIsALie.charAt(0) !== "c") {
      theVariableIsALie = "";
    }
    else if (i === 1 && theVariableIsALie.charAt(1) !== "a") {
      theVariableIsALie = "";
    }
    else if (i === 2 && theVariableIsALie.charAt(2) !== "k") {
      theVariableIsALie = "";
    }
    else if (i === 3 && theVariableIsALie.charAt(3) !== "e") {
      theVariableIsALie = "";
    }
    else if(theVariableIsALie.length === 4){
      theVariableIsALie = "";
      showTheCake();
    }
  }
}

function showTheCake(){
  $('#theHiddenCake').modal('toggle')
}

$('.navbar-collapse a').click(function () {
  $(".navbar-collapse").collapse('hide');
});