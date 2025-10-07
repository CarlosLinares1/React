import styles from "./Card.module.scss"

const Card = () => {
  return (
    <div className={styles.card}>
      <img src="/assets/clash.png" alt="Clash of Clans" className={styles.image} />

      <div className={styles.body}>
        <h3 className={styles.title}>Clash of Clans</h3>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo odio fuga quae consequuntur optio rem...
        </p>
        <button className={styles.button}>Leer más</button>
      </div>
    </div>
  )
}

export default Card
