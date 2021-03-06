// this function takes text and wraps all the letters in spans
const makeSpans = selector => {
  const [...elements] = document.querySelectorAll(selector)
  return elements.map(element => {
    const text = element.innerText.split('')
    const spans = text
      .map(letter => '<span>' + letter + '</span>')
      .join('')
    return element.innerHTML = spans
  })
}

// or with multiple selectors
makeSpans('h1, h2')


// get all draggie elements
var draggableElems = document.querySelectorAll('.draggable');
// array of Draggabillies
var draggies = []
// init Draggabillies
for ( var i=0, len = draggableElems.length; i < len; i++ ) {
var draggableElem = draggableElems[i];
var draggie = new Draggabilly( draggableElem, {
containment: true
});
draggies.push( draggie );
}



//open contacts
const open = document.getElementById('wannasayhi')
const body = document.querySelector('body')




open.addEventListener("click", function () {

  if (body.className==='dark'){
    document.getElementById("container").className = "container";
    document.getElementById("wannasayhi-box").className = "wannasayhi-box-dark";
  }
  else if (body.className==='light') {
    document.getElementById("container").className = "container";
    document.getElementById("wannasayhi-box").className = "wannasayhi-box-light";
  }
  else {
    document.getElementById("container").className = "container";
    document.getElementById("wannasayhi-box").className = "wannasayhi-box-ee";
  }



})

//close contacts
const close = document.getElementById('close')
close.addEventListener("click", function () {
    document.getElementById("wannasayhi-box").className = "off";
    document.getElementById("container").className = "off";

  }
)


// dark e light
const button = document.getElementById('mode')
const contatti = document.getElementById('wannasayhi-box')


