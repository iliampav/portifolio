import Image from 'next/image'

import styles from './style.module.scss'

import itxPic from '@/public/assets/img/home/projectssection/itximg.png'
import signatureImg from '@/public/assets/img/home/projectssection/signatureimg.png'
import tincoimg from '@/public/assets/img/home/projectssection/tincoimg.png'
import yahcafeimg from '@/public/assets/img/home/projectssection/yahcafeimg.png'
import { useEffect } from 'react'

export default function Projects() {

    return (
        <section className={styles.projectsSection}>
            <a id='itxpic'>
                <h1>PROJECT</h1>
                <h1>ITX</h1>
                <Image
                    src={itxPic}
                    alt="Picture of the author"
                    width="100%"
                    height="100%"
                    layout="fill" 
                />
            </a>
            <a id='signatureImg'>
                <h1>PROJECT</h1>
                <h1>SIGNATURE</h1>
                <Image
                    src={signatureImg}
                    alt="Picture of the author"
                    className={styles.imagecontainer}
                    width="100%"
                    height="100%"
                    layout="fill" 
                />
            </a>
            <a id='tincoimg'> 
                <h1>PROJECT</h1>
                <h1>TINCO</h1>
                <Image
                    src={tincoimg}
                    alt="Picture of the author"
                    width="100%"
                    height="100%"
                    layout="fill" 
                />
            </a>
            <a id='yahcafeimg'>
                <h1>PROJECT</h1>
                <h1>YAH CAFÉ</h1>
                <Image
                    src={yahcafeimg}
                    alt="Picture of the author"
                    width="100%"
                    height="100%"
                    layout="fill" 
                />
            </a>
        </section>
    )
}
