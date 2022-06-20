import Cruze from '@/public/assets/img/bannerimages/sail/cruze.svg'
import WaveBoat from '@/public/assets/img/bannerimages/sail/wave1.svg'
import PavkoLogo from '@/public/assets/img/bannerimages/sail/pavko.svg'
import styles from './styles.module.scss';

export default function sailAnimation() {
    return (
        <div className={styles.cruzeAnimation}>
            <div className={styles.animationborder}>
                <Cruze className={styles.cruzePosition}/>
                <WaveBoat className={styles.boatwaves}/>
                <PavkoLogo className={styles.pavkoLogo} />
            </div>
        </div>
    )
}