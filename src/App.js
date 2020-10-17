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
const getLayotFromLS = (key) => {
  let ls = {};
  if (global.localStorage) {
    try {
      ls = JSON.parse(global.localStorage.getItem("board-layout")) || {};
    } catch (e) {
      /*Ignore*/
    }
  }
  return ls[key];
}

const lsTiskers = getFromLS("tickerlist")
console.log("localstorige", lsTiskers)

const originalLayout = getLayotFromLS("layout") || []


function App() {
  const [ticker,changeTicker] = useState({})  
  const [tickerList, changeTickerList] = useState(lsTiskers)
  console.log("originalLayout", originalLayout)

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

  const handleLayoutChange = (layout) => {
    /*eslint no-console: 0*/
    if (global.localStorage) {
      global.localStorage.setItem(
        "board-layout",
        JSON.stringify({
          "layout": layout
        })
      );
    }
    
    // changeLayouts(layout);
    // this.props.onLayoutChange(layout); // updates status display
    console.log("saving lauout", layout)
 
  }
 

  return (
    <div className="App">
      <TickerSearch onValueChange={handleTickerChanged} />
      <TickerList ticker={ticker} tickerList={tickerList} onRemove={handleRemove} originalLayout={originalLayout} onLayoutChange={handleLayoutChange}/>
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
