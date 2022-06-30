import Image from 'next/image'

import styles from './styles.module.scss'
import node from '@/public/assets/img/about/tilanguages/nodejs.png'
import reactjs from '@/public/assets/img/about/tilanguages/reactjs.png'
import html from '@/public/assets/img/about/tilanguages/html5.png'
import css from '@/public/assets/img/about/tilanguages/css3.png'
import typescript from '@/public/assets/img/about/tilanguages/typescript.png'
import javascript from '@/public/assets/img/about/tilanguages/javascript.png'
import sass from '@/public/assets/img/about/tilanguages/sass.png'
import styledcomponents from '@/public/assets/img/about/tilanguages/styledcomponents.png'
import greensock from '@/public/assets/img/about/tilanguages/greensock.png'
import bootstrap from '@/public/assets/img/about/tilanguages/bootstrap.png'

export default function AwesomeTools() {
    return (
        <section className={styles.toolssection}>
            <div className={styles.toolscontainer}>
                <div className={styles.toolstxt}>
                    <h2>Passionate to work as a 
                        Front-end developer 
                        with awesome tools.</h2>
                </div>
                <div className={styles.toolsvectors}>
                    <div>
                        <Image 
                            src={node}
                            alt="Picture of the author"
                            layout="fill" 
                        />
                    </div>
                    <div>
                        <Image 
                            src={reactjs}
                            alt="Picture of the author"
                            layout="fill" 
                        />
                    </div>
                    <div>
                        <Image 
                            src={html}
                            alt="Picture of the author"
                            layout="fill" 
                        />
                    </div>
                    <div>
                        <Image 
                            src={css}
                            alt="Picture of the author"
                            layout="fill" 
                        />
                    </div>
                    <div>
                        <Image 
                            src={typescript}
                            alt="Picture of the author"
                            layout="fill" 
                        />
                    </div>
                    <div>
                        <Image 
                            src={javascript}
                            alt="Picture of the author"
                            layout="fill" 
                        />
                    </div>
                    <div>
                        <Image 
                            src={sass}
                            alt="Picture of the author"
                            layout="fill" 
                        />
                    </div>
                    <div>
                        <Image 
                            src={styledcomponents}
                            alt="Picture of the author"
                            layout="fill" 
                        />
                    </div>
                    <div>
                        <Image 
                            src={greensock}
                            alt="Picture of the author"
                            layout="fill" 
                        />
                    </div>
                    <div>
                        <Image 
                            src={bootstrap}
                            alt="Picture of the author"
                            layout="fill" 
                        />
                    </div> 
                </div>
            </div>
        </section>
    )
}