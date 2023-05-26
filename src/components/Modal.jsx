import React from 'react'
import './Modal.css'

export default function Modal(props) {
  return (
    <div id="modal" className='overlay'>
      <div className="modal-card">
          <h1>Thanks, {props.username}!</h1>
          <h4>Your comment has been submitted.</h4>
          <br/>
          <button onClick={() => {props.setShowModal(false)}}>Close</button>
      </div>
    </div>
  )
}
