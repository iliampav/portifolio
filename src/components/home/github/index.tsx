import Link from 'next/link'
import styles from './styles.module.scss'

export default function Github() {
    return (
        <section className={styles.githubSection}>
            <svg width="62" height="60" viewBox="0 0 62 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M31 0C13.8725 0 0 13.7646 0 30.7588C0 44.3696 8.87375 55.8657 21.1962 59.9412C22.7463 60.2104 23.3275 59.2876 23.3275 58.4802C23.3275 57.7497 23.2888 55.3274 23.2888 52.7514C15.5 54.174 13.485 50.8674 12.865 49.1372C12.5162 48.2529 11.005 45.523 9.6875 44.7925C8.6025 44.2158 7.0525 42.7932 9.64875 42.7547C12.09 42.7163 13.8337 44.9848 14.415 45.9075C17.205 50.5598 21.6613 49.2526 23.4438 48.4451C23.715 46.4458 24.5287 45.1001 25.42 44.3311C18.5225 43.5622 11.315 40.9092 11.315 29.144C11.315 25.799 12.5162 23.0307 14.4925 20.8775C14.1825 20.1086 13.0975 16.9558 14.8025 12.7265C14.8025 12.7265 17.3988 11.919 23.3275 15.8792C25.8075 15.1872 28.4425 14.8411 31.0775 14.8411C33.7125 14.8411 36.3475 15.1872 38.8275 15.8792C44.7563 11.8806 47.3525 12.7265 47.3525 12.7265C49.0575 16.9558 47.9725 20.1086 47.6625 20.8775C49.6388 23.0307 50.84 25.7605 50.84 29.144C50.84 40.9477 43.5938 43.5622 36.6963 44.3311C37.82 45.2924 38.7887 47.1379 38.7887 50.0215C38.7887 54.1355 38.75 57.4421 38.75 58.4802C38.75 59.2876 39.3312 60.2488 40.8813 59.9412C47.0353 57.8799 52.3829 53.9555 56.1714 48.7205C59.9598 43.4855 61.9983 37.2036 62 30.7588C62 13.7646 48.1275 0 31 0Z" fill="white"/>
            </svg>
            <h1>
                My favorite github <strong>Repos</strong>
            </h1>
            <div className={styles.repoBox}>
                <h2>Expensif-app</h2>
                <div className={styles.language}>
                    <div className={styles.javascript}></div>
                    <p>javascript</p>
                </div>
                <div className={styles.gitBtn}>
                    <Link href='/'>
                        <a>
                            <svg width="66" height="60" viewBox="0 0 66 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M33.5007 49.2083L26.1155 41.5429V48.7862H26.1269L36.8803 59.9991L47.6451 48.7862H47.6565V41.5771L40.3169 49.2083L40.3282 41.5429H40.3169V33.1816H33.4551V39.6037L33.5007 49.2083Z" fill="white"/>
                                <path d="M57.6476 22.4373C57.8638 21.2852 57.989 20.0875 57.989 18.8669C57.989 8.45247 49.5683 0 39.1676 0C31.5776 0 25.0459 4.5057 22.0645 10.9962C20.5738 10.0951 18.8441 9.57034 16.9779 9.57034C11.7207 9.57034 7.43069 13.711 7.14621 18.9125C2.93586 20.7947 0 25.0266 0 29.9544C0 33.4221 1.45655 36.5475 3.77793 38.7491H28.4369V26.2243H44.0379V38.7491H63.4965C65.0555 37.0038 66 34.711 66 32.1787C66 27.2395 62.3814 23.1673 57.6476 22.4373Z" fill="white"/>
                            </svg>
                            <p>Download</p>
                        </a>
                    </Link>
                    <Link href='/'>
                        <a>
                            <svg width="65" height="59" viewBox="0 0 65 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M52.5944 19.7616L55.5666 0.807081L54.8147 0L35.4545 1.12754L35.4193 1.09193L0 34.3603L17.2104 53.0537L52.6297 19.7854L52.5944 19.7616ZM49.0231 5.74452C50.1862 7.01448 50.1157 8.99658 48.8587 10.1716C47.6017 11.3585 45.6398 11.2754 44.4768 10.0054C43.302 8.73547 43.3842 6.75337 44.6412 5.57835C45.8982 4.40334 47.8601 4.47455 49.0231 5.74452ZM18.2677 48.5554L4.54636 33.7312L28.265 11.3347L41.9863 26.1708L18.2677 48.5554Z" fill="white"/>
                                <path d="M61.9455 29.8506L64.9999 12.9019L64.3538 12.166L59.737 12.3322L58.8794 17.0678C58.9264 17.1153 58.9851 17.1509 59.0321 17.2103C60.0542 18.3734 59.9484 20.1537 58.7972 21.1863C57.6459 22.2189 55.8837 22.1121 54.8617 20.949C54.8382 20.9252 54.8264 20.9015 54.8147 20.8777L46.2506 28.5569L52.2889 35.3933L30.544 54.9888L24.4586 48.093L21.9211 50.3718L29.5102 59.0005L61.9808 29.8743L61.9455 29.8506Z" fill="white"/>
                            </svg>
                            <p>Clone</p>
                        </a>
                    </Link>
                    <Link href='/'>
                        <a>
                            <svg width="62" height="60" viewBox="0 0 62 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M31 0C13.8725 0 0 13.7646 0 30.7588C0 44.3696 8.87375 55.8657 21.1962 59.9412C22.7463 60.2104 23.3275 59.2876 23.3275 58.4802C23.3275 57.7497 23.2888 55.3274 23.2888 52.7514C15.5 54.174 13.485 50.8674 12.865 49.1372C12.5162 48.2529 11.005 45.523 9.6875 44.7925C8.6025 44.2158 7.0525 42.7932 9.64875 42.7547C12.09 42.7163 13.8337 44.9848 14.415 45.9075C17.205 50.5598 21.6613 49.2526 23.4438 48.4451C23.715 46.4458 24.5287 45.1001 25.42 44.3311C18.5225 43.5622 11.315 40.9092 11.315 29.144C11.315 25.799 12.5162 23.0307 14.4925 20.8775C14.1825 20.1086 13.0975 16.9558 14.8025 12.7265C14.8025 12.7265 17.3988 11.919 23.3275 15.8792C25.8075 15.1872 28.4425 14.8411 31.0775 14.8411C33.7125 14.8411 36.3475 15.1872 38.8275 15.8792C44.7563 11.8806 47.3525 12.7265 47.3525 12.7265C49.0575 16.9558 47.9725 20.1086 47.6625 20.8775C49.6388 23.0307 50.84 25.7605 50.84 29.144C50.84 40.9477 43.5938 43.5622 36.6963 44.3311C37.82 45.2924 38.7887 47.1379 38.7887 50.0215C38.7887 54.1355 38.75 57.4421 38.75 58.4802C38.75 59.2876 39.3312 60.2488 40.8813 59.9412C47.0353 57.8799 52.3829 53.9555 56.1714 48.7205C59.9598 43.4855 61.9983 37.2036 62 30.7588C62 13.7646 48.1275 0 31 0Z" fill="white"/>
                            </svg>
                            <p>Git Repo</p>
                        </a>
                    </Link>
                </div>
            </div>
            <div className={styles.repoBox}>
                <h2>Let me Ask</h2>
                <div className={styles.language}>
                    <div className={styles.typescript}></div>
                    <p>Typescript</p>
                </div>
                <div className={styles.gitBtn}>
                    <Link href='/'>
                        <a>
                            <svg width="66" height="60" viewBox="0 0 66 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M33.5007 49.2083L26.1155 41.5429V48.7862H26.1269L36.8803 59.9991L47.6451 48.7862H47.6565V41.5771L40.3169 49.2083L40.3282 41.5429H40.3169V33.1816H33.4551V39.6037L33.5007 49.2083Z" fill="white"/>
                                <path d="M57.6476 22.4373C57.8638 21.2852 57.989 20.0875 57.989 18.8669C57.989 8.45247 49.5683 0 39.1676 0C31.5776 0 25.0459 4.5057 22.0645 10.9962C20.5738 10.0951 18.8441 9.57034 16.9779 9.57034C11.7207 9.57034 7.43069 13.711 7.14621 18.9125C2.93586 20.7947 0 25.0266 0 29.9544C0 33.4221 1.45655 36.5475 3.77793 38.7491H28.4369V26.2243H44.0379V38.7491H63.4965C65.0555 37.0038 66 34.711 66 32.1787C66 27.2395 62.3814 23.1673 57.6476 22.4373Z" fill="white"/>
                            </svg>
                            <p>Download</p>
                        </a>
                    </Link>
                    <Link href='/'>
                        <a>
                            <svg width="65" height="59" viewBox="0 0 65 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M52.5944 19.7616L55.5666 0.807081L54.8147 0L35.4545 1.12754L35.4193 1.09193L0 34.3603L17.2104 53.0537L52.6297 19.7854L52.5944 19.7616ZM49.0231 5.74452C50.1862 7.01448 50.1157 8.99658 48.8587 10.1716C47.6017 11.3585 45.6398 11.2754 44.4768 10.0054C43.302 8.73547 43.3842 6.75337 44.6412 5.57835C45.8982 4.40334 47.8601 4.47455 49.0231 5.74452ZM18.2677 48.5554L4.54636 33.7312L28.265 11.3347L41.9863 26.1708L18.2677 48.5554Z" fill="white"/>
                                <path d="M61.9455 29.8506L64.9999 12.9019L64.3538 12.166L59.737 12.3322L58.8794 17.0678C58.9264 17.1153 58.9851 17.1509 59.0321 17.2103C60.0542 18.3734 59.9484 20.1537 58.7972 21.1863C57.6459 22.2189 55.8837 22.1121 54.8617 20.949C54.8382 20.9252 54.8264 20.9015 54.8147 20.8777L46.2506 28.5569L52.2889 35.3933L30.544 54.9888L24.4586 48.093L21.9211 50.3718L29.5102 59.0005L61.9808 29.8743L61.9455 29.8506Z" fill="white"/>
                            </svg>
                            <p>Clone</p>
                        </a>
                    </Link>
                    <Link href='/'>
                        <a>
                            <svg width="62" height="60" viewBox="0 0 62 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M31 0C13.8725 0 0 13.7646 0 30.7588C0 44.3696 8.87375 55.8657 21.1962 59.9412C22.7463 60.2104 23.3275 59.2876 23.3275 58.4802C23.3275 57.7497 23.2888 55.3274 23.2888 52.7514C15.5 54.174 13.485 50.8674 12.865 49.1372C12.5162 48.2529 11.005 45.523 9.6875 44.7925C8.6025 44.2158 7.0525 42.7932 9.64875 42.7547C12.09 42.7163 13.8337 44.9848 14.415 45.9075C17.205 50.5598 21.6613 49.2526 23.4438 48.4451C23.715 46.4458 24.5287 45.1001 25.42 44.3311C18.5225 43.5622 11.315 40.9092 11.315 29.144C11.315 25.799 12.5162 23.0307 14.4925 20.8775C14.1825 20.1086 13.0975 16.9558 14.8025 12.7265C14.8025 12.7265 17.3988 11.919 23.3275 15.8792C25.8075 15.1872 28.4425 14.8411 31.0775 14.8411C33.7125 14.8411 36.3475 15.1872 38.8275 15.8792C44.7563 11.8806 47.3525 12.7265 47.3525 12.7265C49.0575 16.9558 47.9725 20.1086 47.6625 20.8775C49.6388 23.0307 50.84 25.7605 50.84 29.144C50.84 40.9477 43.5938 43.5622 36.6963 44.3311C37.82 45.2924 38.7887 47.1379 38.7887 50.0215C38.7887 54.1355 38.75 57.4421 38.75 58.4802C38.75 59.2876 39.3312 60.2488 40.8813 59.9412C47.0353 57.8799 52.3829 53.9555 56.1714 48.7205C59.9598 43.4855 61.9983 37.2036 62 30.7588C62 13.7646 48.1275 0 31 0Z" fill="white"/>
                            </svg>
                            <p>Git Repo</p>
                        </a>
                    </Link>
                </div>
            </div>
            <p>
                Get in touch via the form below, 
                or by emailing  
            </p>
            <h3>hello@pavko.com.br</h3>
        </section>
    )
}