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
  const speechModule = await import('/src/speech.js')
  console.log("hei")
  console.log(window.speechSynthesis)
  console.log(window.speechSynthesis.getVoices())
}
