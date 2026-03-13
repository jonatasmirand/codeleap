import { useState } from 'react';
import { api } from '../../services/api';
import './CreatePost.css';

function CreatePost({ username, toUpdate }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const createPost = async () => {
    await api.post('/', {
      username,
      title,
      content,
    });

    setTitle('');
    setContent('');

    toUpdate();
  };

  return (
    <>
      <div className="create-post">
        <h2>What’s on your mind?</h2>

        <label>Title</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />

        <label>Content</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <div className="create-post-actions">
          <button onClick={createPost} disabled={!title || !content}>
            Create
          </button>
        </div>
      </div>
    </>
  );
}

export default CreatePost;
