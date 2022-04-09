import React, {useEffect, useState} from "react";
import "./Body.css";
import Post from "./sendPost";
import { initializeApp } from "firebase/app";
import {collection, query, orderBy, onSnapshot} from "firebase/firestore"
import {db} from './firebase'
import Timeline from "./Timeline";
import firebaseConfig from "./firebase";

function Body() {

    const [posts, setPosts] = useState([]);
    console.log("hello");
    
    useEffect(() => {
      const q = query(collection(db, 'posts'), orderBy('timestamp', 'desc'))
      onSnapshot(q, (querySnapshot) => {
        setPosts(querySnapshot.docs.map(doc => ({
          id: doc.id,
          data: doc.data()
        })))
      })
    },[])
  
    return (
        <div className="feed">
              <Post />

              {posts.map((post) => (
                <Timeline 
                  key={post.id}
                  profilePic={post.data.profilePic}
                  message={post.data.message}
                  timestamp={post.data.timestamp}
                  username={post.data.username}
                  image={post.data.image}  
                />
              ))}
        </div>


    );

}

export default Body;