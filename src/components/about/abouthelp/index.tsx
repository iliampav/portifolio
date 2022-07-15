import styles from './styles.module.scss'

import Letter from '@/public/assets/img/about/letter.svg'

export default function Teamwork() {
    return (
        <section className={styles.aboutHelp}>
            <h1>
                Want my help with something?
            </h1>
            <Letter />
            <p>
                Get in touch via the form below, 
                or by emailing  
            </p>
            <h3>iliamfer@hotmail.com</h3>
        </section>
    )
}