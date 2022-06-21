import styles from './styles.module.scss'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <form action="">
                <div>
                    <label htmlFor="">Name</label>
                    <input type="text" placeholder='Enter yout full name'/>
                </div>
                <div>
                    <label htmlFor="">E-mail</label>
                    <input type="text" placeholder='Enter your E-mail'/>
                </div>
                <div>
                    <label htmlFor="">Message</label>
                    <textarea placeholder='Enter your message'></textarea>
                </div>
                <button type='submit'> Submit </button>
            </form>

            <div>
                <h1>Developed by <strong>PAVKO</strong></h1>
            </div>
        </footer>
    )
}