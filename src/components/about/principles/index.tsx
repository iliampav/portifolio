import styles from './styles.module.scss'
import Aim from '@/public/assets/img/about/principles/aim.svg'
import Lights from '@/public/assets/img/about/principles/lights.svg'
import Velocity from '@/public/assets/img/about/principles/velocity.svg'
import Inovation from '@/public/assets/img/about/principles/inovation.svg'

export default function Principles() {
    return (
        <section className={styles.principles}>
            <h1>Principles</h1>
            <h2>witch guide me</h2>
            <div className={styles.principlesbox}>
                <div></div>
                <div>
                    <Aim />
                    <div>
                        <h4>
                            My clients needs are
                        </h4>
                        <h4>
                            <strong>paramount.</strong>
                        </h4>
                    </div>
                </div>
                <p>
                    I want to fully understand the client needs, transforming the idea to a live project.
                </p>
            </div>
            <div className={styles.principlesbox}>
                <div></div>
                <div>
                    <Lights />
                    <div>
                        <h4>
                            Always be learning, 
                        </h4>
                        <h4>
                            especially from 
                        </h4>
                        <h4>
                            <strong>mistakes.</strong>
                        </h4>
                    </div>
                </div>
                <p>
                    When we learn from mistakes, better projects are ahead.
                </p>
            </div>
            <div className={styles.principlesbox}>
                <div></div>
                <div>
                    <Velocity />
                    <div>
                        <h4>
                            Webflow and UX 
                        </h4>
                        <h4>
                            <strong>are a must.</strong>
                        </h4>
                    </div>
                </div>
                <p>
                    Research, refine, rebuild and test. I like to repeat this move until I get closer to “simplicity”
                </p>
            </div>
            <div className={styles.principlesbox}>
                <div></div>
                <div>
                    <Inovation />
                    <div>
                        <h4>
                            Innovate to improve
                        </h4>
                        <h4>
                            <strong>outcomes.</strong>
                        </h4>
                    </div>
                </div>
                <p>
                    I never stop learning and looking for new techs to improve quality and performance.
                </p>
            </div>
        </section>
    )
}