import React, { useState } from 'react';
import Card from './Card';
import { v4 as uuidv4 } from 'uuid';

export default function List({ list, deleteList, updateList }) {
  const [cards, setCards] = useState(list.cards);

  const addCard = () => {
    const title = prompt('Enter card title:');
    if (title) {
      setCards([...cards, { id: uuidv4(), title }]);
    }
  };

  const deleteCard = (id) => {
    setCards(cards.filter(card => card.id !== id));
  };

  return (
    <div className="card w-25">
      <div className="card-header d-flex justify-content-between align-items-center">
        <h5 onClick={() => {
          const newTitle = prompt('Enter new title:', list.title);
          if (newTitle) updateList(list.id, newTitle);
        }}>{list.title}</h5>
        <button onClick={() => deleteList(list.id)} className="btn btn-sm btn-outline-danger">✖</button>
      </div>
      <ul className="list-group list-group-flush">
        {cards.map(card => (
          <Card key={card.id} card={card} deleteCard={deleteCard} />
        ))}
      </ul>
      <div className="card-footer">
        <button onClick={addCard} className="btn btn-primary w-100">+ Add Card</button>
      </div>
    </div>
  );
}