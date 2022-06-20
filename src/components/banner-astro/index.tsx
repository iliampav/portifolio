import Astrobanner from '../astrobannermovement';
import AstrobannerBg from '../../../public/assets/img/astrobannerbg.svg'
import styles from './styles.module.scss'

export default function bannerAstro() {

    return(
        <div>
            <AstrobannerBg />
            <Astrobanner/>
        </div>
    )
}
