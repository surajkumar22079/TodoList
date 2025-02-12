import React, { useState, useEffect } from 'react';
import List from './List';
import { v4 as uuidv4 } from 'uuid';

export default function Board() {
  const [lists, setLists] = useState(() => {
    const savedData = localStorage.getItem('boardData');
    return savedData ? JSON.parse(savedData) : [];
  });

  useEffect(() => {
    localStorage.setItem('boardData', JSON.stringify(lists));
  }, [lists]);

  const addList = () => {
    const title = prompt('Enter list title:');
    if (title) {
      setLists([...lists, { id: uuidv4(), title, cards: [] }]);
    }
  };

  const deleteList = (id) => {
    setLists(lists.filter(list => list.id !== id));
  };

  const updateList = (id, newTitle) => {
    setLists(lists.map(list => list.id === id ? { ...list, title: newTitle } : list));
  };

  const updateCards = (listId, cards) => {
    setLists(lists.map(list => list.id === listId ? { ...list, cards } : list));
  };

  return (
    <div className="d-flex overflow-auto mt-4 gap-3">
      {lists.map(list => (
        <List 
          key={list.id} 
          list={list} 
          deleteList={deleteList} 
          updateList={updateList} 
          updateCards={updateCards} 
        />
      ))}
      <button onClick={addList} className="btn btn-success">+ Add List</button>
    </div>
  );
}