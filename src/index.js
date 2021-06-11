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
  return count
}

function setNumber(newNumber) {
  window.history.pushState({}, '', `/${newNumber}`);
  count = newNumber
}

Promise.all([
  import('/src/interactive.js'),
  importCSS('./src/interactive.css')
])
  .then(([module]) => {
    const counterEl = document.getElementById('counter')
    if (counterEl) {
      module.initialize(counterEl, getNumber(), setNumber);
    }
  });

if (window.speechSynthesis) {
  Promise.all([
    import('/src/speech.js'),
    importCSS('./src/speech.css')
  ]).then(([speechModule]) => {
    speechModule.initialize(getNumber)
  })
}
