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

    document.getElementById('illustrazioni').className="border-dark";
    document.getElementById('illustrazioni-discover').className="button-dark";
    document.getElementById("illustrazioni-dida").className = "testo-base-dark";



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

    document.getElementById('illustrazioni').className="border-light";
    document.getElementById('illustrazioni-discover').className="button-light";
    document.getElementById("illustrazioni-dida").className = "testo-base-light";
    }
})


//open projects

function discoverVice() {
  window.open("la-vicevita-treni-e-viaggi-in-treno.html", "_self", );}
