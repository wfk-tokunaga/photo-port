import React, {useState} from "react";
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
    // const [stateValue, updateStateValueFn] = useState(initialState);
    const [formState, setFormState] = useState({name: '', email: '', message: ''});
    const { name, email, message } = formState;

    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(event) {
        if (event.target.name === 'email') {
            const isValid = validateEmail(event.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!event.target.value.length) {
                setErrorMessage(`${event.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }

        // Only set the form state if there's no errors
        if(!errorMessage) {
            setFormState({...formState, [event.target.name]: event.target.value})
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(formState);
    }

    return (
        <section>
            <h1 data-testid="contact">Contact me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                {/* name */}
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" defaultValue={name} onBlur={handleChange}/>
                </div>
                {/* email input */}
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" name="email" defaultValue={email} onBlur={handleChange}/>
                </div>
                {/* message text area */}
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange}/>
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button type="submit" data-testid="submit">Submit</button>
            </form>
        </section>
    )
}

export default ContactForm;