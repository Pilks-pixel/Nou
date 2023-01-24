import utilStyles from '../../styles/utils.module.css'
import styles from './service.module.css'


const Service = () => {

  return (
    <div className={utilStyles.container}>
        <h2 className={utilStyles.sectionTitle}>Services</h2>

        <div className={styles.designService}>
            <h3>01/ Logo Design</h3>
            <p>includes</p>
        </div>
        <div className={styles.designService}>
            <h3>02/ Full Brand Design</h3>
            <p>includes</p>
        </div>
        <div className={styles.designService}>
            <h3>03/ Web Design</h3>
            <p>includes</p>
        </div>

    </div>
  )
}

export default Service