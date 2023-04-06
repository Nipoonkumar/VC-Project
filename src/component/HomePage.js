import React, { useState, useEffect } from "react";
import Feed from "./Feeds";
import PostForm from "./Postform";
import "/home/nineleaps/project/src/css/HomePage.css";

function HomePage() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isPostFormVisible, setIsPostFormVisible] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetch("/api/posts")
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setPosts(data);
      })
      .catch((error) => console.error(error));
  }, []);
  const handleSubmit = (event, newPost) => {
    event.preventDefault();
    setIsLoading(true);
    fetch("/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    })
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setPosts([data, ...posts]);
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="feeds-page">
      <h1>Feeds Page</h1>
      {isPostFormVisible ? (
        <PostForm
          onSubmit={handleSubmit}
          onCancel={() => setIsPostFormVisible(false)}
        />
      ) : (
        <button
          className="create-post-button"
          onClick={() => setIsPostFormVisible(true)}
        >
          Create Post
        </button>
      )}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        posts.map((post) => <Feed key={post.id} post={post} />)
      )}
    </div>
  );
}
export default HomePage;