import styles from './styles.module.scss'

import TeamWork from '@/public/assets/img/about/teamworking.svg'

export default function Teamwork() {
    return (
        <section className={styles.teamwork}>
            <div className={styles.title}>
                <h1>TEAM</h1>
                <h1>WORK</h1>
            </div>
            <div>
                <TeamWork />
            </div>
            <h1>
                I’ve worked with small and
                large development teams 
                using git and Scrum.
            </h1>
        </section>
    )
}