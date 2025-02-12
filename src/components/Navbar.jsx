import React from 'react';

export default function Navbar() {
  const resetBoard = () => {
    localStorage.removeItem('boardData');
    window.location.reload();
  };

  return (
    <header className="d-flex justify-content-between align-items-center bg-primary text-white p-3 rounded">
      <h1 className="h3">Todo</h1>
      <button onClick={resetBoard} className="btn btn-danger">Reset Board</button>
    </header>
  );
}