import React from 'react'
import './Feed.css'
import Share from '../Share/Share'
import Post from '../Post/Post'
import {Posts} from '../../dummyData'

function Feed() {
  return (
    <div className='feed'>
      <div className="feedWrapper">
        <Share />
         {/* {Posts.map((p)=>(
          // console.log(Posts);
         <Post key={p.id} postData={p}/>
      ))} */}
      {Posts.map((p)=>(
        <Post key={p.id} postData={p} />
      ))}
      </div>
    </div>
  )
}

export default Feed