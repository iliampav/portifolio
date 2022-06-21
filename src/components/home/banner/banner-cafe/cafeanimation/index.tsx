import React from "react"
import styles from './style.module.scss'
import CafeLetter from '@/public/assets/img/bannerimages/cafe/cafe_letter.svg'
import PavkoBorder from '@/public/assets/img/bannerimages/cafe/pavko_border.svg'
import Pavko from '@/public/assets/img/bannerimages/cafe/pavko.svg'
import PavkoBorderIpad from '@/public/assets/img/bannerimages/cafe/pavko_border_ipad.svg'
import PavkoIpad from '@/public/assets/img/bannerimages/cafe/pavko_ipad.svg'
import CafeGirl from '@/public/assets/img/bannerimages/cafe/girl.svg'


export default function bannerCafeAnimation() {
    
    return(

        <div className={styles.cafebanner}>
            <div className={styles.bannerName}>
                <PavkoBorder className={styles.mobile}/>
                <Pavko className={`${styles.mobile} ${styles.pavkofont}`}/>
                <PavkoBorderIpad className={styles.ipad}/>
                <PavkoIpad className={`${styles.ipad} ${styles.pavkofont}`}/>
            </div>
            <CafeLetter className={styles.cafeLetter} />
            <CafeGirl className={styles.girlcafe}/>
        </div>

    )
}
