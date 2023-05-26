import React, { useState, useEffect } from 'react'
import './Form.css'


export default function Form(props) {
    const [checked, setChecked] = useState(true)
    const [showErrorMsg, setShowErrorMsg] = useState(false)
    const [errorMsg, setErrorMsg] = useState()

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [comment, setComment] = useState()
    const [optIn, setOptIn] = useState()
    
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
    
    useEffect(()=>{
        if (name && isEmailValid(email) && comment){
            setShowErrorMsg(false)
        }
    }, [name, comment, email])

    const postData = () => {
        var formData = JSON.stringify({
            name: name,
            email: email,
            comment: comment
        })
        // === send post request to an API here ===
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        var name = e.target.name.value
        var email = e.target.email.value
        var comment = e.target.comment.value
        
        // validate email
        var valid = isEmailValid(email)

        if (!name || !email || !comment) {
            setShowErrorMsg(true)
            setErrorMsg(p => <div id="error-msg">Please fill out all fields.</div>);
            if (!name) setNameBorder(errorBorder)
            if (!email) setEmailBorder(errorBorder)
            if (!comment) setCommentBorder(errorBorder)
        } else if (!valid) {
            setShowErrorMsg(true)
            setErrorMsg(p => <div id="error-msg">Email is invalid.</div>)
            setEmailBorder(errorBorder)
        } else {
            postData()
            props.setShowModal(true)
            props.setUsername(name)
            e.target.reset()
            setChecked(true)
            setShowErrorMsg(false)
        }
    }


  return (
    <>
    <div id="form">
        <div className='form-container'>
            <div className='card'>
                <form action="" onSubmit={handleSubmit} className='contact-form'>
                    <h1>Name</h1>
                    <input 
                        className='form-input' 
                        type='text' 
                        id='nameInput' 
                        name='name' 
                        placeholder='Name' 
                        style={nameBorder} 
                        onChange={(e)=>{setName(e.target.value)}} />
                    <h1>Email</h1>
                    <input 
                        className='form-input' 
                        type='text' 
                        id='emailInput' 
                        name='email' 
                        placeholder='Email' 
                        style={emailBorder} 
                        onChange={(e)=>{setEmail(e.target.value)}} />

                    <h1>Question/Comment</h1>
                    <textarea 
                        id='commentInput' 
                        rows='7' 
                        name='comment' 
                        placeholder='Tell us what you think' 
                        style={commentBorder}
                        onChange={(e)=>{setComment(e.target.value)}}></textarea>
                    <br />
                    <p onClick={() => setChecked(!checked)}>
                        <input 
                            type='checkbox' 
                            id='receiveEmails' 
                            name='receiveEmails' 
                            checked={checked} 
                            value={checked} 
                            onChange={(e)=>{setOptIn(e.target.value)}} />
                        Receive marketing and offer emails
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
