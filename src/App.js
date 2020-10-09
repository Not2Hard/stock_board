import React, {useState} from 'react'
import New_button from './components/New_button'
import TickerChart from './components/TickerChart'
import TickerSearch from './components/TickerSearch'
import TickerList from './components/TickerList'


import './styles/App.css';



// import './components/grid_elem/grid_styles.css'
// import './components/grid_elem/example-styles.css'
// import '../node_modules/react-grid-layout/css/styles.css'
// import '../node_modules/react-resizable/css/styles.css'
// import GridLayout from 'react-grid-layout';
// import Grid from './components/Grid'


function App() {
  const [ticker,changeTicker] = useState({ticker: 'NVDA'})  
  const [tickerList, changeTickerList] = useState([{ticker: 'NVDA'}])
  React.useEffect(() => { console.log("new ticker:", ticker); },[ticker]);

  const handleTickerChanged = (ticker) => {
    
    const tickerSymbol = ticker.ticker
    changeTickerList([...tickerList, {ticker:tickerSymbol}])
    changeTicker({ticker:tickerSymbol})
    console.log('newtickerlist', tickerList)

    
  }

  return (
    <div className="App">
      <TickerSearch onValueChange={handleTickerChanged} />
      <TickerList ticker={ticker} tickerList={tickerList}/>
      <div className='card_container'>
        <div className="columns is-mobile">
            <div className="column is-two-thirds">
              <TickerChart ticker={ticker}/>
              
            </div>
        </div>
      </div> 
    </div>
  );
}

export default App;
