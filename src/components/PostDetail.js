import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';

function PostDetail() {
  const [post, setPost] = useState({});
  const { postId } = useParams();

  useEffect(() => {
    getDoc(doc(db, 'posts', postId))
      .then((docSnapshot) => {
        console.log('snapshot', docSnapshot.data());
        setPost(docSnapshot.data());
      })
      .catch((error) => {
        console.log('Error getting document:', error);
      });
  }, [postId]);

  return (
    <div className="post-detail">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}

export default PostDetail;
