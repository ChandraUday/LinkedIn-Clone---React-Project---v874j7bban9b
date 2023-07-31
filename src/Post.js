import { Avatar } from '@mui/material'
import React, { useState } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import "./css/post.css"
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';

function Post({name,description,message,photoURL}) {

     const [isLiked, setIsLiked] = useState(false);
     const [isShared, setIsShared] = useState(false);
     const [isSend, setIsSend] = useState(false);

     const handleClick = () => {
       setIsLiked(!isLiked);
     };
     

     const handleClick1 = () => {
          setIsShared(!isShared);
     };

        const handleClick2 = () => {
          setIsSend(!isSend);
      };



  return (
    <div className="posts">
        <div className="post_header">
            <div className="post_headerLeft">
                <Avatar src={photoURL}/>
                  <div className="post_profile_details">
                       <h3>{name}</h3>
                       <p>{description}</p>
                  </div>
            </div>
            <MoreVertIcon/>
        </div>

        <div className="post_body">
            <p>{message}</p>
        </div>

        <div className="post_footer">
            <div className="post_footer_option" onClick={handleClick}>
                 <ThumbUpAltIcon style={{ color: isLiked ? 'red' : 'black' }}/>
                 <span>Like</span>
            </div>

            <div className="post_footer_option">
                 <CommentIcon/>
                 <span>Comment</span>
            </div>

            <div className="post_footer_option" onClick={handleClick1}>
                 <ShareIcon style={{ color: isShared ? 'blue' : 'black'}}/>
                 <span>Share</span>
            </div>

            <div className="post_footer_option" onClick={handleClick2}>
                 <SendIcon style={{ color: isSend ? 'green' : 'black'}}/>
                 <span>Send</span>
            </div>
        </div>

    </div>
  )
}

export default Post
