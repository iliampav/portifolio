import styles from './styles.module.scss'
import Image from 'next/image'

import react from '@/public/assets/img/about/reacticon.png'


export default function Experience() {
    return (
        <section className={styles.experience}>
            <div className={styles.experienceContainer}>
                <p>For the last 8 years I’ve been 
                    sharpening my skills in 
                    design, digital marketing,
                    seo and, more recently <br />
                    <strong> building products for web.</strong>
                </p>
                <div className={styles.bgImg}>
                </div>
                <div className={styles.reacticon}>
                    <Image
                        src={react}
                        alt="Picture of the author"
                        layout="fill" 
                    />
                </div>
                <div className={styles.greensockicon}>
                    <Image
                        src={react}
                        alt="Picture of the author"
                        layout="fill" 
                    />
                </div>
                <div className={styles.nodeicon}>
                    <Image
                        src={react}
                        alt="Picture of the author"
                        layout="fill" 
                    />
                </div>
            </div>
        </section>
    )
}