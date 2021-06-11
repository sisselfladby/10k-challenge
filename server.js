import { App } from '@tinyhttp/app'
import sirv from 'sirv'

const app = new App()

app
  .use('/src', sirv('src'))
  .get('/', (req, res) => res.redirect('/1', 302))
  .get('/:count', (req, res) => res.send(serveHtml(req.params.count)))
  .listen(3000)


function serveHtml(count) {
  const number = Number(count) || 1

  return (`
<!doctype html>

<html lang="no">
<head>
  <meta charset="utf-8">
  <link rel="stylesheet" href="./src/index.css">
  <title>1 - 2 - 3 - 4 - 5 - 6 - 7 - 8 - 9 - 10 og 11 - 12</title>
</head>

<body>
<main>
  <a class="control" href="/${number - 1}">
    -
    <span class="visually-hidden">Trekk fra</span>
  </a>

  <div class="number-container">
    ${[...String(number)].map((num) => 
      `<div class="number-container__number">${num}</div>`
    ).join('')}
  </div>

  <a class="control" href="/${number + 1}">
    +
    <span class="visually-hidden">Legg til</span>
  </a>
  <div id="speech-button-container"></div>
  </main>
  <script type="module" src="src/index.js"></script>
</body>
</html>
`);
}
