import React, { useState } from 'react';

export default function Card({ card, deleteCard }) {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState(card.title);

  const handleSave = () => {
    setShowModal(false);
  };

  return (
    <li className="list-group-item" onClick={() => setShowModal(true)}>
      {title}

      {showModal && (
        <div className="modal show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Card</h5>
                <button type="button" className="close" onClick={() => setShowModal(false)}>&times;</button>
              </div>
              <div className="modal-body">
                <input 
                  type="text" 
                  value={title} 
                  onChange={(e) => setTitle(e.target.value)} 
                  className="form-control" 
                />
              </div>
              <div className="modal-footer">
                <button onClick={handleSave} className="btn btn-success">Save</button>
                <button onClick={() => deleteCard(card.id)} className="btn btn-danger">Delete</button>
                <button onClick={() => setShowModal(false)} className="btn btn-secondary">Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </li>
  );
}
