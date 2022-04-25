import React, {useState } from "react";
import "./sendPost.css";
import { db, useAuth } from './firebase';
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { Button, Avatar, Icon, IconButton} from "@material-ui/core";
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import { getAuth } from "firebase/auth";
import "./Followers.css";


function Followers() {

    const [input, setInput] = useState("");

    return (
        <div className="follow_sec">
            <div className="searchbar">
                <form>
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder={`Search Users...`} />
                        <Button type="submit" >Search</Button>
                </form>   

            </div>
        </div>

    );
}

export default Followers