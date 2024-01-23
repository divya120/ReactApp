import "./Modal.css"

// eslint-disable-next-line react/prop-types
export const Modal = ({isOpen, setIsOpen}) =>{

    return(
        isOpen && (
            <div className="modal-div">
            <h2>
                Thank you Mao! I love you...❤️
            </h2>
            <button onClick={()=>{
                setIsOpen(false)
            }}>Cancel</button>
            </div>
        )
    )
}
    
  
