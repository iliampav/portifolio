import styles from './styles.module.scss'
import Node from '@/public/assets/img/about/tilanguages/nodejs.svg'
import Reactjs from '@/public/assets/img/about/tilanguages/reactjs.svg'
import Html from '@/public/assets/img/about/tilanguages/html5.svg'
import Css from '@/public/assets/img/about/tilanguages/css3.svg'
import Typescript from '@/public/assets/img/about/tilanguages/typescript.svg'
import Javascript from '@/public/assets/img/about/tilanguages/javascript.svg'
import Sass from '@/public/assets/img/about/tilanguages/sass.svg'
import Styledcomponents from '@/public/assets/img/about/tilanguages/styledcomponents.svg'
import Greensock from '@/public/assets/img/about/tilanguages/greensock.svg'
import Bootstrap from '@/public/assets/img/about/tilanguages/bootstrap.svg'

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
                        <Node/>
                    </div>
                    <div>
                    <Reactjs/>
                    </div>
                    <div>
                    <Html/>
                    </div>
                    <div>
                    <Css/>
                    </div>
                    <div>
                    <Typescript/>
                    </div>
                    <div>
                    <Javascript/>
                    </div>
                    <div>
                    <Sass/>
                    </div>
                    <div>
                    <Styledcomponents/>
                    </div>
                    <div>
                    <Greensock/>
                    </div>
                    <div>
                    <Bootstrap/>   
                    </div> 
                </div>
            </div>
        </section>
    )
}