button.addEventListener("click", function () {

  if (button.innerHTML === "DARK MODE") {
    button.innerHTML = "LIGHT MODE";
    document.querySelector("canvas").className = "off";
    document.getElementById("body").className = "dark";
    document.getElementById('intro').className="border-dark";
    document.getElementById('scroll').className="testo-base-dark";
    document.getElementById("mode").className = "button-dark";
    document.getElementById("wannasayhi").className = "button-dark";
    document.getElementById("cv").className = "button-dark";
    document.getElementById("close").className = "button-dark";
    document.getElementById("francesca").className = "francesca-dark";
    document.getElementById("runner").className = "runner-dark";
    document.getElementById("testo-base").className = "testo-base-dark";
    document.getElementById('draggable').className="testo-base-dark";

    document.getElementById('intro-titolo-ee').className="off";
    document.getElementById('intro-titolo-base').className="on";


    document.getElementById('vicevita').className="border-dark";
    document.getElementById('vicevita-titolo-ee').className="off";
    document.getElementById('vicevita-titolo-base').className="on";
    document.getElementById('vicevita-discover').className="button-dark";
    document.getElementById("vicevita-dida").className = "testo-base-dark";


    document.getElementById('colpevole').className="border-dark";
    document.getElementById('colpevole-titolo-ee').className="off";
    document.getElementById('colpevole-titolo-base').className="on";
    document.getElementById('colpevole-discover').className="button-dark";
    document.getElementById("colpevole-dida").className = "testo-base-dark";

    document.getElementById('riace').className="border-dark";
    document.getElementById('riace-titolo-ee').className="off";
    document.getElementById('riace-titolo-base').className="on";
    document.getElementById('riace-discover').className="button-dark";
    document.getElementById("riace-dida").className = "testo-base-dark";

    document.getElementById('mrseaves').className="border-dark";
    document.getElementById('mrseaves-titolo-ee').className="off";
    document.getElementById('mrseaves-titolo-base').className="on";
    document.getElementById('mrseaves-discover').className="button-dark";
    document.getElementById("mrseaves-dida").className = "testo-base-dark";

    document.getElementById('arbus').className="border-dark";
    document.getElementById('arbus-titolo-ee').className="off";
    document.getElementById('arbus-titolo-base').className="on";
    document.getElementById('arbus-discover').className="button-dark";
    document.getElementById("arbus-dida").className = "testo-base-dark";

    document.getElementById('fellini').className="border-dark";
    document.getElementById('fellini-titolo-ee').className="off";
    document.getElementById('fellini-titolo-base').className="on";
    document.getElementById('fellini-discover').className="button-dark";
    document.getElementById("fellini-dida").className = "testo-base-dark";

    document.getElementById('steiner').className="border-dark";
    document.getElementById('steiner-titolo-ee').className="off";
    document.getElementById('steiner-titolo-base').className="on";
    document.getElementById('steiner-discover').className="button-dark";
    document.getElementById("steiner-dida").className = "testo-base-dark";

    document.getElementById('ecovie').className="border-dark";
    document.getElementById('ecovie-titolo-ee').className="off";
    document.getElementById('ecovie-titolo-base').className="on";
    document.getElementById('ecovie-discover').className="button-dark";
    document.getElementById("ecovie-dida").className = "testo-base-dark";

    document.getElementById('sogni').className="border-dark";
    document.getElementById('sogni-discover').className="button-dark";
    document.getElementById("sogni-dida").className = "testo-base-dark";

    document.getElementById('immobilità').className="border-dark";
    document.getElementById('immobilità-discover').className="button-dark";
    document.getElementById("immobilità-dida").className = "testo-base-dark";

    document.getElementById('nostalgia').className="border-dark";
    document.getElementById('nostalgia-discover').className="button-dark";
    document.getElementById("nostalgia-dida").className = "testo-base-dark";

    document.getElementById('inquietudine').className="border-dark";
    document.getElementById('inquietudine-discover').className="button-dark";
    document.getElementById("inquietudine-dida").className = "testo-base-dark";
    }
    else {
    button.innerHTML = "DARK MODE";
    document.querySelector("canvas").className = "off";
    document.getElementById("body").className = "light";
    document.getElementById('intro').className="border-light";
    document.getElementById('scroll').className="testo-base-light";
    document.getElementById("mode").className = "button-light";
    document.getElementById("wannasayhi").className = "button-light";
    document.getElementById("cv").className = "button-light";
    document.getElementById("close").className = "button-light";
    document.getElementById("francesca").className = "francesca-light";
    document.getElementById("runner").className = "runner-light";
    document.getElementById("testo-base").className = "testo-base-light";
    document.getElementById('draggable').className="testo-base-light";

    document.getElementById('intro-titolo-ee').className="off";
    document.getElementById('intro-titolo-base').className="on";

    document.getElementById('vicevita').className="border-light";
    document.getElementById('vicevita-titolo-ee').className="off";
    document.getElementById('vicevita-titolo-base').className="on";
    document.getElementById('vicevita-discover').className="button-light";
    document.getElementById("vicevita-dida").className = "testo-base-light";

    document.getElementById('colpevole').className="border-light";
    document.getElementById('colpevole-titolo-ee').className="off";
    document.getElementById('colpevole-titolo-base').className="on";
    document.getElementById('colpevole-discover').className="button-light";
    document.getElementById("colpevole-dida").className = "testo-base-light";

    document.getElementById('riace').className="border-light";
    document.getElementById('riace-titolo-ee').className="off";
    document.getElementById('riace-titolo-base').className="on";
    document.getElementById('riace-discover').className="button-light";
    document.getElementById("riace-dida").className = "testo-base-light";

    document.getElementById('mrseaves').className="border-light";
    document.getElementById('mrseaves-titolo-ee').className="off";
    document.getElementById('mrseaves-titolo-base').className="on";
    document.getElementById('mrseaves-discover').className="button-light";
    document.getElementById("mrseaves-dida").className = "testo-base-light";

    document.getElementById('arbus').className="border-light";
    document.getElementById('arbus-titolo-ee').className="off";
    document.getElementById('arbus-titolo-base').className="on";
    document.getElementById('arbus-discover').className="button-light";
    document.getElementById("arbus-dida").className = "testo-base-light";

    document.getElementById('fellini').className="border-light";
    document.getElementById('fellini-titolo-ee').className="off";
    document.getElementById('fellini-titolo-base').className="on";
    document.getElementById('fellini-discover').className="button-light";
    document.getElementById("fellini-dida").className = "testo-base-light";

    document.getElementById('steiner').className="border-light";
    document.getElementById('steiner-titolo-ee').className="off";
    document.getElementById('steiner-titolo-base').className="on";
    document.getElementById('steiner-discover').className="button-light";
    document.getElementById("steiner-dida").className = "testo-base-light";

    document.getElementById('ecovie').className="border-light";
    document.getElementById('ecovie-titolo-ee').className="off";
    document.getElementById('ecovie-titolo-base').className="on";
    document.getElementById('ecovie-discover').className="button-light";
    document.getElementById("ecovie-dida").className = "testo-base-light";

    document.getElementById('sogni').className="border-light";
    document.getElementById('sogni-discover').className="button-light";
    document.getElementById("sogni-dida").className = "testo-base-light";

    document.getElementById('immobilità').className="border-light";
    document.getElementById('immobilità-discover').className="button-light";
    document.getElementById("immobilità-dida").className = "testo-base-light";

    document.getElementById('nostalgia').className="border-light";
    document.getElementById('nostalgia-discover').className="button-light";
    document.getElementById("nostalgia-dida").className = "testo-base-light";

    document.getElementById('inquietudine').className="border-light";
    document.getElementById('inquietudine-discover').className="button-light";
    document.getElementById("inquietudine-dida").className = "testo-base-light";
    }
})

