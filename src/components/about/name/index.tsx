import Avatar from '@/public/assets/img/about/avatar.svg'
import styles from './styles.module.scss'

export default function Name() {
    return (
        <section className={styles.namesection}>
            <div className={styles.namecontainer}>
                <div className={styles.nametxt}>
                    <h2>Hi, I&apos;m <strong>Iliam Pavkovic, </strong>but you can just call me</h2>
                    <h1><strong>Iliam.</strong></h1>
                </div>
                <div className={styles.namevectors}>
                    <Avatar />
                    <div className={styles.nameicons}>
                    
                    </div>
                </div>
            </div>
        </section>
    )
}