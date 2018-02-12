module.exports = {
    entry: ['./js/markerclusterer.js', './js/main.js'],
    output: {
      filename: './js/build.js',
      path: __dirname
    },
    watch: false,
    
        module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          },
        ],
        }
  };