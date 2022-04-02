import React, { useState } from 'react'
import { Menu } from './Menu'

const Burger = ({ open, setOpen }) => {
  console.log(open)
  return (
    <button
      className="styled-burger"
      open={open}
      onClick={() => setOpen(!open)}
    >
      <div
        style={{
          transform: () => (open ? 'rotate(45deg)' : 'rotate(0)'),
        }}
      />
      <div
        style={{
          opacity: () => (open ? '0' : '1'),
          transform: () => (open ? 'translateX(20px)' : 'translateX(0)'),
        }}
      />
      <div
        style={{
          transform: () => (open ? 'rotate(-45deg)' : 'rotate(0)'),
        }}
      />
    </button>
  )
}

export const BurgerMenu = ({ user, name, image, signout }) => {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <div>
        <Burger open={open} setOpen={setOpen} />
        <Menu
          classname="styled-menu"
          user={user}
          name={name}
          image={image}
          signout={signout}
          open={open}
          handleLinkClick={() => setOpen(false)}
        />
      </div>
    </div>
  )
}

// const useOnClickOutside = (ref, handler) => {
//   useEffect(() => {
//     const listener = (event) => {
//       if (!ref.current || ref.current.contains(event.target)) {
//         return
//       }
//       handler(event)
//     }
//     document.addEventListener('mousedown', listener)

//     return () => {
//       document.removeEventListener('mousedown', listener)
//     }
//   }, [ref, handler])
// }
