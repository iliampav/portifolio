import styles from './styles.module.scss'
import QuestionMark from '@/public/assets/img/about/questionmark.svg'
import Lightmark from '@/public/assets/img/about/lightmark.svg'

export default function Organized() {
    return (
        <section className={styles.organized}>
            <p> 
                Well-organized person,
                problem solver, independent 
                employee with high atention 
                to details.
            </p>
            <div className={styles.organizedBox}>
                <div className={styles.bigScreenLeft}>
                    <Lightmark />
                    <Lightmark />
                    <Lightmark />
                </div>
                <div className={styles.bgImg}></div>
                <div className={styles.bigScreenRight}>
                    <QuestionMark />
                    <QuestionMark />
                    <QuestionMark />
                </div>
            </div>
        </section>
    )
}