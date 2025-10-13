import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

export function MoodBoardItem({ color, image, description }) {

  return (
    <div className='mood-board-item' style={{
      backgroundColor: color
    }}>
      <img className='mood-board-image' src={image} />
      <h3 className='mood-board-text'>{description}</h3>
    </div>
  )
}


export function MoodBoard() {
  return (
    <div>
      <h1 className="mood-board-heading">Destination Mood Board</h1>
      <div className="mood-board">

        <MoodBoardItem
          color="green"
          image="https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg"
          description="Caribbean"
        />
        <MoodBoardItem
          color="purple"
          image="https://cdn.freecodecamp.org/curriculum/labs/shore.jpg"
          description="Gawadar Beach"
        />
        <MoodBoardItem
          color="blue"
          image="https://cdn.freecodecamp.org/curriculum/labs/grass.jpg"
          description="Cape Town"
        />
        <MoodBoardItem
          color="magenta"
          image="https://cdn.freecodecamp.org/curriculum/labs/ship.jpg"
          description="Suez Canal"
        />
        <MoodBoardItem
          color="red"
          image="https://cdn.freecodecamp.org/curriculum/labs/santorini.jpg"
          description="Santorini"
        />
        <MoodBoardItem
          color='gray'
          image="https://cdn.freecodecamp.org/curriculum/labs/pigeon.jpg"
          description="Istanbul"
        />
      </div>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MoodBoard />
  </React.StrictMode>
);