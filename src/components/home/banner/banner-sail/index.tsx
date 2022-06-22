import SailAnimation from './sailanimation';
import SailBannerBg from '@/public/assets/img/home/bannerimages/sailbanner.svg';
import styles from './styles.module.scss';

export default function sailBanner() {
    return (
        <div className={styles.dynamicBanner}>
            <SailBannerBg />
            <SailAnimation />
        </div>
    )
}