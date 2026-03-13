import { api } from '../../services/api';
import './Delete.css';

function Delete({ id, close, toUpdate }) {
  const handleDelete = async () => {
    await api.delete(`${id}/`);
    toUpdate();
    close();
  };

  return (
    <div className="modal-overlay">
      <div className="delete-modal">
        <h2>Are you sure you want to delete this item?</h2>

        <div className="modal-actions">
          <button onClick={close} className="cancel-button">
            Cancel
          </button>
          <button onClick={handleDelete} className="delete-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Delete;
