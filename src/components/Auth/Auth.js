// CreatePost.js
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { auth, db } from './firebase'; // Import Firebase configuration

const CreatePost = () => {
  const [user, setUser] = useState(null);
  const [postContent, setPostContent] = useState('');
  const history = useHistory();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        history.push('/login');
      }
    });

    return () => {
      unsubscribe();
    };
  }, [history]);

  const handlePostCreate = async () => {
    if (postContent.trim() === '') {
      alert('Post content cannot be empty!');
      return;
    }

    try {
      await db.collection('posts').add({
        content: postContent,
        userId: user.uid,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });

      history.push(`/profile/${user.uid}`);
    } catch (error) {
      console.error('Error creating post:', error.message);
    }
  };

  return (
    <div>
      <h1>Create a Post</h1>
      {user && (
        <div>
          <p>Welcome, {user.displayName}!</p>
          <textarea
            placeholder="Enter your post content here"
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
          />
          <button onClick={handlePostCreate}>Create Post</button>
        </div>
      )}
    </div>
  );
};

export default CreatePost;
