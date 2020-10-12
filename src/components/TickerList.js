
import React,{ createElement, useState } from 'react'
import TickerChart from './TickerChart'
import uuid from 'uuid';


// import '../../node_modules/react-grid-layout/css/styles.css'
// import '../../node_modules/react-resizable/css/styles.css'
// import '../components/grid_elem/resizable-styles.css'
import '../components/grid_elem/grid_styles.css'
import '../components/grid_elem/example-styles.css'

import { WidthProvider, Responsive } from "react-grid-layout";
const ResponsiveReactGridLayout = WidthProvider(Responsive);
const uuidv4 = require("uuid/v4")


const TickerList = (props) => {
    const [items, changeItems] = useState([])
    const [counter, changeCounter] = useState(0)
    const [cols, changeCols] = useState(3)



    const ticker = props.ticker
    const tickers = props.tickerList
    const allTickers = Array.from(tickers)
    console.log('array of stocks', tickers)

    const layouts = {}
    const createElement = (el) => {
        return(
            <div key={el.i} data-grid={{x: el.x, y: el.y, w: 4, h: 10}}>
                <TickerChart ticker= {el.ticker}/>
            </div>

        )
    }
    const onAddStock = () => {
        changeItems(items.concat({
            i: uuidv4(),
            x: (items.length * 2) % (cols || 12),
            y: Infinity, // puts it at the bottom
            w: 2,
            h: 10,
            ticker: ticker
        })
        )
        changeCounter(counter + 1)
        console.log('add is clicked')
    }


    return (
        <div>
            <p>ABC</p>
            <button onClick={onAddStock}>Add Item</button>
            <div className="grid-container">
            {
                 <ResponsiveReactGridLayout className="layout" layouts={layouts} rowHeight={30}
                     breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
                     cols={{lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}}>
                        {items.map(el => createElement(el))}
                </ResponsiveReactGridLayout>
            }
            </div>
            
        </div>
    )
}
export default TickerList