import './App.sass';
import Box from './Box';
import boxes from './boxes';
import {useState} from 'react';

export default function App() {
  const [squares, setSquares] = useState(boxes);

  function toggle(id){
    setSquares(prevSquares => {
      return prevSquares.map((square) => {
        return square.id === id ? {...square, on: !square.on}: square;
      })
    })
  }
  const squareElements = squares.map(square => (
      <Box 
          key={square.id} 
          id = {square.id}
          on={square.on}
          toggle = {toggle}
      />
  ))
  
  return (
      <main>
          <div className='boxes'>
          {squareElements}
          </div>
          <div className='text'>Click a box to toggle its color!</div>
      </main>
  );
}