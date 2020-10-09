
import React,{ useState } from 'react'
import TickerChart from './TickerChart'
import ContainerDimensions from 'react-container-dimensions'

// import '../../node_modules/react-grid-layout/css/styles.css'
// import '../../node_modules/react-resizable/css/styles.css'
// import '../components/grid_elem/resizable-styles.css'
import '../components/grid_elem/grid_styles.css'
import '../components/grid_elem/example-styles.css'

import { WidthProvider, Responsive } from "react-grid-layout";
const ResponsiveReactGridLayout = WidthProvider(Responsive);




const TickerList = (props) => {
    const ticker = props.ticker
    const tickers = props.tickerList
    const list = Array.from(tickers)
    console.log('first ticker:', list[0])

    const layouts = {}

    // const getWidth = () => {
    //     const parent = 
    // }

    return (
        <div>
            <p>ABC</p>
            <div className="grid-container">
            {
                 <ResponsiveReactGridLayout className="layout" layouts={layouts} rowHeight={30}
                     breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
                     cols={{lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}}>
                         {/* <ContainerDimensions>
                         { ({ width, height }) => 
                             <div key="b" data-grid={{x: 0, y: 0, w: 4, h: 10}}><TickerChart ticker= {ticker}/></div>
                         }
                        </ContainerDimensions> */}
                    <div key="b" data-grid={{x: 0, y: 0, w: 4, h: 10}}><TickerChart ticker= {ticker}/></div>
                    {/* <div key="c" data-grid={{x: 4, y: 0, w: 4, h: 10}}><TickerChart ticker={list[1]}/></div> */}
                </ResponsiveReactGridLayout>
            }
            </div>
            
        </div>
    )
}
export default TickerList