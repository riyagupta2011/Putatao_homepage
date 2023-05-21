import React from 'react'
import PinDropIcon from '@mui/icons-material/PinDrop';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
const Navbar = () => {
  return (
    <div className="Navbar">
       <div className="first">
        <PinDropIcon/>
        
        <input type='text'></input>
        <NotificationsIcon/>
        <AddShoppingCartIcon/>
       </div>
       <div className="second"></div>
    </div>
  )
}

export default Navbar