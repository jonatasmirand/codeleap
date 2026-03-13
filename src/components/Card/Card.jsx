import { useState } from 'react';
import Delete from '../Delete/Delete';
import Edit from '../Edit/Edit';
import './Card.css';
import DeleteIcon from '../icons/DeleteIcon';
import EditIcon from '../icons/EditIcon';

function Card({ post, username, toUpdate }) {
  const [onEdit, setOnEdit] = useState(false);
  const [onDelete, setOnDelete] = useState(false);

  function timeAgo(date) {
    const seconds = Math.floor((new Date() - new Date(date)) / 1000);

    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes} minutes ago`;

    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours} hours ago`;

    const days = Math.floor(hours / 24);
    return `${days} days ago`;
  }

  return (
    <div className="post-card">
      <div className="post-header">
        <h3>{post.title}</h3>

        {post.username === username && (
          <div className="post-actions">
            <button onClick={() => setOnDelete(true)}>
              <DeleteIcon />
            </button>
            <button onClick={() => setOnEdit(true)}>
              <EditIcon />
            </button>
          </div>
        )}
      </div>

      <div className="post-meta">
        <span>@{post.username}</span>
        <span>{timeAgo(post.created_datetime)}</span>
      </div>

      <p className="post-content">{post.content}</p>

      {onDelete && (
        <Delete
          id={post.id}
          close={() => setOnDelete(false)}
          toUpdate={toUpdate}
        />
      )}

      {onEdit && (
        <Edit post={post} close={() => setOnEdit(false)} toUpdate={toUpdate} />
      )}
    </div>
  );
}

export default Card;
