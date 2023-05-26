import React, { useState, useEffect } from 'react'
import './Form.css'


export default function Form(props) {
    const [checked, setChecked] = useState(true)
    const [showErrorMsg, setShowErrorMsg] = useState(false)
    const [errorMsg, setErrorMsg] = useState()

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [comment, setComment] = useState()
    
    const normalBorder = {border: "2px solid pink"}
    const errorBorder = {border: "3px dashed red"}
    const [nameBorder, setNameBorder] = useState(normalBorder)
    const [emailBorder, setEmailBorder] = useState(normalBorder)
    const [commentBorder, setCommentBorder] = useState(normalBorder)

    const isEmailValid = (email) => {
        return /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)
    }

    useEffect(() => {
        if (name) setNameBorder(normalBorder)
        if (comment) setCommentBorder(normalBorder)
    }, [name, comment])

    useEffect(()=>{
        if (isEmailValid(email)) setEmailBorder(normalBorder)
    }, [email])


    const handleSubmit = (e) => {
        e.preventDefault()
        let name = e.target.name.value
        let email = e.target.email.value
        let valid = isEmailValid(email)
        let comment = e.target.comment.value

        setShowErrorMsg(true)
        if (!valid) {
            setErrorMsg(p => <div id="error-msg">Email is invalid.</div>)
            setEmailBorder(errorBorder)
        }
        if (!name || !email || !comment) setErrorMsg(p => <div id="error-msg">Please fill out all fields.</div>);
        if (!name) setNameBorder(errorBorder)
        if (!email) setEmailBorder(errorBorder)
        if (!comment) setCommentBorder(errorBorder)


        if (name && isEmailValid && comment) {
            props.setShowModal(true)
            props.setUsername(name)
            e.target.reset()
        }
    }


  return (
    <>
    <div className="form123">
        <div id="form" className='form-container'>
            <div className='card'>
                <form action="" onSubmit={handleSubmit} className='contact-form'>
                    <h1>Name</h1>
                    <input class='form-input' type='text' id='nameInput' name='name' placeholder='Name' style={nameBorder} onChange={(e)=>{setName(e.target.value)}} />
                    <h1>Email</h1>
                    <input class='form-input' type='text' id='emailInput' name='email' placeholder='Email' style={emailBorder} onChange={(e)=>{setEmail(e.target.value)}} />
                    <h1>Question/Comment</h1>
                    <textarea id='commentInput' rows='7' name='comment' placeholder='Question/Comment' style={commentBorder} onChange={(e)=>{setComment(e.target.value)}}></textarea>
                    <br />
                    <p onClick={() => setChecked(!checked)}>
                        <input type='checkbox' id='receiveEmails' name='receiveEmails' checked={checked} value={checked}/>
                        Receive marketing emails
                    </p>
                    {showErrorMsg && errorMsg}
                    <br />
                    <input type='submit' id='submitBtn' defaultValue='Submit' />
                </form>
            </div>
        </div>
        </div>
    </>
  )
}
