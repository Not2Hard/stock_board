
const LAYOUT_KEY = "board-layout"

export function loadLayout() {
    try {
        return JSON.parse(localStorage.getItem(LAYOUT_KEY)) || {};
    } catch (e) {
        return {}
    }
}

export function saveLayout(layout){
    localStorage.setItem(LAYOUT_KEY,JSON.stringify({"layout": layout}))
    console.log("app is saving lauout", layout)
}

export function addTicker2Layout(ticker, layout){
    
    const newTicker = {
        i: ticker,
        x: (layout.length * 2) % (3),
        y: Infinity, // puts it at the bottom
        w: 2,
        h: 10
      }

      const newLayout = layout.push(newTicker)
      return newLayout

}
