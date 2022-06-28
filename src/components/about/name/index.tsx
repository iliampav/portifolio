import styles from './styles.module.scss'
import Avatar from '@/public/assets/img/about/avatar.svg'
import Yoda from '@/public/assets/img/about/yoda.svg'
import Dice from '@/public/assets/img/about/dice.svg'
import Controller from '@/public/assets/img/about/controller.svg'
import Phone from '@/public/assets/img/about/phone.svg'
import Ghost from '@/public/assets/img/about/ghost.svg'

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
                        <Yoda />
                        <Dice />
                        <Controller />
                        <Phone />
                        <Ghost />
                    </div>
                </div>
            </div>
        </section>
    )
}