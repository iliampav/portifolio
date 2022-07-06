import styles from './styles.module.scss'
import Aim from '@/public/assets/img/about/principles/aim.svg'
import Lights from '@/public/assets/img/about/principles/lights.svg'
import Velocity from '@/public/assets/img/about/principles/velocity.svg'
import Inovation from '@/public/assets/img/about/principles/inovation.svg'

export default function Principles() {
    return (
        <section className={styles.principles}>
            <h1>Principles</h1>
            <h2>witch guide me</h2>
            <div className={styles.principlesbox}>
                <div></div>
                <div>
                    <Aim />
                    <div>
                        <h4>
                            My clients needs are
                        </h4>
                        <h4>
                            <strong>paramount.</strong>
                        </h4>
                    </div>
                </div>
                <p>
                    I want to fully understand the client needs, transforming the idea to a live project.
                </p>
                <svg className={styles.clients} width="207" height="123" viewBox="0 0 207 123" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.74176 3.76728C9.56908 3.81012 10.2745 3.17419 10.3173 2.34687C10.3602 1.51955 9.72425 0.81414 8.89693 0.771292L8.74176 3.76728ZM24.7014 2.07414C23.8781 1.98251 23.1363 2.57569 23.0447 3.39904C22.9531 4.22238 23.5463 4.96411 24.3696 5.05573L24.7014 2.07414ZM39.8521 7.18961C40.6696 7.3236 41.441 6.76949 41.575 5.95197C41.709 5.13446 41.1548 4.3631 40.3373 4.22911L39.8521 7.18961ZM55.8666 7.17321C55.0568 6.99874 54.2588 7.51381 54.0844 8.32366C53.9099 9.1335 54.425 9.93145 55.2348 10.1059L55.8666 7.17321ZM70.455 13.7867C71.255 14.0017 72.0779 13.5275 72.293 12.7275C72.5081 11.9275 72.0339 11.1046 71.2339 10.8895L70.455 13.7867ZM86.3923 15.3935C85.6047 15.1364 84.7579 15.5664 84.5008 16.3539C84.2438 17.1415 84.6738 17.9883 85.4613 18.2454L86.3923 15.3935ZM100.195 23.5162C100.967 23.8175 101.837 23.4363 102.138 22.6646C102.439 21.893 102.058 21.0231 101.287 20.7217L100.195 23.5162ZM115.845 26.9261C115.094 26.5775 114.202 26.9041 113.853 27.6556C113.505 28.4071 113.831 29.2989 114.583 29.6476L115.845 26.9261ZM128.53 36.6979C129.256 37.0971 130.168 36.8324 130.568 36.1065C130.967 35.3807 130.702 34.4686 129.976 34.0693L128.53 36.6979ZM143.563 42.2195C142.87 41.7661 141.94 41.9606 141.486 42.6539C141.033 43.3473 141.228 44.2769 141.921 44.7303L143.563 42.2195ZM154.61 53.8055C155.262 54.3161 156.205 54.2013 156.715 53.5489C157.226 52.8966 157.111 51.9538 156.459 51.4432L154.61 53.8055ZM168.486 61.7921C167.885 61.2223 166.936 61.2479 166.366 61.8493C165.796 62.4506 165.822 63.4 166.423 63.9698L168.486 61.7921ZM177.163 75.2393C177.703 75.8681 178.65 75.9407 179.278 75.4014C179.907 74.8621 179.98 73.9151 179.44 73.2863L177.163 75.2393ZM189.104 85.8952C188.637 85.2105 187.704 85.0334 187.02 85.4996C186.335 85.9659 186.158 86.899 186.624 87.5837L189.104 85.8952ZM194.617 100.916C195.001 101.65 195.907 101.934 196.641 101.55C197.376 101.166 197.659 100.26 197.276 99.526L194.617 100.916ZM203.806 114.027C203.511 113.253 202.644 112.865 201.87 113.161C201.096 113.456 200.708 114.323 201.003 115.097L203.806 114.027ZM0.975983 3.49981C3.44237 3.5393 6.03546 3.62711 8.74176 3.76728L8.89693 0.771292C6.15658 0.629365 3.52773 0.540286 1.02402 0.500192L0.975983 3.49981ZM24.3696 5.05573C29.3205 5.60667 34.5003 6.31244 39.8521 7.18961L40.3373 4.22911C34.9343 3.34354 29.7033 2.63076 24.7014 2.07414L24.3696 5.05573ZM55.2348 10.1059C60.2285 11.1818 65.3152 12.4048 70.455 13.7867L71.2339 10.8895C66.0436 9.49414 60.9078 8.25929 55.8666 7.17321L55.2348 10.1059ZM85.4613 18.2454C90.3713 19.8482 95.2937 21.6019 100.195 23.5162L101.287 20.7217C96.3295 18.7858 91.3535 17.013 86.3923 15.3935L85.4613 18.2454ZM114.583 29.6476C119.294 31.8332 123.954 34.1803 128.53 36.6979L129.976 34.0693C125.336 31.5169 120.615 29.139 115.845 26.9261L114.583 29.6476ZM141.921 44.7303C146.273 47.5761 150.512 50.5984 154.61 53.8055L156.459 51.4432C152.291 48.1808 147.982 45.1093 143.563 42.2195L141.921 44.7303ZM166.423 63.9698C170.183 67.5325 173.773 71.2862 177.163 75.2393L179.44 73.2863C175.98 69.2511 172.318 65.4227 168.486 61.7921L166.423 63.9698ZM186.624 87.5837C189.514 91.8272 192.187 96.2687 194.617 100.916L197.276 99.526C194.79 94.7732 192.057 90.2323 189.104 85.8952L186.624 87.5837ZM201.003 115.097C201.921 117.5 202.777 119.952 203.57 122.453L206.43 121.547C205.62 118.99 204.744 116.484 203.806 114.027L201.003 115.097Z" fill="#01375E"/>
                </svg>
            </div>
            <div className={`${styles.principlesbox} ${styles.extraBox}`}></div>
            <div className={`${styles.principlesbox} ${styles.extraBox}`}></div>
            <div className={styles.principlesbox}>
                <div></div>
                <div>
                    <Lights />
                    <div>
                        <h4>
                            Always be learning, 
                        </h4>
                        <h4>
                            especially from 
                        </h4>
                        <h4>
                            <strong>mistakes.</strong>
                        </h4>
                    </div>
                </div>
                <p>
                    When we learn from mistakes, better projects are ahead.
                </p>
                <svg className={styles.always} width="181" height="134" viewBox="0 0 181 134" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 131.5C61.1667 133.5 179.5 110.4 179.5 2" stroke="#01375E" stroke-width="3" stroke-linecap="round" strokeDasharray="15 15"/>
                </svg>
            </div>
            <div className={styles.principlesbox}>
                <div></div>
                <div>
                    <Velocity />
                    <div>
                        <h4>
                            Webflow and UX 
                        </h4>
                        <h4>
                            <strong>are a must.</strong>
                        </h4>
                    </div>
                </div>
                <p>
                    Research, refine, rebuild and test. I like to repeat this move until I get closer to “simplicity”
                </p>
                <svg className={styles.webflow} width="181" height="134" viewBox="0 0 181 134" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 131.5C61.1667 133.5 179.5 110.4 179.5 2" stroke="#01375E" stroke-width="3" stroke-linecap="round" strokeDasharray="15 15"/>
                </svg>
            </div>
            <div className={`${styles.principlesbox} ${styles.extraBox}`}></div>
            <div className={`${styles.principlesbox} ${styles.extraBox}`}></div>
            <div className={styles.principlesbox}>
                <div></div>
                <div>
                    <Inovation />
                    <div>
                        <h4>
                            Innovate to improve
                        </h4>
                        <h4>
                            <strong>outcomes.</strong>
                        </h4>
                    </div>
                </div>
                <p>
                    I never stop learning and looking for new techs to improve quality and performance.
                </p>
            </div>
        </section>
    )
}