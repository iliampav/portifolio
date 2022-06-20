import React from "react"
import styles from './style.module.scss'
import CafeLetter from '@/public/assets/img/bannerimages/cafe/cafe_letter.svg'
import PavkoBorder from '@/public/assets/img/bannerimages/cafe/pavko_border.svg'
import Pavko from '@/public/assets/img/bannerimages/cafe/pavko.svg'
import CafeGirl from '@/public/assets/img/bannerimages/cafe/girl.svg'


export default function bannerCafeAnimation() {
    
    return(

        <div className={styles.cafebanner}>
            <div className={styles.bannerName}>
                <PavkoBorder />
                <Pavko />
            </div>
            <CafeLetter className={styles.cafeLetter} />
            <CafeGirl className={styles.girlcafe}/>
        </div>

    )
}
