import CafebannerAnimation from './cafeanimation';
import CafebannerBg from '@/public/assets/img/home/bannerimages/bannercafe.svg'
import styles from './style.module.scss'

export default function bannerAstro() {

    return(
        <div className={styles.dynamicBanner}>
            <CafebannerBg />
            <CafebannerAnimation/>
        </div>
    )
}
