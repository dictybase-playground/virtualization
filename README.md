# Virtualization

Testing different virtualization methods for displaying stock catalog data.

Findings:

1. `react-window` is smallest but not the best fit for us since it only uses lists and grids. It would also require the use of external libraries such as `react-virtualized-auto-sizer` and `react-window-infinite-loader`.
2. `mui-virtualized-table` is nice and also simplifies things a bit, but it isn't quite as flexible as building our own instance. It would also still require use of `AutoSizer` from the `react-virtualized` library.
3. Building our own component(s) using `react-virtualized` and `material-ui` is the way to go. This allows us to use the table structure with customized row heights and specialized cell content. This is important with our summary fields often being very different in length. It's also easier to provide our own unique "add to cart" field for the availability column.
