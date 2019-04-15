/* eslint-disable react/jsx-no-bind */
import React from "react"
import classNames from "classnames"
import { withStyles } from "@material-ui/core/styles"
import TableCell from "@material-ui/core/TableCell"
import Paper from "@material-ui/core/Paper"
import { AutoSizer, Column, Table } from "react-virtualized"
import data from "./mockData"

const styles = theme => ({
  table: {
    fontFamily: theme.typography.fontFamily,
  },
  flexContainer: {
    display: "flex",
    alignItems: "center",
    boxSizing: "border-box",
    flex: 1,
  },
  tableRowHover: {
    "&:hover": {
      backgroundColor: theme.palette.grey[200],
    },
  },
})

class MuiVirtualized extends React.PureComponent {
  getRowClassName = ({ index }) => {
    const { classes } = this.props
    return classNames(classes.flexContainer, {
      [classes.tableRowHover]: index !== -1,
    })
  }

  cellRenderer = ({ cellData, columnIndex = null }) => {
    const { classes, rowHeight } = this.props
    return (
      <TableCell
        component="div"
        className={classes.flexContainer}
        variant="body"
        style={{ height: rowHeight }}>
        {cellData}
      </TableCell>
    )
  }

  headerRenderer = ({ label }) => {
    const { headerHeight, classes } = this.props
    return (
      <TableCell
        component="div"
        className={classes.flexContainer}
        variant="head"
        style={{ height: headerHeight }}>
        <strong>{label}</strong>
      </TableCell>
    )
  }

  render() {
    const { classes, columns, ...tableProps } = this.props
    return (
      <AutoSizer>
        {({ height, width }) => (
          <Table
            className={classes.table}
            height={height}
            width={width}
            {...tableProps}
            rowClassName={this.getRowClassName}>
            {columns.map(
              (
                { cellContentRenderer = null, className, dataKey, ...other },
                index,
              ) => {
                let renderer
                if (cellContentRenderer != null) {
                  renderer = cellRendererProps =>
                    this.cellRenderer({
                      cellData: cellContentRenderer(cellRendererProps),
                      columnIndex: index,
                    })
                } else {
                  renderer = this.cellRenderer
                }

                return (
                  <Column
                    key={dataKey}
                    headerRenderer={headerProps =>
                      this.headerRenderer({
                        ...headerProps,
                        columnIndex: index,
                      })
                    }
                    className={classNames(classes.flexContainer, className)}
                    cellRenderer={renderer}
                    dataKey={dataKey}
                    {...other}
                  />
                )
              },
            )}
          </Table>
        )}
      </AutoSizer>
    )
  }
}

MuiVirtualized.defaultProps = {
  headerHeight: 56,
  rowHeight: 56,
}

const WrappedVirtualizedTable = withStyles(styles)(MuiVirtualized)

const ReactVirtualizedTable = () => (
  <Paper style={{ height: 500, width: "100%" }}>
    <WrappedVirtualizedTable
      rowCount={data.length}
      rowGetter={({ index }) => data[index]}
      columns={[
        {
          width: 200,
          label: "STRAIN DESCRIPTOR",
          dataKey: "descriptor",
        },
        {
          width: 250,
          flexGrow: 1.0,
          label: "STRAIN SUMMARY",
          dataKey: "summary",
        },
        {
          width: 200,
          label: "STRAIN ID",
          dataKey: "id",
        },
        {
          width: 200,
          label: "AVAILABILITY",
          dataKey: "in_stock",
        },
      ]}
    />
  </Paper>
)

export default ReactVirtualizedTable
