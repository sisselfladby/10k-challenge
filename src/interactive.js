export function initialize(rootEL, initialCount, onChange) {
  const containerEl = rootEL.querySelector('.number-container');

  let count = initialCount

  const handleUpdate = (newCount) => {
    if (newCount < 0) return


    const html = [...String(newCount)].map((num) => 
      `<div class="number-container__number">${num}</div>`
    ).join('')

    count = newCount
    containerEl.innerHTML = html

    setTimeout(() => onChange(newCount), 0)
  }

  rootEL.querySelector('#subtract').addEventListener('click', (event) => {
    event.preventDefault();
    handleUpdate(count - 1)
  })
  
  rootEL.querySelector('#add').addEventListener('click', (event) => {
    event.preventDefault();
    handleUpdate(count + 1)
  })
}
