import Image from 'next/image'
import { useEffect, useRef } from 'react'

import styles from './style.module.scss'

import itxPic from '@/public/assets/img/home/projectssection/itximg.png'
import signatureImg from '@/public/assets/img/home/projectssection/signatureimg.png'
import tincoimg from '@/public/assets/img/home/projectssection/tincoimg.png'
import yahcafeimg from '@/public/assets/img/home/projectssection/yahcafeimg.png'

import gsap from "gsap";

let tlConfig: GSAPTimelineVars = {
  paused: true
};

export default function Projects() {

    // zoom functions
    
    const bannerContainer = useRef<HTMLHeadingElement>(null)

    const zoomAnimation = gsap.timeline(tlConfig).pause()

    useEffect(() => {
        zoomAnimation.to(bannerContainer.current, { scale: 1.2, width: '-=35%', height: '+=20%'})
    }, []);

    const zoomIn = (e:React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        zoomAnimation.play()
    }

    const zoomOut = (e:React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        zoomAnimation.reverse()
    }

    //carroussel functions
    const changeCarrousselImg = (e:React.MouseEvent<HTMLElement>) => {
        e.preventDefault()

        const bannerPostion = e.currentTarget.dataset.position
        const bannerLeft = document.querySelectorAll('[data-position~="left"]')[0]
        const bannerRight = document.querySelectorAll('[data-position~="right"]')[0]
        const bannerCenter = document.querySelectorAll('[data-position~="center"]')[0]
        const bannerNone = document.querySelectorAll('[data-position~="none"]')[0]

        const leftBanner = gsap.timeline(tlConfig)
              leftBanner.to(bannerLeft, {left: '+=100%', duration: 1}, 'together')
                        .to(bannerCenter, {left: '+=100%', duration: 1}, 'together')
                        .to(bannerRight, {left: '+=100%', duration: 1}, 'together')
                        .fromTo(bannerNone, {left: '-200%', duration: 0}, {left: '+=100%', duration: 1}, 'together')

        const rightBanner = gsap.timeline(tlConfig)
              rightBanner.to(bannerLeft, {left: '-=100%', duration: 1}, 'together')
                         .to(bannerCenter, {left: '-=100%', duration: 1}, 'together')
                         .to(bannerRight, {left: '-=100%', duration: 1}, 'together')
                         .fromTo(bannerNone, {left: '200%', duration: 0}, {left: '-=100%', duration: 1}, 'together')

        switch(bannerPostion) {
            case 'center':
                break;
            case 'left':
                leftBanner.play()
                bannerLeft.setAttribute("data-position", "center");
                bannerCenter.setAttribute("data-position", "right");
                bannerNone.setAttribute("data-position", "left");
                bannerRight.setAttribute("data-position", "none");
                break;
            case 'right':
                rightBanner.play()
                bannerLeft.setAttribute("data-position", "none");
                bannerCenter.setAttribute("data-position", "left");
                bannerNone.setAttribute("data-position", "right");
                bannerRight.setAttribute("data-position", "center");
                break;
        }
    }

    // criar funçoes para os botoes do mobile, pois estao com left e right, que devem ser corrigidos para nao dar conflito

    // end banners projects carroussel

    return (
        <section className={styles.projectsContainer}>
            <div ref={bannerContainer} className={styles.projectsSection}
                onMouseEnter={zoomIn}
                onMouseLeave={zoomOut}
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
                        layout="fill" 
                        priority={true}
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
                        layout="fill" 
                    />
                </a>
            </div>
            
            <a className={styles.nextBanner}
               onClick={changeCarrousselImg}
               data-position='right'
            >
                <svg width="44" height="71" viewBox="0 0 44 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M42.2765 35.3668L5.00586 1.9417C3.16287 0.288864 0.551526 2.79807 2.12954 4.70551L27.6791 35.5888C28.3089 36.3501 28.2884 37.4573 27.6307 38.1947L2.88159 65.9479C1.23397 67.7955 3.7504 70.3998 5.65342 68.8165L42.2203 38.3932C43.1583 37.6128 43.1849 36.1815 42.2765 35.3668Z" fill="white" stroke="#22A1C3" strokeWidth="2"/>
                </svg>

            </a>
            <a className={styles.prevBanner}
               onClick={changeCarrousselImg}
               data-position='left'
            >
                <svg width="44" height="71" viewBox="0 0 44 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.72354 35.6332L38.9941 69.0583C40.8371 70.7111 43.4485 68.2019 41.8705 66.2945L16.3209 35.4112C15.6911 34.6499 15.7116 33.5427 16.3693 32.8053L41.1184 5.05205C42.766 3.20445 40.2496 0.600172 38.3466 2.18347L1.7797 32.6068C0.841668 33.3872 0.81511 34.8185 1.72354 35.6332Z" fill="white" stroke="#22A1C3" strokeWidth="2"/>
                </svg>
            </a>
        </section>
    )
}

// cache upadate for vercel