//cv
const cv = document.getElementById('cv')
cv.addEventListener("click", function () {
window.download("Fazzini_Francesca_CV.pdf","_blank");
  }
)


//open
const openvicevita = document.getElementById('vicevita-discover')
openvicevita.addEventListener("click", function () {
window.open("la-vicevita-treni-e-viaggi-in-treno.html","_self");
  }
)
const opencolpevole = document.getElementById('colpevole-discover')
opencolpevole.addEventListener("click", function () {
window.open("colpevole.html","_self");
  }
)
const openriace = document.getElementById('riace-discover')
openriace.addEventListener("click", function () {
window.open("riace-villaggio-globale.html","_self");
  }
)
const openmrs = document.getElementById('mrseaves-discover')
openmrs.addEventListener("click", function () {
window.open("mrs-eaves.html","_self");
  }
)
const openarbus = document.getElementById('arbus-discover')
openarbus.addEventListener("click", function () {
window.open("diane-arbus.html","_self");
  }
)
const openfellini = document.getElementById('fellini-discover')
openfellini.addEventListener("click", function () {
window.open("federico-fellini.html","_self");
  }
)
const opensteiner = document.getElementById('steiner-discover')
opensteiner.addEventListener("click", function () {
window.open("albe-steiner.html","_self");
  }
)
const openeco = document.getElementById('ecovie-discover')
openeco.addEventListener("click", function () {
window.open("ecovie-autostrade-intelligenti.html","_self");
  }
)
const openliquid = document.getElementById('sogni-discover')
openliquid.addEventListener("click", function () {
window.open("liquid-dreams.html","_self");
  }
)
const openlull = document.getElementById('immobilità-discover')
openlull.addEventListener("click", function () {
window.open("lull.html","_self");
  }
)
const opennost = document.getElementById('nostalgia-discover')
opennost.addEventListener("click", function () {
window.open("nostalgic-longing.html","_self");
  }
)
const opendist = document.getElementById('inquietudine-discover')
opendist.addEventListener("click", function () {
window.open("disturbance.html","_self");
  }
)
