import React, {useState} from 'react'
import TickerSearch from './components/TickerSearch'
import TickerList from './components/TickerList'
import { loadLayout, saveLayout, addTicker2Layout } from './components/layoutHandler'


import './styles/App.css';

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
const lsTiskers = getFromLS("tickerlist")
// console.log("localstorige", lsTiskers)



function App() {
  const [ticker,changeTicker] = useState({})  
  const [tickerList, changeTickerList] = useState(lsTiskers)
  const [layout, changeLayout] = useState(loadLayout())

  const handleTickerChanged = (ticker) => {
    const tickerSymbol = ticker.ticker
    addTicker2Layout(tickerSymbol, layout)
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
      <TickerList ticker={ticker} tickerList={tickerList} onRemove={handleRemove} layout={layout} onLayoutChange={saveLayout}/>
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
