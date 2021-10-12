import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

window.renderRestaurant = (containerId, history) => {
  // console.log('renderRestaurant', { containerId, history })
  ReactDOM.render(
    <React.StrictMode>
      <App history={history} />
    </React.StrictMode>,
    document.getElementById(containerId)
  )
  reportWebVitals()
}

window.unmountRestaurant = (containerId) => {
  console.log('unmountRestaurant', {
    containerId,
    containerIdNode: document.getElementById(containerId),
  })
  const unmounted = ReactDOM.unmountComponentAtNode(
    document.getElementById(containerId)
  )
  return unmounted
}
