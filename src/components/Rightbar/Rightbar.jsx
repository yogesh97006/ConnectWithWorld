import React from 'react'
import './Rightbar.css'
import { User } from '../../dummyData'
import Online from '../Online/Online'

function Rightbar() {
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        <div className="birthdayConatiner">
          <img src="" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Ashish </b> and <b>2 other friends </b> have a birthday today.
          </span>
        </div>
        <img src="" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {User.map((u)=>(
            <Online key={u.id} user={u} />
          ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Rightbar