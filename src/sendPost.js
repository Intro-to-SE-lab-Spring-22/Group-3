import React, {useState } from "react";
import "./sendPost.css";
import { db, useAuth } from './firebase';
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { Button, Avatar, Icon, IconButton} from "@material-ui/core";
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';

function Post() {
    
    const currentUser = useAuth();
    const [input, setInput] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        addDoc(collection(db, 'posts'), {
            message: input,
            timestamp: serverTimestamp(),
            profilePic: currentUser.photoURL,
            username: currentUser.displayName,
            image: imageUrl
        });

        setInput("");
        setImageUrl("");
    }
    
    

    
    return (
    <div className="messageSender">
        <div className="messageSender_top">
            <Avatar /> 
            <form>
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder={`What's on your mind, ?`} />

                    <input 
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        placeholder="Image Url (optional) "  />

                    <Button onClick={handleSubmit} type="submit" >post</Button>
            </form>   
        
        </div>

        <div className="messageSender_bottom">
            <div className="messageSender__option">
                <IconButton>
                    <PhotoLibraryIcon style={{ color: "#1877f2"}} />
                </IconButton>
                    <h7>Add Photo/Video</h7>
            </div>
        
        </div>
        
        
    
    
    </div>
    )
}

export default Post;