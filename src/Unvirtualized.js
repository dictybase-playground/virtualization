import React from "react"
import data from "./mockData"

const Unvirtualized = () => (
  <div>
    {data.map((item, index) => (
      <div key={index}>{item.id}</div>
    ))}
  </div>
)

export default Unvirtualized
