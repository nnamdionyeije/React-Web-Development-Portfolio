// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React, {useState} from 'react';
import {validateEmail } from '../../utils/helpers';

import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {


    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

  const [state, handleSubmit] = useForm("meqyykvz");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setUserName(inputValue);
    } else {
        setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !userName) {
      setErrorMessage('Email or name is invalid');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }
    alert(`Hello ${userName}`)

    setUserName('');
    setEmail('');
    setMessage('');

  };

  return (
    <div className='container'>
        <h2> Contact Me</h2>

            <form className='contact-form' onSubmit={handleSubmit}>
                <div className='form-group'>
                    <input
                        value={userName}
                        name="userName"
                        onChange={handleInputChange}
                        className='form-control'
                        type="text"
                        placeholder="name"
                    />
                </div>
                
                
                <div className='form-group'>
                    <input
                        value={email}
                        name="email"
                        onChange={handleInputChange}
                        className='form-control'
                        type="email"
                        placeholder="email"
                    />
                </div>

                <div className='form-group'>
                    <textarea
                        value={message}
                        name="message"
                        onChange={handleInputChange}
                        className='form-control'
                        rows="5"
                        type="textarea"
                        placeholder="message"
                    />
                </div>
                
                <button type="submit" disabled={state.submitting} className='btn btn-primary'>Submit</button>
            </form>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
        
    </div>    
);
}

function App() {
  return (
    <ContactForm />
  );
}

export default App;