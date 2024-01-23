
import './App.css'
import { Modal } from './Modal'
import { useState } from 'react'

function App() {
const[isOpen, setIsOpen] = useState(false)
console.log(isOpen)
  return (
    <>
      <div className='content-div'>
      <h1>Is Meow Forgiven?</h1>
      </div>
      <div className='parent-div'>
      <button onClick={()=>{
        setIsOpen(true)
      }}>Yes</button>
      <button className='no-button'>No</button>
     
      </div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}/>
    </>
  )
}

export default App
