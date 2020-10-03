import React, {useState} from 'react'
import New_button from './components/New_button'
import TickerChart from './components/TickerChart'
import TickerSearch from './components/TickerSearch'


import './styles/App.css';
import './components/grid_elem/grid_styles.css'
import './components/grid_elem/example-styles.css'


import '../node_modules/react-grid-layout/css/styles.css'
import '../node_modules/react-resizable/css/styles.css'
import GridLayout from 'react-grid-layout';
import AddRemoveLayout from './components/Grid'


function App() {
  const [ticker,changeTicker] = useState('')  

  const handleTickerChanged = (ticker) => {
    const tickerSymbol = ticker.ticker
    changeTicker({ticker:tickerSymbol})
  }
  const layout = [
    {i: 'a', x: 0, y: 0, w: 1, h: 2, static: true},
    {i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
    {i: 'c', x: 4, y: 0, w: 1, h: 2}
  ];

  return (
    <div className="App">
      <TickerSearch onValueChange={handleTickerChanged} />
          <div className='card_container'>
          <div className="columns is-mobile">
            <div className="column is-two-thirds">
              </div>
            </div>

         </div> 
         <GridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
            <div key="a" className="grid_elem"><New_button /></div>
            <div key="b" className="grid_elem">b
              <TickerChart ticker={ticker}/>
            </div>
            <div key="c" >c
                <div className="grid_elem"><New_button />
                </div>
            </div>
        </GridLayout>

        <AddRemoveLayout/>
       
    </div>
  );
}

export default App;
