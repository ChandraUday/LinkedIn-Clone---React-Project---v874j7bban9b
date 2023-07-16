import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import "./css/header.css"
import Headeroptions from './Headeroptions';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function Header() {
  
  const handleClick = () => {
    window.location.href = 'https://www.linkedin.com/mynetwork/'; 
  };

  const handleClick1 = () => {
    window.location.href = 'https://www.linkedin.com/jobs/'; 
  };
  

  const handleClick2 = () => {
    window.location.href = 'https://www.linkedin.com/messaging/thread/new/'; 
  };


  const user=useSelector(selectUser)

  return (
    <div className="header">
        <div className="header_left">
                <div className="header_logo">
                     <img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" alt="img11" />
                </div>
                <div className="header_search">
                  <SearchIcon/>
                  <input type="text" placeholder="Search"/>
                </div>
        </div>

        <div className="header_right">
            <button><Headeroptions Icon={HomeIcon} title="Home"/></button>
            <button onClick={handleClick}><Headeroptions Icon={PeopleIcon} title="Network" /></button>
            <button onClick={handleClick1}><Headeroptions Icon={BusinessCenterIcon} title="Jobs"/></button>
            <button onClick={handleClick2}><Headeroptions Icon={MessageIcon} title="Messaging"/></button>
            <button><Headeroptions Icon={NotificationsIcon} title="Notifications"/></button>
            <Headeroptions avatar={Avatar} title={user.displayName}/>
        </div>
      
    </div>
  )
}

export default Header
