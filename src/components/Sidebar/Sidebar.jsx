import React from 'react'
import './Sidebar.css'
import { Bookmark, Chat, Event, HelpOutline, People, PlayCircleFilled, QuestionMark, RssFeed, School, ThumbUpAlt, VideoFileRounded, WorkOutline } from '@mui/icons-material'

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
             <RssFeed />
             <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
             <Chat />
             <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
             <PlayCircleFilled />
             <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <People/>
             <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
             <Bookmark />
             <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
             <HelpOutline />
             <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
             <WorkOutline />
             <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
             <Event />
             <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
             <School />
             <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className='sidebarHr'/>
        <ul className="sidebarFriendList">
          <li className="sidebarFriend">
            <img src="" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Virat Kohli</span>
          </li>
          <li className="sidebarFriend">
            <img src="" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Virat Kohli</span>
          </li>
          <li className="sidebarFriend">
            <img src="" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Virat Kohli</span>
          </li>
          <li className="sidebarFriend">
            <img src="" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Virat Kohli</span>
          </li>
          <li className="sidebarFriend">
            <img src="" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Virat Kohli</span>
          </li>
          <li className="sidebarFriend">
            <img src="" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Virat Kohli</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar