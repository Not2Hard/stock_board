import React, {useState} from 'react'
import New_button from './components/New_button'
import TickerChart from './components/TickerChart'


import './styles/App.css';
import LocalStorageLayout from './components/Grid'


function App() {
  const [ticker,changeTicker] = useState('')  

  const handleTickerChanged = (ticker) => {
    const tickerSymbol = ticker.ticker
    changeTicker({ticker:tickerSymbol})
  }

  return (
    <div className="App">
          <div className='card_container'>
          <div className="columns is-mobile">
            <div className="column is-two-thirds">
              {/* <TickerSearch onValueChange={handleTickerChanged} /> */}
              <TickerChart ticker={'NVDA'}/>
              </div>
            </div>
            <New_button />
            <New_button />
            <New_button />
            <New_button />

           
         </div> 
        <LocalStorageLayout/>
    </div>
  );
}

export default App;
