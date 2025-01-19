import React, { useEffect, useState } from 'react'
import './post.css'
import { Favorite, FavoriteBorderOutlined, MoreVert, ThumbUp, ThumbUpAltOutlined } from '@mui/icons-material'
import {User} from '../../dummyData'

function Post({postData}) {
 
  const [likes,setLikes] = useState(postData.like)
  const [thumsUpLiked,setThumsUpLiked] = useState(true)
  const [heartLiked,setHeartLiked] = useState(false)

  const handleThumsUp = () =>{
         if(thumsUpLiked==true){
          setLikes(likes+1)
          setThumsUpLiked(!thumsUpLiked)
          setHeartLiked(!heartLiked)
        }else{
          setLikes(likes-1)
          setThumsUpLiked(!thumsUpLiked)
          // setHeartLiked(!heartLiked)
         }
  }
  
  const handleHeart = () =>{
    if(thumsUpLiked==true){
      setLikes(likes+1)
      setHeartLiked(!heartLiked)
      setThumsUpLiked(!thumsUpLiked)
    }else{
      setLikes(likes-1)
      // setHeartLiked(!heartLiked)
      setThumsUpLiked(!thumsUpLiked)
     }
  }

  useEffect(() => {

  }, [handleThumsUp,handleHeart])
  

  return (
    <div className='post'>
          <div className="postWrapper">
            <div className="postTop">
               <div className="postTopLeft">
                <img src={User.filter(u=>u.id==postData?.userId)[0].ProfilePicture} alt="" className="postProfileImg" />
                <span className="postUsername">{User.filter(u=>u.id==postData?.userId)[0].username}</span>
                <span className="postDate">{postData.time}</span>               
               </div>
               <div className="postTopRight">
                <MoreVert />
               </div>
            </div>
            <div className="postCenter">
              <span className='postText'>{postData.desc}</span>
              <img src={postData.photo} alt="" className="postImg" /> 
            </div>
            <div className="postBottom">
              <div className="postBottomLeft">
                {thumsUpLiked?<ThumbUp onClick={handleThumsUp}  className='.likeIcon' htmlColor='blue'/>: <ThumbUpAltOutlined  className='.likeIcon'  onClick={handleThumsUp} />}
                {heartLiked?  <Favorite onClick={handleHeart} className='.likeIcon'  htmlColor='tomato'/>:<FavoriteBorderOutlined onClick={handleHeart}  className='.likeIcon' /> }
                <span className='postLikeCounter'>{likes} people like it</span>
              </div>
              <div className="postBottomRight">
                <span className="postCommentText">{postData.comment} comments</span>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Post