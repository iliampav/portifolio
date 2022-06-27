import Image from 'next/image'
import { useEffect, useRef } from 'react'

import styles from './style.module.scss'

import itxPic from '@/public/assets/img/home/projectssection/itximg.png'
import signatureImg from '@/public/assets/img/home/projectssection/signatureimg.png'
import tincoimg from '@/public/assets/img/home/projectssection/tincoimg.png'
import yahcafeimg from '@/public/assets/img/home/projectssection/yahcafeimg.png'

import gsap from "gsap";

export default function Projects() {

    const slider = useRef(null)

    const zoomIn = (e:React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        
        gsap.to(e.currentTarget, { scale: 1.2, width: '-=35%', height: '+=20%'})
    }

    const zoomOut = (e:React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        
        gsap.to(e.currentTarget, {scale: 1.0, width: '+=35%', height: '-=20%' })
    }

    const changeCarrousselImg = (e:React.MouseEvent<HTMLElement>) => {
        e.preventDefault()

        const bannerPostion = e.currentTarget.dataset.position

        switch(bannerPostion) {
            case 'center':
                console.log('banner ativo')
                break;
            case 'left':
                console.log('banner left')
                break;
            case 'right':
                console.log('banner right')
                break;
        }
    }

    // test carroussel

    return (
        <section className={styles.projectsSection}
                onMouseEnter={zoomIn}
                onMouseLeave={zoomOut}
                ref={slider}
                 >
            <a 
            className={styles.active}
            onClick={changeCarrousselImg}
            data-position='center'
                >
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
            <a id='signatureImg' className={styles.left}
            onClick={changeCarrousselImg}
            data-position='left'
                >
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
            <a id='tincoimg' className={styles.right}
            onClick={changeCarrousselImg}
            data-position='right'
                > 
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
            <a id='yahcafeimg' className={styles.last}
            onClick={changeCarrousselImg}
            data-position='none'>
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
            <a className={styles.nextBanner}
               data-position='right'
            ></a>
            <a className={styles.prevBanner}
               data-position='left'
            ></a>
        </section>
    )
}
