import React from 'react'
import './CloseFriends.css'

function CloseFriends({friends}) {
  return (
    <div>
        <li className="sidebarFriend">
            <img src={friends.ProfilePicture} alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">{friends.username}</span>
          </li>
    </div>
  )
}

export default CloseFriends