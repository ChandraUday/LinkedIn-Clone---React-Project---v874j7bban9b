import React from 'react'
import "./css/sidebar.css"
import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';


function Sidebar() {

  const user= useSelector(selectUser);

  return (
    <div className="sidebar">
      <div className="sidebar_profile">
        <img src="https://cdn.pixabay.com/photo/2018/01/24/18/05/background-3104413_640.jpg"/>

                 <div className="profile_details">
                    <Avatar src={user.photoURL}/>
                    <h4>{user.displayName}</h4>
                    <p>Web Developer</p>
                 </div>

                 <div className="profile_stats">
                    <span>Profile Viewed By</span>
                    <span className="stat_number">24</span>
                 </div>

                 <div className="profile_stats">
                     <span>Connections<br/><b>Grow your Network</b></span>
                     <span className="stat_number">150</span>
                 </div>
      </div>

      <div className="sidebar_recent">
        <p>Recent</p>
        <p className="hash"><span>#</span>Branding</p>
        <p className="hash"><span>#</span>Marketing</p>
        <p className="hash"><span>#</span>web development</p>
        <p className="hash"><span>#</span>Programming</p>
        <p className="hash"><span>#</span>Reactjs</p>
        <p className="hash"><span>#</span>Reduxtoolkit</p>
      </div>

    </div>
  )
}

export default Sidebar
