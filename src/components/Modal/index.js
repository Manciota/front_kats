import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css'

export function Modal({ title, open, setOpen, children }) {
  if (!open) {
    return null
  }

  const handleCloseModal = () => {
    setOpen((prevState) => !prevState)
  }

  return ReactDOM.createPortal(
    <>
      <div className='overlay'>
        <div className='container-modal'>
          <button onClick={handleCloseModal}>X</button>
          <h1>{title}</h1>
          {children}
        </div>
      </div>
    </>,
    document.getElementById('modal-root')
  )
}
