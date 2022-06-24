import Image from 'next/image'
import { useEffect, useRef } from 'react'
import Draggable from 'gsap/Draggable'

import styles from './style.module.scss'

import itxPic from '@/public/assets/img/home/projectssection/itximg.png'
import signatureImg from '@/public/assets/img/home/projectssection/signatureimg.png'
import tincoimg from '@/public/assets/img/home/projectssection/tincoimg.png'
import yahcafeimg from '@/public/assets/img/home/projectssection/yahcafeimg.png'

import gsap from 'gsap'

gsap.registerPlugin(Draggable);

export default function Projects() {

    // const itxpic = useRef<HTMLAnchorElement>(null)

    const zoomIn = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        
        gsap.to(e.currentTarget, {
            scale: 1.2, 
            width: '-=35%'
        })
    }

    const zoomOut = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        
        gsap.to(e.currentTarget, {scale: 1.0, width: '+=35%', })
    }

    const sliderRef = useRef(null);

    // test carroussel

    useEffect(() => {
        console.log(sliderRef.current.clientWidth, sliderRef.current.innerWidth);
        Draggable.create(sliderRef.current, {
          type: "x",
          bounds: {
            minX: -sliderRef.current.clientWidth + window.innerWidth * 0.88,
            maxX: 0
          }
        });
    }, []);

    return (
        <section className={styles.projectsSection}
                onMouseEnter={zoomIn}
                onMouseLeave={zoomOut}
                 >
            <a 
            className={styles.active}>
            {/* onMouseEnter={zoomOut}> */}
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
            <a id='signatureImg' className={styles.left}>
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
            <a id='tincoimg' className={styles.right}> 
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
            <a id='yahcafeimg' className={styles.last}>
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
