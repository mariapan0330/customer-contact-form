import React, { useState } from 'react'
import './Form.css'


export default function Form(props) {
    const [checked, setChecked] = useState(true)
    const [showErrorMsg, setShowErrorMsg] = useState(false)
    const [errorMsg, setErrorMsg] = useState(<></>)


    const handleSubmit = (e) => {
        // TODO:
        // Don't submit empty or partially filled out forms
        // validate email regex tho no need to verify email
        // Set up info to send to an API (incl time/day)
        // pls make prettier for the love of everything

        e.preventDefault()
        props.setShowModal(true)
        props.setUsername(e.target.name.value)
        e.target.reset()
    }


  return (
    <>
    <div className="form123">
        <div id="form" className='form-container'>
            <div className='card'>
                <form action="" onSubmit={handleSubmit} className='contact-form'>
                    <h1>Name</h1>
                    <input class='form-input' type='text' id='nameInput' name='name' placeholder='Name' />
                    <h1>Email</h1>
                    <input class='form-input' type='text' id='emailInput' name='email' placeholder='Email' />
                    <h1>Question/Comment</h1>
                    <textarea id='commentInput' rows='7' name='comment' placeholder='Question/comment'></textarea>
                    <br />
                    <p onClick={() => setChecked(!checked)}>
                        <input type='checkbox' id='receiveEmails' name='receiveEmails' checked={checked} value={checked}/>
                        Receive marketing emails
                    </p>
                    <input type='submit' id='submitBtn' defaultValue='Submit' />
                    {showErrorMsg && errorMsg}
                </form>
            </div>
        </div>
        </div>
    </>
  )
}
