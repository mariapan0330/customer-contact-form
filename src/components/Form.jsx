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
    <div id="form">
        <form action="" onSubmit={handleSubmit}>
            <h1>Name</h1>
            <input type='text' id='nameInput' name='name' placeholder='Name' />
            <h1>Email</h1>
            <input type='text' id='emailInput' name='email' placeholder='Email' />
            <h1>Question/Comment</h1>
            <input type='text' id='commentInput' name='comment' placeholder='Question/Comment' />
            <br />
            <p onClick={() => setChecked(!checked)}>
                <input type='checkbox' id='receiveEmails' name='receiveEmails' checked={checked} value={checked}/>
                Receive marketing emails
            </p>

            <br />
            <input type='Submit' id='submitButton' defaultValue='Submit' />
            {showErrorMsg && errorMsg}
        </form>
    </div>
  )
}
