import Cruze from '@/public/assets/img/bannerimages/sail/cruze.svg'
import WaveBoat from '@/public/assets/img/bannerimages/sail/wave1.svg'
import PavkoLogo from '@/public/assets/img/bannerimages/sail/pavko.svg'
import Bird from '@/public/assets/img/bannerimages/sail/birds.svg'
import WaveBeach from '@/public/assets/img/bannerimages/sail/wave2.svg'
import Fish from '@/public/assets/img/bannerimages/sail/fish.svg'
import Turtle from '@/public/assets/img/bannerimages/sail/turtle.svg'
import Boat from '@/public/assets/img/bannerimages/sail/group.svg'
import Boatsmall from '@/public/assets/img/bannerimages/sail/boat2.svg'
import Girlsea from '@/public/assets/img/bannerimages/sail/girlsea.svg'
import styles from './styles.module.scss';

export default function sailAnimation() {
    return (
        <>
            <div className={styles.cruzeAnimation}>
                <div className={styles.animationborder}>
                    <Cruze className={styles.cruzePosition}/>
                    <WaveBoat className={styles.boatwaves}/>
                    <PavkoLogo className={styles.pavkoLogo} />
                </div>
            </div>
            <div className={`${styles.cruzeAnimation} ${styles.bottom}`}>
                <div className={styles.animationborder}>
                    <div className={styles.sailBirds}>
                        <Bird />
                        <Bird />
                        <Bird />
                    </div>
                    <WaveBeach className={styles.wavesBeach}/>
                    <Fish className={styles.fish}/>
                    <Turtle className={styles.turtle}/>
                    <Boat className={styles.boat}/>
                    <Boatsmall className={styles.boatsmall}/>
                    <Girlsea className={styles.girlsea}/>
                </div>

            </div>
        </>
    )
}