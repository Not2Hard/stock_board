import React, {useState} from 'react'
import TickerSearch from './components/TickerSearch'
import TickerList from './components/TickerList'
import { loadLayout, saveLayout, addTicker2Layout, removeTIckerFromLayout } from './components/layoutHandler'


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
  const [tickerList, changeTickerList] = useState("")
  const [layout, changeLayout] = useState(loadLayout())

  const handleTickerChanged = (ticker) => {    
    let savedTickers = layout.map(item => {return item.i})
    savedTickers.includes(ticker.ticker) ? alert(`"${ticker.ticker}" - ${ticker.name} - is alredy on your board `) : changeLayout(addTicker2Layout(ticker, layout))
  }

  const handleRemove = (ticker) => {
    changeLayout(removeTIckerFromLayout(ticker, layout))
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
