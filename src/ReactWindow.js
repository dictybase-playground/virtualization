import React from "react"
import { withStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import { FixedSizeList } from "react-window"
import data from "./mockData"

const styles = theme => ({
  root: {
    width: "100%",
    height: 400,
    maxWidth: 360,
    backgroundColor: "#fff",
  },
})

const Row = ({ index, style }) => (
  <Grid item xs={12}>
    {data[index].id}
  </Grid>
)

const ReactWindow = props => {
  const { classes } = props

  return (
    <div className={classes.root}>
      <Grid container>
        <FixedSizeList
          height={400}
          width={900}
          itemSize={46}
          itemCount={data.length}>
          {Row}
        </FixedSizeList>
      </Grid>
    </div>
  )
}

export default withStyles(styles)(ReactWindow)
