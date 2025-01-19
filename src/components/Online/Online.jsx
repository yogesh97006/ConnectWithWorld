import React from 'react'
import './Online.css'


function Online({user}) {
  return (
    <div>
 <li className="rightBarFriend">
            <div className="rightbarProfileImgContainer">
              <img src={user.ProfilePicture} alt="" className="rightbarProfileImg" />
              <span className="rightbarOnline"></span>
            </div>
            <span className='rightbarUsername'>{user.username}</span>
          </li>
    </div>
  )
}

export default Online