import React from 'react';
import { Avatar } from "@material-ui/core";
import { DeleteForever } from '@material-ui/icons';
import { doc, deleteDoc } from "firebase/firestore";
import { db } from './firebase';
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NearMeIcon from '@material-ui/icons/NearMe';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import "./Timeline.css";

function Timeline({ profilePic, image, username, timestamp, message}) {

    const handleDelete = (e) => {
        e.preventDefault();

        deleteDoc(doc(db, "posts", "nK5zHVnVJLq15LGNxIef"));

        };

        
    

    return (
        <div className="timeline">
            <div className="post_top">
                <Avatar src={profilePic} className="post_avatar" />
                <div className="post_topInfo">
                    <h3>{username}</h3>
                    <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
                </div>
                <div className="post_topRight">
                    <DeleteForever onClick={handleDelete}/>
                </div>
            </div>

            <div className="post_bottom">
                <p>{message}</p>
            </div>

            <div className="post_image">
                <img src={image} alt="" />
            </div>

            <div className="post_options">
                <div className="post_option">
                    <ThumbUpIcon />
                    <p>Like</p>
                </div>
                <div className="post_option">
                    <ChatBubbleOutlineOutlinedIcon />
                    <p>Comment</p>
                </div>
                <div className="post_option">
                    <NearMeIcon />
                    <p>Share</p>
                </div>
                <div className="post_option">
                    <AccountCircleIcon />
                    <ExpandMoreIcon />
                </div>
                
            </div>
        </div>

    )
}

export default Timeline