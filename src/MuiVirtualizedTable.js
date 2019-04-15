/* eslint-disable react/jsx-no-bind */
import React from "react"
import MuiTable from "mui-virtualized-table"
import Paper from "@material-ui/core/Paper"
import { AutoSizer } from "react-virtualized"
import data from "./mockData"

const columns = [
  {
    width: "15%",
    header: "STRAIN DESCRIPTOR",
    name: "descriptor",
  },
  {
    width: "50%",
    flexGrow: 1.0,
    header: "STRAIN SUMMARY",
    name: "summary",
  },
  {
    width: "20%",
    header: "STRAIN ID",
    name: "id",
  },
  {
    width: "15%",
    header: "AVAILABILITY",
    name: "in_stock",
  },
]

class MuiVirtualizedTable extends React.Component {
  render() {
    return (
      <Paper style={{ height: 500, width: "100%" }}>
        <AutoSizer>
          {({ height, width }) => (
            <MuiTable
              data={data}
              columns={columns}
              width={width}
              height={500}
              rowHeight={70}
              includeHeaders
              fixedRowCount={1}
              onCellClick={() => console.log("clicked")}
            />
          )}
        </AutoSizer>
      </Paper>
    )
  }
}

export default MuiVirtualizedTable
