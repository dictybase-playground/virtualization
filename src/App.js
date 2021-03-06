import React from "react"
import { Switch, Route, Link } from "react-router-dom"
import ReactWindow from "./ReactWindow"
import MuiVirtualizedTable from "./MuiVirtualizedTable"
import MuiVirtualized from "./MuiVirtualized"
import Unvirtualized from "./Unvirtualized"
import "./App.css"

const App = () => (
  <div className="App">
    <ul>
      {/* <li>
        <Link to="/react-window">react-window</Link>
      </li> */}
      <li>
        <Link to="/mui-virtualized-table">mui-virtualized-table</Link>
      </li>
      <li>
        <Link to="/mui-virtualized">react-virtualized & material-ui</Link>
      </li>
      <li>
        <Link to="/unvirtualized">unvirtualized</Link>
      </li>
    </ul>
    <Switch>
      <Route path="/react-window" component={ReactWindow} />
      <Route path="/mui-virtualized-table" component={MuiVirtualizedTable} />
      <Route path="/mui-virtualized" component={MuiVirtualized} />
      <Route path="/unvirtualized" component={Unvirtualized} />
    </Switch>
  </div>
)

export default App
