function importCSS(href) {
  var link = document.createElement('link');

  link.href = href;
  link.rel = 'stylesheet';
  link.type = 'text/css';

  return new Promise((resolve, reject) => {
    link.onload = resolve
    link.onerror = reject

    document.head.appendChild(link);
  })
}

let {count} = JSON.parse(document.getElementById('data').textContent);

function getNumber() {
  console.log(count);
  return count
}

function setNumber(newNumber) {
  count = newNumber
}

Promise.all([
  import('/src/interactive.js'),
  importCSS('./src/interactive.css')
])
  .then(([module]) => {
    const counterEl = document.getElementById('counter')
    console.log(module, counterEl)

    if (counterEl) {
      module.hydrate(counterEl)
    }
  });

if (window.speechSynthesis) {
  Promise.all([
    import('/src/speech.js'),
    importCSS('./src/speech.css')
  ]).then(([speechModule]) => {
    console.log(speechModule);
    speechModule.initialize(getNumber)
  })
}
