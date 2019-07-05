module.exports = {
  // permit use of .vue Single File Components
  runtimeCompiler: true,
  devServer: {
    port: 8080,
    open: true,
    // permit use of custom host name for localhost in development
    // disableHostCheck: true // would be potential security flaw
    disableHostCheck: process.env.NODE_ENV === 'development' ? true : ''
  }
}
