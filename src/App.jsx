import { useState } from 'react';
import './App.css';
import  QuoteBox from './components/QuoteBox';

function App() {
  const [count, setCount] = useState(0)

  return (

    <div className="App">
      <QuoteBox />
    </div>

    )
}

export default App;
