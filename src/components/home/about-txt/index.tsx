import styles from './style.module.scss'
import Link from 'next/link'

import AvatarAbout from '@/public/assets/img/home/about_image.svg'

export default function AboutHome() {
    return(
        <section className={styles.aboutHome}>
            <div className={styles.textAbout}>
                <h2>Hi, I'm <strong>Iliam Pavkovic </strong>(He/him)</h2>
                <h1>
                    Front-end developer. <br />
                    Designer.<br />
                    IT Guy.
                </h1>
                <p>Multidisciplinary person who hacks at UX|UI and development.</p>
                <p>Known for pixel perfect and web design animaton behind complex projects.</p>
                <p>Much funnier in real life.</p>

                <Link href="/about">
                    <a>
                        <u>
                            <strong>Learn more {'>'}</strong>
                        </u>
                    </a>
                </Link>
            </div>
            <div className={styles.imageAbout}>
                <AvatarAbout />
            </div>
        </section>
    )
}