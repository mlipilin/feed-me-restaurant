import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

window.renderRestaurant = (containerId) => {
  console.log('renderRestaurant', { containerId })
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById(containerId)
  )
  reportWebVitals()
}

window.unmountRestaurant = (containerId) => {
  console.log('unmountRestaurant', { containerId })
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId))
}
