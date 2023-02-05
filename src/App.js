import { useState } from 'react';

import { Header } from './components/Header/Header';
import { GameField } from './components/GameField/GameField';

function App() {

  const [isGameOn, setIsGameOn] = useState(false);


  return (
    <div >
      <Header isGameOn={isGameOn} />
      <GameField 
      isGameOn={isGameOn} 
      setIsGameOn={setIsGameOn}
       />
    </div>
  );
}

export default App;
