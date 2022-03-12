import React from "react";
import "./sendPost.css";
import { Button, Avatar, Icon, IconButton } from "@material-ui/core";
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';

function Post() {
    return <div className="messageSender">
        <div className="messageSender_top">
            <Avatar /> 
            <form>
                    <input
                        placeholder={`What's on your mind, ?`} />

                    <input placeholder="Image Url (optional) "  />

                    <Button type="submit" >post</Button>
            </form>   
        
        </div>

        <div className="messageSender_bottom">
            <div className="messageSender__option">
                <IconButton>
                    <PhotoLibraryIcon style={{ color: "#1877f2"}} />
                </IconButton>
                    <h8>Add Photo/Video</h8>
            </div>
        
        </div>
        
        
    
    
    </div>

}

export default Post;