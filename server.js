import { App } from '@tinyhttp/app'
import sirv from 'sirv'

const app = new App()

app
    .use('/', sirv('src'))
    .get('/:count', (req, res) => res.send(serveHtml(req.params.count)))
    .listen(3000)


function serveHtml(count) {
    return (`
<!doctype html>

<html lang="no">
<head>
  <meta charset="utf-8">
  <link rel="stylesheet" href="./index.css">
  <title>1 - 2 - 3 - 4 - 5 - 6 - 7 - 8 - 9 - 10 og 11 - 12</title>
</head>

<body>
  <span>${count}</span>
  <div class="number-container">1</div>
  <div class="number-container">2</div>
  <div class="number-container">3</div>
  <div class="number-container">4</div>
  <div class="number-container">5</div>
  <script type="module" src="src/index.js"></script>
</body>
</html>
`);
}
