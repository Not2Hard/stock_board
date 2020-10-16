import React, {useState} from 'react'
import TickerSearch from './components/TickerSearch'
import TickerList from './components/TickerList'


import './styles/App.css';



// import './components/grid_elem/grid_styles.css'
// import './components/grid_elem/example-styles.css'
// import '../node_modules/react-grid-layout/css/styles.css'
// import '../node_modules/react-resizable/css/styles.css'
// import GridLayout from 'react-grid-layout';
// import Grid from './components/Grid'

const getFromLS = (key) => {
  let ls = {};
  if (global.localStorage) {
    try {
      ls = JSON.parse(global.localStorage.getItem("stock-board")) || {};
    } catch (e) {
      /*Ignore*/
    }
  }
  return ls[key];
}

const LStiskers = JSON.parse(JSON.stringify(getFromLS("tickerlist")))
console.log("localstorige", LStiskers)


function App() {
  const [ticker,changeTicker] = useState({})  
  const [tickerList, changeTickerList] = useState(LStiskers)
 

  const handleTickerChanged = (ticker) => {
    
    const tickerSymbol = ticker.ticker
    changeTickerList([...tickerList, {ticker:tickerSymbol}])
    changeTicker({ticker:tickerSymbol})
    console.log('newtickerlist', tickerList)
    
  }

  const handleRemove = (ticker) => {
    // console.log(`Ticker removed: ${ticker}`)
    const newTickerlist = tickerList.filter(elem => elem.ticker !== ticker)
    changeTickerList(newTickerlist)
  }

 

  return (
    <div className="App">
      <TickerSearch onValueChange={handleTickerChanged} />
      <TickerList ticker={ticker} tickerList={tickerList} onRemove={handleRemove} />
      <div className='card_container'>
        <div className="columns is-mobile">
            <div className="column is-two-thirds">
              {/* <TickerChart ticker={ticker}/> */}
              
            </div>
        </div>
      </div> 
    </div>
  );
}

export default App;
