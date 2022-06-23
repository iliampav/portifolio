import Image from 'next/image'

import styles from './style.module.scss'

import itxPic from '@/public/assets/img/home/projectssection/itximg.png'
import signatureImg from '@/public/assets/img/home/projectssection/signatureimg.png'
import tincoimg from '@/public/assets/img/home/projectssection/tincoimg.png'
import yahcafeimg from '@/public/assets/img/home/projectssection/yahcafeimg.png'

export default function Projects() {
    return (
        <section className={styles.projectsSection}>
            {/* <a id='itxpic'>
                <Image
                    src={itxPic}
                    alt="Picture of the author"
                    width="100%"
                    height="100%"
                    layout="fill" 
                />
            </a>
            <a id='signatureImg'>
                <Image
                    src={signatureImg}
                    alt="Picture of the author"
                    className={styles.imagecontainer}
                    width="100%"
                    height="100%"
                    layout="fill" 
                />
            </a> */}
            <a id='tincoimg'> 
                <h1>PROJECT</h1>
                <h1>SIGNATURE</h1>
                <Image
                    src={tincoimg}
                    alt="Picture of the author"
                    width="100%"
                    height="100%"
                    layout="fill" 
                />
            </a>
            {/* <a id='yahcafeimg'>
                <Image
                    src={yahcafeimg}
                    alt="Picture of the author"
                    width="100%"
                    height="100%"
                    layout="fill" 
                />
            </a> */}
        </section>
    )
}
