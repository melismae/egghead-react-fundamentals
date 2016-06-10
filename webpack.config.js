module.exports = {
  entry: './main.js',
  output: {
    path: './',
    //the bundled file
    filename: 'index.js'
  },
  devServer: {
    //reload on the fly
    inline: true,
    //whatever you want
    port: 3333
  },
  module: {
    loaders: [
      {
        //test for .js at the end of a filename
        test: /\.js$/,
        //so we don't process the node mods
        exclude: /node_modules/,
        loader: 'babel',
        //preloader setup
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}
