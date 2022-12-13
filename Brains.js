var input = document.querySelector("#input-box");
var translatebtn = document.querySelector("#translate-btn");
var outputtxt = document.querySelector("#output-txt");

var url = "https://api.funtranslations.com/translate/pirate.json";

function translation(text) {
  return url + "?" + "text=" + text;
}

function clickhandler(){
  var inputtxt = input.value;
  fetch(translation(inputtxt))
  .then((Response) => Response.json())
  .then((json) => {
    var translatedjson = json.contents.translated;
    outputtxt.innerText = translatedjson;
  });
}

translatebtn.addEventListener("click", clickhandler);



