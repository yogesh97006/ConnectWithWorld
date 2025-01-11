import React from 'react'
import './Share.css'
import { EmojiEmotions, Label, PermMedia, Room } from '@mui/icons-material'

function Share() {
  return (
    <div className='share'>
        <div className="shareWrapper">
            <div className="shareTop">
                <img src="" alt="" className="shareProfileImg" />
                <input placeholder="What's In Your Mind Safak?" className='shareInput' />
            </div>
            <hr className="shareHr" />
            <div className="shareButtom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <PermMedia htmlColor='tomato' className='shareIcon' />
                        <span className="shareOptionText">Photo or Video</span>
                    </div>
                    <div className="shareOption">
                        <Label htmlColor='blue' className='shareIcon' />
                        <span className="shareOptionText">Tag</span>
                    </div>
                    <div className="shareOption">
                        <Room htmlColor='green' className='shareIcon' />
                        <span className="shareOptionText">Location</span>
                    </div>
                    <div className="shareOption">
                        <EmojiEmotions htmlColor='goldenrod' className='shareIcon' />
                        <span className="shareOptionText">Feelings</span>
                    </div>
                </div>
                <buuton className="shareButton">Share</buuton>
            </div>
        </div>
    </div>
  )
}

export default Share