import { FormEvent } from 'react';
import styles from './styles.module.scss'

interface FormElements extends HTMLFormControlsCollection {
    name: HTMLInputElement; 
    email: HTMLInputElement; 
    message: HTMLInputElement 
  }
  interface ContactFormElement extends HTMLFormElement {
    readonly elements: FormElements
  }

export default function Footer() {
    
    const handleSubmit = async (event: FormEvent<ContactFormElement>) => {

      event.preventDefault()

      const data = {
        name: event.currentTarget.elements.name.value,
        email: event.currentTarget.elements.email.value,
        message: event.currentTarget.elements.message.value,
      }
  
      const JSONdata = JSON.stringify(data)
      console.log("JSON", JSONdata)
      const endpoint = '/api/contact-form'
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSONdata,
      }
  
      const response = await fetch(endpoint, options)
      const { error } = await response.json();

      if (error) {
        console.log(error);
        return;
      }
    }

    return (
        <footer className={styles.footer}>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" placeholder='Enter yout full name' required/>
                </div>
                <div>
                    <label htmlFor="email">E-mail</label>
                    <input type="email" id="email" name="email" placeholder='Enter your E-mail' required/>
                </div>
                <div>
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" placeholder='Enter your message' required></textarea>
                </div>
                <button type='submit'> Submit </button>
            </form>

            <div>
                <h1>Developed by <strong>PAVKO</strong></h1>
            </div>
        </footer>
    )
}