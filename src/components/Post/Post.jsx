import React from 'react'
import './post.css'
import { MoreVert } from '@mui/icons-material'

function Post() {
  return (
    <div className='post'>
          <div className="postWrapper">
            <div className="postTop">
               <div className="postTopLeft">
                <img src="" alt="" className="postProfileImg" />
                <span className="postUsername">SAfak</span>
                <span className="postDate">5 mins ago</span>               
               </div>
               <div className="postTopRight">
                <MoreVert />
               </div>
            </div>
            <div className="postCenter"></div>
            <div className="postBottom"></div>
          </div>
    </div>
  )
}

export default Post