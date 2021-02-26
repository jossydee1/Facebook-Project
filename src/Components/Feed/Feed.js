import React, { useState, useEffect } from "react";
import "./Feed.css";
import StoryReel from "../StoryReel/StoryReel";
import MessageSender from "../MessageSender/MessageSender";
import Post from "../Post/Post";
import { useStateValue } from "../StateProvider";
import db from "../Firebase";

function Feed() {
  const [{ user }, dispatch] = useStateValue();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot(snapshot =>
        setPosts(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
      );
  }, []);

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />

      {posts.map(posts => (
        <Post
          key={posts.id}
          profilePic={posts.data.profilePic}
          message={posts.data.message}
          timestamp={posts.data.timestamp}
          username={posts.data.username}
          image={posts.data.image}
        />
      ))}

      <Post
        profilePic={user.photoURL}
        message="We are moving greater"
        timestamp="What time is it?"
        username={user.displayName}
        image="https://scontent.flos1-1.fna.fbcdn.net/v/t1.0-0/c2.0.206.206a/p206x206/131952356_413577623098977_8751836532630620495_n.jpg?_nc_cat=108&ccb=2&_nc_sid=da31f3&_nc_eui2=AeG-MR4Khb3ub-1Mz6lcF-dapisT8r0KfCumKxPyvQp8K_71sbNxTb0lwf5HXaExauR0snjPw2DIcdFiT9NMJTnN&_nc_ohc=VOdnVFXHxmMAX8PNntc&_nc_ht=scontent.flos1-1.fna&tp=27&oh=5657e1cefc041c85fb80b1e706e51c0f&oe=601CC4D7"
      />
      
    </div>
  );
}

export default Feed;
