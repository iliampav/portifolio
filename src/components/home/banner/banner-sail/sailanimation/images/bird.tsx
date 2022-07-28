import {gsap, Back} from 'gsap'
import styles from '../styles.module.scss';
import { useEffect, useRef } from 'react'

let tlConfig: GSAPTimelineVars = {
    paused: true
};

export default function SailBanner() {

    const cruzeBoat = useRef<SVGSVGElement>(null)

    const cruzeTl = gsap.timeline(tlConfig).play()

    useEffect(() => {
        cruzeTl.from(cruzeBoat.current, { left: '100%', width: '-=5%', top: "50%", duration: 50})
               .to(cruzeBoat.current, { ease: Back.easeInOut.config(1), top: "-=10px", repeat:-1, duration:3.5, yoyo:true})
    }, [])

    return (
       <></>

    )
}

