import Cruze from './images/cruze'
import WaveBoat from './images/waveboat'
import Boat from './images/boat'
import PavkoLogo from '@/public/assets/img/home/bannerimages/sail/pavko.svg'
import Bird from '@/public/assets/img/home/bannerimages/sail/birds.svg'
import WaveBeach from '@/public/assets/img/home/bannerimages/sail/wave2.svg'
import Fish from '@/public/assets/img/home/bannerimages/sail/fish.svg'
import Turtle from '@/public/assets/img/home/bannerimages/sail/turtle.svg'
import Boatsmall from './images/smallBoat'
import Girlsea from './images/girlSea'
import styles from './styles.module.scss';

export default function sailAnimation() {

    return (
        <>
            <div className={styles.cruzeAnimation}>
                <div className={styles.animationborder}>
                    <WaveBoat/>
                    <Cruze/>
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
                    <Boat/>
                    <Boatsmall/>
                    <Girlsea/>
                </div>

            </div>
        </>
    )
}