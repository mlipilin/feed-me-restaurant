import styles from './App.module.scss'

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.Restaurant}>
        <h1 className={styles.Restaurant__Title}>Restaurant</h1>
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
    </div>
  )
}

export default App
