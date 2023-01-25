import styles from './featured.module.css'
import utilStyles from '../../styles/utils.module.css'
import Image from 'next/legacy/image'

const Featured = () => {

  return (
      <div className={styles.projectContainer}>
        <div className={styles.imageWrapper}>
          <Image 
          src='/silk_28.png' 
          height={430} 
          width={270} 
          />
        </div>  
        <span className={styles.projectName}>silk & sense</span>
        <span className={styles.projectType}>logo</span>
      </div>



  )
}

export default Featured;