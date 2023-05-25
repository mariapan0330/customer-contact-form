import React, { useState } from 'react'
import './Form.css'


export default function Form(props) {

    const handleName = (e) => {
        e.preventDefault()
        props.setUsername(e.target.value)
        console.log(e.target.value)
    }

    const handleEmail = (e) => {
    }

    const handleComment = (e) => {
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.setShowModal(true)
        // props.setUsername(e.target.value)
    }


  return (
    <div id="form">
        <form action="">
            <h1>Name</h1>
            <input type='text' id='nameInput' placeholder='Name' defaultValue='' onChange={handleName} />
            <h1>Email</h1>
            <input type='text' id='emailInput' placeholder='Email' onChange={handleEmail}/>
            <h1>Question/Comment</h1>
            <input type='text' id='commentInput' placeholder='Question/Comment' onChange={handleComment}/>
            <br />
            <input type='Submit' id='submitButton' defaultValue='Submit' onClick={handleSubmit}/>
        </form>
    </div>
  )
}
