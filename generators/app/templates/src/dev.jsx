import React from 'react'
import ReactDOM from 'react-dom'
import DevTools from 'mobx-react-devtools'
import { AppContainer } from 'react-hot-loader'
import TodoApp from './components/TodoApp'

import store from './store'

document.head.removeChild(document.querySelector('#splash-spinner'))
document.body.removeChild(document.querySelector('.spinner'))

render(TodoApp)

if (module.hot) {
  module.hot.accept('./components/TodoApp', () => {
    render(TodoApp)
  })
}

function render(Component) {
  ReactDOM.render(
    <AppContainer>
      <React.Fragment>
        <DevTools />
        <Component store={store} />
      </React.Fragment>
    </AppContainer>,
    document.getElementById('application')
  )
}
