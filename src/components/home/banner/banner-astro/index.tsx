import Astrobanner from './astroanimation';
import AstrobannerBg from '@/public/assets/img/home/bannerimages/astrobannerbg.svg';
import styles from './style.module.scss'

export default function bannerAstro() {

    return(
        <div className={styles.dynamicBanner}>
            <AstrobannerBg />
            <Astrobanner/>
        </div>
    )
}
