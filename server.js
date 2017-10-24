import path from 'path'
import Express from 'express'
import React from 'react'
import { StaticRouter } from 'react-router-dom'
import configureStore from './src/configureStore'
import { Provider } from 'react-redux'
import App from './src/Components/App'

const app = Express()
const PORT = 3000

app.use(handleRender)

import { renderToString } from 'react-dom/server'
function handleRender(req, res) {
  const store = configureStore()
  const context = {}

  const html = renderToString(
    <Provider store={store}>
      <StaticRouter
        location={req.url}
        context={context}
      >
        <App />
      </StaticRouter>
    </Provider>
  )

  const preloadedState = store.getState()

  res.send(renderFullPage(html, preloadedState))
}

function renderFullPage(html, preloadedState) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <div id="root">${html}</div>
    <script>
      window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g), '\\u003c'}
    </script>
    <script src="http://localhost:8080/bundle.js"></script>
</body>
</html>
`
}

app.listen(PORT, () => console.log(`app listeining on port ${PORT}`))
