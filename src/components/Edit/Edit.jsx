import { useState } from 'react';
import { api } from '../../services/api';
import './Edit.css';

function Edit({ post, close, toUpdate }) {
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);

  const save = async () => {
    await api.patch(`${post.id}/`, {
      title,
      content,
    });

    close();
    toUpdate();
  };

  return (
    <div className="modal-overlay">
      <div className="edit-modal" onClick={(e) => e.stopPropagation()}>
        <h2>Edit item</h2>

        <label>Title</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />

        <label>Content</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <div className="modal-actions">
          <button className="cancel-button" onClick={close}>
            Cancel
          </button>

          <button
            className="save-button"
            onClick={save}
            disabled={!title || !content}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default Edit;
