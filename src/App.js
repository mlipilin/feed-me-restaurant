import PropTypes from 'prop-types'
import { Router, Route, useParams } from 'react-router-dom'
import { createHashHistory } from 'history'

import styles from './App.module.scss'

const defaultHistory = createHashHistory()

function Restaurant() {
  const params = useParams()

  const { id } = params

  return (
    <div className={styles.Restaurant}>
      <h1 className={styles.Restaurant__Title}>Restaurant #{id}</h1>
      <h2 className={styles.Restaurant__Subtitle}>Menu</h2>
      <ul className={styles.Restaurant__Dishes}>
        <li className={styles.Restaurant__DishesItem}>
          <div className={styles.Restaurant__DishesItemPrice}>$7</div>
          <div className={styles.Restaurant__DishesItemName}>BLT</div>
        </li>
        <li className={styles.Restaurant__DishesItem}>
          <div className={styles.Restaurant__DishesItemPrice}>$8</div>
          <div className={styles.Restaurant__DishesItemName}>
            Warm chicken sandwich
          </div>
        </li>
        <li className={styles.Restaurant__DishesItem}>
          <div className={styles.Restaurant__DishesItemPrice}>$9</div>
          <div className={styles.Restaurant__DishesItemName}>
            Chicken caesar salad
          </div>
        </li>
      </ul>
    </div>
  )
}

function App({ history = defaultHistory }) {
  return (
    <Router history={history}>
      <Route path="/restaurant/:id">
        <div className={styles.App}>
          <Restaurant />
        </div>
      </Route>
    </Router>
  )
}

App.propTypes = {
  history: PropTypes.object,
}

export default App
