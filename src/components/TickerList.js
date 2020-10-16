
import React,{ useState } from 'react'
import TickerChart from './TickerChart'



// import '../components/grid_elem/resizable-styles.css'
import '../components/grid_elem/grid_styles.css'
import '../components/grid_elem/example-styles.css'

import { WidthProvider, Responsive } from "react-grid-layout";
const ResponsiveReactGridLayout = WidthProvider(Responsive);

const uuidv4 = require("uuid/v4")



const TickerList = (props) => {
    const [cols, changeCols] = useState(3)
    const [layouts, changeLayouts] = useState(JSON.parse(JSON.stringify(getFromLS("layout") || [])))
    
    const tickers = props.tickerList

    React.useEffect(() => {
      console.log("saving ticker", tickers)
      saveToLS("tickerlist", tickers)
    }, [props.tickerList])

    // const originalLayout = getFromLS("layout") || [];

 
   
    // const allTickers = Array.from(tickers)
    console.log('array of stocks', tickers)

    const createElement = (tickers) => {
        return(
            tickers.map(ticker => {
                const i = uuidv4()
                const removeCallback = () => props.onRemove(ticker.ticker) //onRemoveItem(i)

                const removeStyle = {
                    position: "absolute",
                    right: "2px",
                    top: 0,
                    cursor: "pointer"
                  };
                return(
                    <div key={i} data-grid={
                            {
                            i: i,
                            x: (tickers.length * 2) % (cols || 12), 
                            y: Infinity, // puts it at the bottom 
                            w: 2, 
                            h: 10
                            }}>
                        <TickerChart ticker= {ticker}/>
                        <span 
                            className="remove"
                            style={removeStyle}
                            onClick={removeCallback}
                            >
                            x
                        </span>
                    </div>
                )
                
            })

        )
    }
 

    const onLayoutChange = (layout) => {
        /*eslint no-console: 0*/
        saveToLS("layout", layout);
        changeLayouts({ layout });
        // this.props.onLayoutChange(layout); // updates status display
      }

      function getFromLS(key) {
        let ls = {};
        if (global.localStorage) {
          try {
            ls = JSON.parse(localStorage.getItem("stock-board")) || {};
          } catch (e) {
            /*Ignore*/
          }
        }
        return ls[key];
      }
      
      
  const saveToLS = (key, value) => {
    if (global.localStorage) {
      global.localStorage.setItem(
        "stock-board",
        JSON.stringify({
          [key]: value
        })
      );
    }
  }


    return (
        <div>
            <div className="grid-container">
            {
                 <ResponsiveReactGridLayout className="layout" layouts={layouts} rowHeight={30}
                     breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
                     cols={{lg: 6, md: 4, sm: 2, xs: 1, xxs: 1}}>
                        {createElement(tickers)}
                </ResponsiveReactGridLayout>
            }
            </div>
        </div>
    )

    
}
export default TickerList