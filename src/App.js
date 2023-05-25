// import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Modal from './components/Modal';
import { useState } from 'react';

function App() {
  const [showModal, setShowModal] = useState(false)
  const [username, setUsername] = useState('friend')
  console.log('reloaded app')

  // const handleSubmit = (e) => {
  //     e.preventDefault()
  //     setShowModal(true)
  // }
  
  // <img src={logo} className="App-logo" alt="logo" />
  return (
    <>
    <div className="App">
      <div className="container">
        {showModal &&
        <Modal 
        username={username}
        setShowModal={setShowModal}
        />}
        <Form
        showModal={showModal}
        setShowModal={setShowModal}
        // handleSubmit={handleSubmit}
        setUsername={setUsername} />
        
      </div>
    </div>
    </>
  );
}

export default App;
