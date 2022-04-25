import React from 'react';
import { Avatar } from "@material-ui/core";
import { useState, useEffect } from 'react';
import { getAuth } from "firebase/auth";
import { DeleteForever } from '@material-ui/icons';
import { doc, setDoc, addDoc, deleteDoc, collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from './firebase';
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NearMeIcon from '@material-ui/icons/NearMe';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Button } from "@material-ui/core";
import "./Timeline.css";

function Timeline({ postID, profilePic, image, timestamp, username, message}) {
    
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState("");
    const [likes,setlikes] = useState([]);
    const [haslike,sethaslike] = useState(false);

    const [counter, setCounter] = useState(1);

    const auth = getAuth();
    const user = auth.currentUser;
    const name = user.email;

    const handleClick = () => {
        setCounter(counter + 1)
    }
    
    const handleDelete = () => {

        deleteDoc(doc(db, "posts", postID));

        };

    const deleteComment = (id) => {
        deleteDoc(doc(db, "posts", postID, "comments", doc(id)));
      };
    
    useEffect(() => {
        if (postID) {
            const q = query(collection(db, 'posts', postID, 'comments'))
            onSnapshot(q, (querySnapshot) => {
                setComments(querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    comment: doc.data()
                    }))
                );
            })
        };
    },[postID]);

    const postComment = (e) => {
        e.preventDefault();
        
        addDoc(collection(db, 'posts', postID, 'comments'), {
            text: comment,
            username: name,
        });
        setComment("");
        console.log(comment);
        console.log(username);
      };

      const likepost = async () => {
        
        if(haslike){
            await deleteDoc(doc(db,'posts', postID,'likes', user.uid));
        }
        else{
            await setDoc(doc(db,'posts', postID,'likes', user.uid),{
                username: name, 
            });
            console.log(haslike);
        }
        
    };

    useEffect(()=>{
        onSnapshot(collection(db,'posts', postID,'likes'),
        (snapshot) => setlikes(snapshot.docs))
        
     } ,[postID])

    useEffect(
        ()=>
            sethaslike((likes.findIndex( (like) => like.id === user.uid) )!== -1)
        ,[likes]
    );


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


            <div className="post__comments">
                {comments.map(({ id, comment }) => (
                    <div className="post__comment">
                        {comment.username === name ? (
                            <button
                                className="post__deleteComment"
                                onClick={() => deleteComment(id)}
                            >
                                X
                            </button>
                        ) : (
                            <div></div>
                        )}
                        <p>
                            <strong>{comment.username}</strong> {comment.text}
                        </p>
                    </div>
                ))}
            </div>



            <div className="post_options">
                

                {haslike ?<div onClick={likepost} >
                    <ThumbUpIcon onClick={handleClick} style={{color: "#1877f2"}} height={25}width={25} alt="like" /> {counter}
                </div> : <div onClick={likepost}>
                    <ThumbUpIcon height={25}width={25} alt="like" />
                </div>}






            <div className="post_option">


                <form className="post__commentBox">
                    <input
                      type="text"
                          className="post__input"
                          placeholder="Add a comment..."
                          value={comment}
                          onChange={(e) => setComment(e.target.value)}
                        />
                        <Button
                          className="post__button"
                          disabled={!comment}
                          type="submit"
                          onClick={postComment}
                        >
                          Post
                        </Button>
                    </form>
            </div>

                




               
                
            </div>
        </div>

    )
}

export default Timeline